import sqlite3
import json

with open("oracle-cards-20260614210315.json", "r", encoding="utf-8") as file:
  card_data = json.load(file)

connection = sqlite3.connect("scryfallOracleCards.db")
cursor = connection.cursor()

cursor.execute("PRAGMA foreign_keys = ON;")

cursor.execute("""
CREATE TABLE IF NOT EXISTS cards (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  mana_cost TEXT,
  cmc REAL,
  type_line TEXT,
  oracle_text TEXT,
  rarity TEXT,
  set_name TEXT,
  tcgplayer_id INTEGER
);
""")

cursor.execute("""
CREATE TABLE IF NOT EXISTS card_images (
  card_id TEXT PRIMARY KEY,
  small TEXT,
  normal TEXT,
  large TEXT,
  png TEXT,
  art_crop TEXT,
  border_crop TEXT,
  FOREIGN KEY(card_id) REFERENCES cards(id) ON DELETE CASCADE
);
""")

for card in card_data:
  card_id = card.get("id")

  cursor.execute("""
    INSERT OR REPLACE INTO cards (id, name, mana_cost, cmc, type_line, oracle_text, rarity, set_name, tcgplayer_id)
    VALUES (?,?,?,?,?,?,?,?,?)
  """,(card_id, card.get("name"), card.get("mana_cost"), card.get("cmc"), card.get("type_line"), card.get("oracle_text"),
       card.get("rarity"), card.get("set_name"), card.get("tcgplayer_id")))
  
  image = card.get("image_uris", {})
  if image:
    cursor.execute("""
        INSERT OR REPLACE INTO card_images (card_id, small, normal, large, png, art_crop, border_crop)
        VALUES (?,?,?,?,?,?,?)
    """, (card_id, image.get("small"), image.get("normal"), image.get("large"), image.get("png"), image.get("art_crop"), image.get("border_crop")))

# TURSO PREPARATION: Enable WAL mode and truncate the log file
# cursor.execute("PRAGMA journal_mode=WAL;")
# cursor.execute("PRAGMA wal_checkpoint(TRUNCATE);")

connection.commit()
connection.close()
print("Database successfully generated")