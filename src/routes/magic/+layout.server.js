import { db } from '$lib/server/db';
import { JWT } from 'google-auth-library';
import { PRIVATE_GOOGLE_CLIENT_EMAIL, PRIVATE_GOOGLE_PRIVATE_KEY } from '$env/static/private';

const FOLDER_ID = '1eFrPBSgtlMBhuHXjn0QH26GWl3nXXQda';

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

const cleanName = (name) => name.trim();

export const load = async () => {
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

      for(let line of lines) {
        line = line.trim();
        if (!line) continue;

        // Detect section headers
        if (line.toUpperCase().includes('COMMANDER')) {
          isCommanderSection = true;
          continue;
        }

        const regex = /^(\d+)\s+([^(\n]+)(?:\s+\(([^)]+)\)\s+(\d+))?/;
        const match = line.match(regex);

        if (match) {
          const quantity = parseInt(match[1], 10);
          const name = cleanName(match[2]);
          // I'm using the oracle database, so being this specific doesnt matter
          //const setCode = match[3] ? match[3].toLowerCase() : null;
          //const collectorNumber = match[4] || null;

          let cardDetails;

          if(!Object.hasOwn(allCards, name)) {
            try {
              let dbCard = db.prepare(`
                SELECT * 
                FROM cards
                INNER JOIN card_images ON cards.id = card_images.card_id
                WHERE name = ?
              `).get(name);

              allCards[name] = dbCard || { error: 'Card data missing from local database' }
            } catch (dbError) {
              console.error('Database query failed for:', name, dbError);
            }
          }

          const details = allCards[name]
          
          const cardObject = {
            quantity,
            name,
            details
          };

          if (isCommanderSection) {
            commanderCards.push(cardObject);
            isCommanderSection = false; 
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
    return { decks: completedDecks };

  } catch (error) {
    console.error('Authenticated Google Drive fetch failed:', error);
    return { files: [] };
  }
};
