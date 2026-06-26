import { db } from '$lib/server/db';
import { JWT } from 'google-auth-library';
import { PRIVATE_GOOGLE_CLIENT_EMAIL, PRIVATE_GOOGLE_PRIVATE_KEY, FOLDER_ID } from '$env/static/private';

// Initialize the authenticated Google Service Account client
const authClient = new JWT({
  email: PRIVATE_GOOGLE_CLIENT_EMAIL,
  // Google private keys use literal escaped newlines (\n), this replace fix ensures Node parses them flawlessly
  key: PRIVATE_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
});

export const config = {
  isr: {
    // Expiration time in seconds - 1 day
    // Decklists don't change that often
    expiration: 86400,
  }
};

function cleanName(name) {
  if (!name) return '';
  return name.replace(/\r/g, '').trim(); 
}

export const load = async ({ setHeaders, locals }) => {
  try {
    // Authorize the client before making requests
    await authClient.authorize();

    // 1. Get the list of files from the folder
    const listUrl = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents+and+mimeType='text/plain'`;
    const listResponse = await authClient.request({ url: listUrl });
    const listData = listResponse.data;

    if (!listData.files || listData.files.length === 0) {
      return { decks: {} };
    }

    // 2. Download the contents concurrently
    const parsedDeckPromises = listData.files.map(async (file) => {
      const fileUrl = `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media`;
      const fileResponse = await authClient.request({ url: fileUrl, responseType: 'text' });
      const rawText = fileResponse.data;

      const commanderCards = [];
      const mainboardCards = [];
      const allCards = {}; // store fetched cards to avoid repeated querying
      let isCommanderSection = false;

      const lines = rawText.split(/\r?\n/);
      const lookupStatement = db.prepare(`
        SELECT
          cards.name,
          cards.type_line,
          card_images.art_crop,
          card_images.large
        FROM cards
        INNER JOIN card_images ON cards.id = card_images.card_id
        WHERE cards.layout != 'art_series' 
          AND (cards.name = @exactName OR cards.name LIKE @dfcName)
      `);

      for(let line of lines) {
        line = line.trim();
        if (!line) {
          isCommanderSection = false
          continue;
        }

        if (line.toUpperCase().includes('// COMMANDER')) {
          isCommanderSection = true;
          continue;
        }

        // if(isCommanderSection) console.log(line)

        const regex = /^(\d+)\s+([^(\n]+?)\s+\(([^)]+)\)\s+(\d+)(?:\s+\*[A-Z]\*)?$/i;
        const match = line.trim().match(regex);

        // if(isCommanderSection) console.log(match)


        if (match) {
          const quantity = parseInt(match[1], 10);
          const name = cleanName(match[2]);

          // if(isCommanderSection) console.log(name)

          let cardDetails;

          if(!Object.hasOwn(allCards, name)) {
            try {
              let rows = lookupStatement.all({
                exactName: name,
                dfcName: `${name} //%`
              });

              if(rows.length > 0) {
                const { large, art_crop, ...cardData } = rows[0];
                const faces = rows.map(r => ({
                  large: r.large,
                  art_crop: r.art_crop,
                }));

                allCards[name] = {
                  ...cardData,
                  faces: faces
                };
              }
              else {
                allCards[name] = { error: 'Card data missing from local database' }
              }
            } catch (dbError) {
              console.error('Database query failed for:', name, dbError);
            }
          }

          const details = allCards[name]
          
          const cardObject = {
            quantity,
            ...details
          };

          if (isCommanderSection) {
            commanderCards.push(cardObject);
          } else {
            mainboardCards.push(cardObject);
          }
        }
      }

      return {
        deckName: file.name.replace('.txt', ''),
        commanders: commanderCards,
        mainboard: mainboardCards
      };
    });

    const completedDecks = await Promise.all(parsedDeckPromises);

    setHeaders({
      'cache-control': 'private, max-age=60'
    });

    return { decks: completedDecks };

  } catch (error) {
    console.error('Authenticated Google Drive fetch failed:', error);
    return { files: [] };
  }
};
