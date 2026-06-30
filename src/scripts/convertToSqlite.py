import sqlite3
import json
import shutil

bulkCardFile = input("Enter path for bulk data file:")
outputPath = input("Enter db file destination:")

with open(bulkCardFile, "r", encoding="utf-8") as file:
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
  layout TEXT
);
""")

cursor.execute("""
CREATE TABLE IF NOT EXISTS card_images (
  illustration_id TEXT PRIMARY KEY,
  card_id TEXT,
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
  layout = card.get("layout")

  if card.get("digital") == True and card["name"].startswith("A-"):
    continue

  if layout in ("art_series", "token", "memorabilia", "emblem"):
    continue

  cursor.execute("""
    INSERT OR REPLACE INTO cards (id, name, mana_cost, cmc, type_line, oracle_text, rarity, set_name, layout)
    VALUES (?,?,?,?,?,?,?,?,?)
  """, (
    card_id, 
    card.get("name"), 
    card.get("mana_cost"),
    card.get("cmc"),
    card.get("type_line"),
    card.get("oracle_text"),
    card.get("rarity"),
    card.get("set_name"),
    card.get("layout")
  ))

  if "card_faces" in card and "image_uris" in card["card_faces"][0]:
    for face in card["card_faces"]:
      illustration_id = face.get("illustration_id")
      image = face.get("image_uris", {})
      
      if illustration_id and image:
        cursor.execute("""
          INSERT OR REPLACE INTO card_images (illustration_id, card_id, small, normal, large, png, art_crop, border_crop)
          VALUES (?,?,?,?,?,?,?,?)
        """, (
          illustration_id, 
          card_id, 
          image.get("small"), 
          image.get("normal"), 
          image.get("large"), 
          image.get("png"), 
          image.get("art_crop"), 
          image.get("border_crop")
        ))
  else:
    image = card.get("image_uris", {})
    illustration_id = card.get("illustration_id")

    if image:
      cursor.execute("""
          INSERT OR REPLACE INTO card_images (illustration_id, card_id, small, normal, large, png, art_crop, border_crop)
          VALUES (?,?,?,?,?,?,?,?)
      """, (
        illustration_id,
        card_id,
        image.get("small"),
        image.get("normal"),
        image.get("large"),
        image.get("png"),
        image.get("art_crop"),
        image.get("border_crop")
      ))


cursor.execute("""
  CREATE INDEX IF NOT EXISTS idx_cards_lookup 
  ON cards (name);
""");

cursor.execute("""
  CREATE INDEX IF NOT EXISTS idx_card_images_card_id 
  ON card_images (card_id);
""");

connection.commit()
connection.close()
print("Database successfully generated")
print(f"Moving db file to {outputPath}")
shutil.move("scryfallOracleCards.db", outputPath)
print("File successfully moved")