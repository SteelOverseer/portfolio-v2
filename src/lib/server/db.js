import Database from 'better-sqlite3';
import path from 'path';

// Netlify extracts bundled files into a specific process directory
const dbPath = path.resolve('src/lib/data/scryfallOracleCards.db');

// Open the database strictly as read-only
export const db = new Database(dbPath, { readonly: true });
