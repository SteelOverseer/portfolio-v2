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

export const load = async ({ setHeaders }) => {
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

    const filePayloads = await Promise.all(
      listData.files.map(async (file) => {
        const fileUrl = `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media`;
        const fileResponse = await authClient.request({ url: fileUrl, responseType: 'text' });
        return { name: file.name, text: fileResponse.data };
      })
    );

    const uniqueNames = new Set();
    const regex = /^(\d+)\s+([^(\n]+?)\s+\(([^)]+)\)\s+(\d+)(?:\s+\*[A-Z]\*)?$/i;

    filePayloads.forEach(file => {
      file.text.split(/\r?\n/).forEach(line => {
        const match = line.trim().match(regex);
        if (match) uniqueNames.add(cleanName(match[2]));
      });
    });

    const nameArray = Array.from(uniqueNames);
    const allCards = {};

    if (nameArray.length > 0) {
      // Dynamically build a bulk parameters placeholder list (?, ?, ?)
      const conditions = nameArray.map(() => `(cards.name = ? OR cards.name LIKE ?)`).join(' OR ');
      
      const bulkStatement = db.prepare(`
        SELECT cards.name, cards.type_line, card_images.art_crop, card_images.large
        FROM cards
        INNER JOIN card_images ON cards.id = card_images.card_id
        WHERE cards.layout != 'art_series' 
          AND (${conditions})
      `);

      const queryParams = nameArray.flatMap(name => [name, `${name} //%`])
      const rows = bulkStatement.all(...queryParams);

      rows.forEach(row => {
        // Find which unique name from your decklist matched this row
        // (Handles mapping "Wrenn and Realmbreaker // Wrenn and Realmbreaker" back to "Wrenn and Realmbreaker")
        const matchedKey = nameArray.find(name => 
          row.name === name || row.name.startsWith(`${name} //`)
        );

        if (matchedKey) {
          if (!allCards[matchedKey]) {
            allCards[matchedKey] = { name: row.name, type_line: row.type_line, faces: [] };
          }
          allCards[matchedKey].faces.push({ large: row.large, art_crop: row.art_crop });
        }
      });
    }

    const completedDecks = filePayloads.map((file) => {
      const commanderCards = [];
      const mainboardCards = [];
      let isCommanderSection = false;

      file.text.split(/\r?\n/).forEach(line => {
        line = line.trim();
        if (!line) {
          isCommanderSection = false;
          return;
        }
        if (line.toUpperCase().includes('// COMMANDER')) {
          isCommanderSection = true;
          return;
        }

        const match = line.match(regex);
        if (match) {
          const quantity = parseInt(match[1], 10);
          const name = cleanName(match[2]);
          const details = allCards[name] || { error: 'Card data missing from local database' };

          const cardObject = { quantity, ...details };
          if (isCommanderSection) {
            commanderCards.push(cardObject);
          } else {
            mainboardCards.push(cardObject);
          }
        }
      });

      return {
        deckName: file.name.replace('.txt', ''),
        commanders: commanderCards,
        mainboard: mainboardCards
      };
    });

    setHeaders({
      'cache-control': 'private, max-age=60'
    });

    return { decks: completedDecks };

  } catch (error) {
    console.error('Authenticated Google Drive fetch failed:', error);
    return { files: [] };
  }
};
