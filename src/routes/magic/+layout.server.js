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
        expiration: 86400,
    }
};

export const load = async () => {
    try {
        // Authorize the client before making requests
        await authClient.authorize();

        // 1. Get the list of files from the folder
        const listUrl = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents+and+mimeType='text/plain'`;
        const listResponse = await authClient.request({ url: listUrl });
        const listData = listResponse.data;

        if (!listData.files || listData.files.length === 0) {
            return { files: [] };
        }

        // 2. Download the contents concurrently
        const fetchPromises = listData.files.map(async (file) => {
            const fileUrl = `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media`;
            const fileResponse = await authClient.request({ url: fileUrl, responseType: 'text' });
            
            return {
                fileName: file.name,
                content: fileResponse.data
            };
        });

        const allFiles = await Promise.all(fetchPromises);
        return { files: allFiles };

    } catch (error) {
        console.error('Authenticated Google Drive fetch failed:', error);
        return { files: [] };
    }
};

// export function load() {
//   try {
//       // Example query fetching items from your read-only database
//       const stmt = db.prepare('SELECT * FROM cards LIMIT 10');
//       const cards = stmt.all();

//       return { cards };
//   } catch (error) {
//       console.error('Database query failed:', error);
//       return { cards: [], error: 'Could not load data' };
//   }
// }
