<script>
  import DeckList from "../DeckList.svelte";

  let commander = {
    name: "Arcades, the Strategist",
    source: "https://cdn1.mtggoldfish.com/images/gf/Arcades%252C%2Bthe%2BStrategist%2B%253Ctimeshifted%253E%2B%255BTSR%255D.jpg",
    qty: 1
  }

  let creatures = [
    {
      name: "Shield Sphere",
      source: "https://cdn1.mtggoldfish.com/images/gf/Shield%2BSphere%2B%255BALL%255D.jpg",
      qty: 1
    },
    {
      name: "Perimeter Captain",
      source: "https://cdn1.mtggoldfish.com/images/gf/Perimeter%2BCaptain%2B%255BWWK%255D.jpg",
      qty: 1
    },
    {
      name: "Walking Bulwark",
      source: "https://cdn1.mtggoldfish.com/images/gf/Walking%2BBulwark%2B%255BDMU%255D.jpg",
      qty: 1
    },
    {
      name: "Wall of Runes",
      source: "https://cdn1.mtggoldfish.com/images/gf/Wall%2Bof%2BRunes%2B%255BWAR%255D.jpg",
      qty: 1
    },
    {
      name: "Crashing Drawbridge",
      source: "https://cdn1.mtggoldfish.com/images/gf/Crashing%2BDrawbridge%2B%255BELD%255D.jpg",
      qty: 1
    },
    {
      name: "Flumph",
      source: "https://cdn1.mtggoldfish.com/images/gf/Flumph%2B%255BAFR%255D.jpg",
      qty: 1
    },
    {
      name: "Jeskai Barricade",
      source: "https://cdn1.mtggoldfish.com/images/gf/Jeskai%2BBarricade%2B%255BFRF%255D.jpg",
      qty: 1
    },
    {
      name: "Overgrown Battlement",
      source: "https://cdn1.mtggoldfish.com/images/gf/Overgrown%2BBattlement%2B%255BMB1%255D.jpg",
      qty: 1
    },
    {
      name: "Stalwart Shield-Bearers",
      source: "https://cdn1.mtggoldfish.com/images/gf/Stalwart%2BShield-Bearers%2B%255BROE%255D.jpg",
      qty: 1
    },
    {
      name: "Sunscape Familiar",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sunscape%2BFamiliar%2B%255BPS%255D.jpg",
      qty: 1
    },
    {
      name: "Sylvan Caryatid",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sylvan%2BCaryatid%2B%255BTHS%255D.jpg",
      qty: 1
    },
    {
      name: "Tetsuko Umezawa, Fugitive",
      source: "https://cdn1.mtggoldfish.com/images/gf/Tetsuko%2BUmezawa%252C%2BFugitive%2B%255BCMM%255D.jpg",
      qty: 1
    },
    {
      name: "Vine Trellis",
      source: "https://cdn1.mtggoldfish.com/images/gf/Vine%2BTrellis%2B%255BMM%255D.jpg",
      qty: 1
    },
    {
      name: "Wall of Blossoms",
      source: "https://cdn1.mtggoldfish.com/images/gf/Wall%2Bof%2BBlossoms%2B%255BJMP%255D.jpg",
      qty: 1
    },
    {
      name: "Wall of Junk",
      source: "https://cdn1.mtggoldfish.com/images/gf/Wall%2Bof%2BJunk%2B%255BDMR%255D.jpg",
      qty: 1
    },
    {
      name: "Wall of Mulch",
      source: "https://cdn1.mtggoldfish.com/images/gf/Wall%2Bof%2BMulch%2B%255BM15%255D.jpg",
      qty: 1
    },
    {
      name: "Wall of Omens",
      source: "https://cdn1.mtggoldfish.com/images/gf/Wall%2Bof%2BOmens%2B%255BMKC%255D.jpg",
      qty: 1
    },
    {
      name: "Wall of Roots",
      source: "https://cdn1.mtggoldfish.com/images/gf/Wall%2Bof%2BRoots%2B%255BNCC%255D.jpg",
      qty: 1
    },
    {
      name: "Wall of Shards",
      source: "https://cdn1.mtggoldfish.com/images/gf/Wall%2Bof%2BShards%2B%255BCSP%255D.jpg",
      qty: 1
    },
    {
      name: "Wall of Tanglecord",
      source: "https://cdn1.mtggoldfish.com/images/gf/Wall%2Bof%2BTanglecord%2B%255BSOM%255D.jpg",
      qty: 1
    },
    {
      name: "Axebane Guardian",
      source: "https://cdn1.mtggoldfish.com/images/gf/Axebane%2BGuardian%2B%255BRTR%255D.jpg",
      qty: 1
    },
    {
      name: "Carven Caryatid",
      source: "https://cdn1.mtggoldfish.com/images/gf/Carven%2BCaryatid%2B%255BJMP%255D.jpg",
      qty: 1
    },
    {
      name: "Drift of Phantasms",
      source: "https://cdn1.mtggoldfish.com/images/gf/Drift%2Bof%2BPhantasms%2B%253Cretro%253E%2B%255BRVR%255D.jpg",
      qty: 1
    },
    {
      name: "Hover Barrier",
      source: "https://cdn1.mtggoldfish.com/images/gf/Hover%2BBarrier%2B%255BRTR%255D.jpg",
      qty: 1
    },
    {
      name: "Wall of Denial",
      source: "https://cdn1.mtggoldfish.com/images/gf/Wall%2Bof%2BDenial%2B%255BCMM%255D.jpg",
      qty: 1
    },
    {
      name: "Wall of Frost",
      source: "https://cdn1.mtggoldfish.com/images/gf/Wall%2Bof%2BFrost%2B%255BM10%255D.jpg",
      qty: 1
    },
    {
      name: "Weathered Sentinels",
      source: "https://cdn1.mtggoldfish.com/images/gf/Weathered%2BSentinels%2B%255BNCC%255D.jpg",
      qty: 1
    },
    {
      name: "Shield-Wall Sentinel",
      source: "https://cdn1.mtggoldfish.com/images/gf/Shield-Wall%2BSentinel%2B%255BDMU%255D.jpg",
      qty: 1
    },
    {
      name: "Tree of Redemption",
      source: "https://cdn1.mtggoldfish.com/images/gf/Tree%2Bof%2BRedemption%2B%255BISD%255D.jpg",
      qty: 1
    },
    {
      name: "Wall of Stolen Identity",
      source: "https://cdn1.mtggoldfish.com/images/gf/Wall%2Bof%2BStolen%2BIdentity%2B%255BC19%255D.jpg",
      qty: 1
    },
    {
      name: "Wingmantle Chaplain",
      source: "https://cdn1.mtggoldfish.com/images/gf/Wingmantle%2BChaplain%2B%255BDMU%255D.jpg",
      qty: 1
    },
    {
      name: "Mnemonic Wall",
      source: "https://cdn1.mtggoldfish.com/images/gf/Mnemonic%2BWall%2B%255BIMA%255D.jpg",
      qty: 1
    },
    {
      name: "Zopandrel, Hunger Dominus",
      source: "https://cdn1.mtggoldfish.com/images/gf/Zopandrel%252C%2BHunger%2BDominus%2B%253Cshowcase%253E%2B%255BONE%255D.jpg",
      qty: 1
    },
  ]

  let instants = [
    {
      name: "Swan Song",
      source: "https://cdn1.mtggoldfish.com/images/gf/Swan%2BSong%2B%255BTHS%255D.jpg",
      qty: 1
    },
    {
      name: "Swords to Plowshares",
      source: "https://cdn1.mtggoldfish.com/images/gf/Swords%2Bto%2BPlowshares%2B%255BWHO%255D.jpg",
      qty: 1
    },
    {
      name: "Counterspell",
      source: "https://cdn1.mtggoldfish.com/images/gf/Counterspell%2B%253Cborderless%253E%2B%255BCMM%255D.jpg",
      qty: 1
    },
    {
      name: "Cyclonic Rift",
      source: "https://cdn1.mtggoldfish.com/images/gf/Cyclonic%2BRift%2B%255BRTR%255D.jpg",
      qty: 1
    },
    {
      name: "Heroic Intervention",
      source: "https://cdn1.mtggoldfish.com/images/gf/Heroic%2BIntervention%2B%253Cextended%253E%2B%255BWHO%255D.jpg",
      qty: 1
    },
    {
      name: "Mana Drain",
      source: "https://cdn1.mtggoldfish.com/images/gf/Mana%2BDrain%2B%253Cshowcase%253E%2B%255BOTP%255D.jpg",
      qty: 1
    },
    {
      name: "Tower Defense",
      source: "https://cdn1.mtggoldfish.com/images/gf/Tower%2BDefense%2B%255BGTC%255D.jpg",
      qty: 1
    },
    {
      name: "Bar the Door",
      source: "https://cdn1.mtggoldfish.com/images/gf/Bar%2Bthe%2BDoor%2B%255BDKA%255D.jpg",
      qty: 1
    },
    {
      name: "Beast Within",
      source: "https://cdn1.mtggoldfish.com/images/gf/Beast%2BWithin%2B%255BBLC%255D.jpg",
      qty: 1
    },
    {
      name: "Eerie Interlude",
      source: "https://cdn1.mtggoldfish.com/images/gf/Eerie%2BInterlude%2B%255BSOI%255D.jpg",
      qty: 1
    },
    {
      name: "Flawless Maneuver",
      source: "https://cdn1.mtggoldfish.com/images/gf/Flawless%2BManeuver%2B%255BCMM%255D.jpg",
      qty: 1
    },
    {
      name: "Ghostway",
      source: "https://cdn1.mtggoldfish.com/images/gf/Ghostway%2B%253Cretro%253E%2B%255BRVR%255D.jpg",
      qty: 1
    },
    {
      name: "Akroma's Will",
      source: "https://cdn1.mtggoldfish.com/images/gf/Akroma%2527s%2BWill%2B%255BM3C%255D.jpg",
      qty: 1
    },
  ]

  let sorceries = [
    {
      name: "Retribution of the Meek",
      source: "https://cdn1.mtggoldfish.com/images/gf/Retribution%2Bof%2Bthe%2BMeek%2B%255BVI%255D.jpg",
      qty: 1
    },
    {
      name: "Slaughter the Strong",
      source: "https://cdn1.mtggoldfish.com/images/gf/Slaughter%2Bthe%2BStrong%2B%255BCLB%255D.jpg",
      qty: 1
    },
    {
      name: "Expel the Interlopers",
      source: "https://cdn1.mtggoldfish.com/images/gf/Expel%2Bthe%2BInterlopers%2B%255BWOE%255D.jpg",
      qty: 1
    },
    {
      name: "Fell the Mighty",
      source: "https://cdn1.mtggoldfish.com/images/gf/Fell%2Bthe%2BMighty%2B%255BMKC%255D.jpg",
      qty: 1
    },
    {
      name: "Last March of the Ents",
      source: "https://cdn1.mtggoldfish.com/images/gf/Last%2BMarch%2Bof%2Bthe%2BEnts%2B%253Cborderless%253E%2B%255BLTR%255D.jpg",
      qty: 1
    },
    {
      name: " Dusk // Dawn",
      source: "https://cdn1.mtggoldfish.com/images/gf/Dusk%2B%252F%252F%2BDawn%2B%255BMKC%255D.jpg",
      qty: 1
    },
  ]

  let planeswalkers = [
    {
      name: "Huatli, the Sun's Heart",
      source: "https://cdn1.mtggoldfish.com/images/gf/Huatli%252C%2Bthe%2BSun%2527s%2BHeart%2B%255BWAR%255D.jpg",
      qty: 1
    },
    {
      name: "Teyo, Geometric Tactician",
      source: "https://cdn1.mtggoldfish.com/images/gf/Teyo%252C%2BGeometric%2BTactician%2B%255BCMM%255D.jpg",
      qty: 1
    },
  ]

  let artifacts = [
    {
      name: "Meekstone",
      source: "https://cdn1.mtggoldfish.com/images/gf/Meekstone%2B%255B5ED%255D.jpg",
      qty: 1
    },
    {
      name: "Sol Ring",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sol%2BRing%2B%255BBLC%255D.jpg",
      qty: 1
    },
    {
      name: "Chromatic Lantern",
      source: "https://cdn1.mtggoldfish.com/images/gf/Chromatic%2BLantern%2B%253Cretro%253E%2B%255BRVR%255D.jpg",
      qty: 1
    },
    {
      name: "Rammas Echor, Ancient Shield",
      source: "https://cdn1.mtggoldfish.com/images/gf/Rammas%2BEchor%252C%2BAncient%2BShield%2B%253Cborderless%253E%2B%255BLTC%255D.jpg",
      qty: 1
    },
  ]

  let enchantments = [
    {
      name: "Assault Formation",
      source: "https://cdn1.mtggoldfish.com/images/gf/Assault%2BFormation%2B%255BDTK%255D.jpg",
      qty: 1
    },
    {
      name: "Brave the Sands",
      source: "https://cdn1.mtggoldfish.com/images/gf/Brave%2Bthe%2BSands%2B%255BKTK%255D.jpg",
      qty: 1
    },
    {
      name: "Aura Shards",
      source: "https://cdn1.mtggoldfish.com/images/gf/Aura%2BShards%2B%255BMB1%255D.jpg",
      qty: 1
    },
    {
      name: "High Alert",
      source: "https://cdn1.mtggoldfish.com/images/gf/High%2BAlert%2B%255BPLIST%255D.jpg",
      qty: 1
    },
    {
      name: "Rhystic Study",
      source: "https://cdn1.mtggoldfish.com/images/gf/Rhystic%2BStudy%2B%255BPR%255D.jpg",
      qty: 1
    },
    {
      name: "Stoneskin",
      source: "https://cdn1.mtggoldfish.com/images/gf/Stoneskin%2B%255BCLB%255D.jpg",
      qty: 1
    },
    {
      name: "Aluren",
      source: "https://cdn1.mtggoldfish.com/images/gf/Aluren%2B%255BTE%255D.jpg",
      qty: 1
    },
    {
      name: "Court of Ardenvale",
      source: "https://cdn1.mtggoldfish.com/images/gf/Court%2Bof%2BArdenvale%2B%255BWOC%255D.jpg",
      qty: 1
    },
  ]

  let lands = [
    {
      name: "Bountiful Promenade",
      source: "https://cdn1.mtggoldfish.com/images/gf/Bountiful%2BPromenade%2B%255BCLB%255D.jpg",
      qty: 1
    },
    {
      name: "Breeding Pool",
      source: "https://cdn1.mtggoldfish.com/images/gf/Breeding%2BPool%2B%255BRVR%255D.jpg",
      qty: 1
    },
    {
      name: "Command Tower",
      source: "https://cdn1.mtggoldfish.com/images/gf/Command%2BTower%2B%253C263%253E%2B%255BWHO%255D.jpg",
      qty: 1
    },
    {
      name: "Flooded Grove",
      source: "https://cdn1.mtggoldfish.com/images/gf/Flooded%2BGrove%2B%255BM3C%255D.jpg",
      qty: 1
    },
    {
      name: "Flooded Strand",
      source: "https://cdn1.mtggoldfish.com/images/gf/Flooded%2BStrand%2B%255BMH3%255D.jpg",
      qty: 1
    },
    {
      name: "Forest",
      source: "https://cdn1.mtggoldfish.com/images/gf/Forest%2B%253C254%253E%2B%255BTHB%255D.jpg",
      qty: 2
    },
    {
      name: "Glacial Fortress",
      source: "https://cdn1.mtggoldfish.com/images/gf/Glacial%2BFortress%2B%255BBLC%255D.jpg",
      qty: 1
    },
    {
      name: "Hallowed Fountain",
      source: "https://cdn1.mtggoldfish.com/images/gf/Hallowed%2BFountain%2B%255BRNA%255D.jpg",
      qty: 1
    },
    {
      name: "Hinterland Harbor",
      source: "https://cdn1.mtggoldfish.com/images/gf/Hinterland%2BHarbor%2B%255BBLC%255D.jpg",
      qty: 1
    },
    {
      name: "Island",
      source: "https://cdn1.mtggoldfish.com/images/gf/Island%2B%253C251%253E%2B%255BTHB%255D.jpg",
      qty: 3
    },
    {
      name: "Misty Rainforest",
      source: "https://cdn1.mtggoldfish.com/images/gf/Misty%2BRainforest%2B%255BMH2%255D.jpg",
      qty: 1
    },
    {
      name: "Mystic Gate",
      source: "https://cdn1.mtggoldfish.com/images/gf/Mystic%2BGate%2B%255BM3C%255D.jpg",
      qty: 1
    },
    {
      name: "Plains",
      source: "https://cdn1.mtggoldfish.com/images/gf/Plains%2B%253C250%253E%2B%255BTHB%255D.jpg",
      qty: 4
    },  
    {
      name: "Reflecting Pool",
      source: "https://cdn1.mtggoldfish.com/images/gf/Reflecting%2BPool%2B%255BCLB%255D.jpg",
      qty: 1
    },
    {
      name: "Rejuvenating Springs",
      source: "https://cdn1.mtggoldfish.com/images/gf/Rejuvenating%2BSprings%2B%253Cfoil%2Betched%253E%2B%255BCMM%255D.jpg",
      qty: 1
    },
    {
      name: "Reliquary Tower",
      source: "https://cdn1.mtggoldfish.com/images/gf/Reliquary%2BTower%2B%255BM3C%255D.jpg",
      qty: 1
    },
    {
      name: "Savannah",
      source: "https://cdn1.mtggoldfish.com/images/gf/Savannah%2B%255B3ED%255D.jpg",
      qty: 1
    },
    {
      name: "Sea of Clouds",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sea%2Bof%2BClouds%2B%255BCLB%255D.jpg",
      qty: 1
    },
    {
      name: "Spara's Headquarters",
      source: "https://cdn1.mtggoldfish.com/images/gf/Spara%2527s%2BHeadquarters%2B%255BSNC%255D.jpg",
      qty: 1
    },
    {
      name: "Sunpetal Grove",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sunpetal%2BGrove%2B%255BBLC%255D.jpg",
      qty: 1
    },
    {
      name: "Temple Garden",
      source: "https://cdn1.mtggoldfish.com/images/gf/Temple%2BGarden%2B%255BRTR%255D.jpg",
      qty: 1
    },
    {
      name: "Tropical Island",
      source: "https://cdn1.mtggoldfish.com/images/gf/Tropical%2BIsland%2B%255B3ED%255D.jpg",
      qty: 1
    },
    {
      name: "Tundra",
      source: "https://cdn1.mtggoldfish.com/images/gf/Tundra%2B%255B3ED%255D.jpg",
      qty: 1
    },
    {
      name: "Windswept Heath",
      source: "https://cdn1.mtggoldfish.com/images/gf/Windswept%2BHeath%2B%255BMH3%255D.jpg",
      qty: 1
    },
    {
      name: "Wooded Bastion",
      source: "https://cdn1.mtggoldfish.com/images/gf/Wooded%2BBastion%2B%255B2XM%255D.jpg",
      qty: 1
    },
    {
      name: "Yavimaya Hollow",
      source: "https://cdn1.mtggoldfish.com/images/gf/Yavimaya%2BHollow%2B%255BUD%255D.jpg",
      qty: 1
    },
    {
      name: "Yavimaya, Cradle of Growth",
      source: "https://cdn1.mtggoldfish.com/images/gf/Yavimaya%252C%2BCradle%2Bof%2BGrowth%2B%255BM3C%255D.jpg",
      qty: 1
    },
  ]
</script>

<div id="decklist">
  <h3 style="margin: 0px;">The Deck:</h3>
  <hr>
  <DeckList 
    commander={commander}
    creatures={creatures}
    instants={instants}
    planeswalkers={planeswalkers}
    sorceries={sorceries}
    artifacts={artifacts}
    enchantments={enchantments}
    lands={lands}
  />
</div>
<div id="gameplan">
  <h3 style="margin: 0px;">The Gameplan:</h3>
  <hr>
  <p>
    The best defense is the best offense.
    <br>
    <br>
    Walls are cheap to cast and have a large toughness, the drawbacks being they have 0 to little attack power and can't attack on their own.
    <br>
    <br>
    We build an army of walls and wait, eventually enabling them to attack with Arcades, Assault Formation or High Alert.
  </p>
</div>

<style lang="scss">
  #decklist {
    width: 100%;
  }
  
  #gameplan {
    width: 80%;
  }

  hr {
    width: 75%;
    margin-left: 0px;
  }
</style>