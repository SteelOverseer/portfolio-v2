import { db } from '$lib/server/db';

export function load() {
  try {
      // Example query fetching items from your read-only database
      const stmt = db.prepare('SELECT * FROM cards LIMIT 10');
      const cards = stmt.all();

      return { cards };
  } catch (error) {
      console.error('Database query failed:', error);
      return { cards: [], error: 'Could not load data' };
  }
}
