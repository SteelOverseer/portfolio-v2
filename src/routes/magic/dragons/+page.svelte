<script>
  import DeckList from "../DeckList.svelte";

  let commander = {
    name: "The Ur-Dragon",
    id: "the-ur-dragon",
    source: "https://cdn1.mtggoldfish.com/images/gf/The%2BUr-Dragon%2B%255BPZ2%255D.jpg",
    qty: 1
  }

  let creatures = [
    {
      name: "Dragonlord' Servant",
      id: "dragonlords-servent",
      source: "https://cdn1.mtggoldfish.com/images/gf/Dragonlord%2527s%2BServant%2B%255BJ22%255D.jpg",
      qty: 1
    },
    {
      name: "Dragonspeaker Shaman",
      id: "dragonspeaker-shaman",
      source: "https://cdn1.mtggoldfish.com/images/gf/Dragonspeaker%2BShaman%2B%255BJ22%255D.jpg",
      qty: 1
    },
    {
      name: "Rivaz of the Claw",
      id: "rivaz-of-the-claw",
      source: "https://cdn1.mtggoldfish.com/images/gf/Rivaz%2Bof%2Bthe%2BClaw%2B%253Cshowcase%253E%2B%255BDMU%255D.jpg",
      qty: 1
    },
    {
      name: "Sarkhan, Soul Aflame",
      id: "sarkhan-soul-aflame",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sarkhan%252C%2BSoul%2BAflame%2B%255BMAT%255D.jpg",
      qty: 1
    },
    {
      name: "Decadent Dragon",
      id: "decadent-dragon",
      source: "https://cdn1.mtggoldfish.com/images/gf/Decadent%2BDragon%2B%253Cshowcase%253E%2B%255BWOE%255D.jpg",
      qty: 1
    },
    {
      name: "Goldspan Dragon",
      id: "goldspan-dragon",
      source: "https://cdn1.mtggoldfish.com/images/gf/Goldspan%2BDragon%2B%255BM3C%255D.jpg",
      qty: 1
    },
    {
      name: "Rith, Liberated Primeval",
      id: "rith-liberated-primeval",
      source: "https://cdn1.mtggoldfish.com/images/gf/Rith%252C%2BLiberated%2BPrimeval%2B%253Cshowcase%253E%2B%255BDMU%255D.jpg",
      qty: 1
    },
    {
      name: "Scalelord Reckoner",
      id: "scalelord-reckoner",
      source: "https://cdn1.mtggoldfish.com/images/gf/Scalelord%2BReckoner%2B%255BC17%255D.jpg",
      qty: 1
    },
    {
      name: "Scion of the Ur-Dragon",
      id: "scion-of-ur-dragon",
      source: "https://cdn1.mtggoldfish.com/images/gf/Scion%2Bof%2Bthe%2BUr-Dragon%2B%255BC17%255D.jpg",
      qty: 1
    },
    {
      name: "Scourge of Valkas",
      id: "scourge-of-valkas",
      source: "https://cdn1.mtggoldfish.com/images/gf/Scourge%2Bof%2BValkas%2B%255BSCD%255D.jpg",
      qty: 1
    },
    {
      name: "Terror of the Peaks",
      id: "terror-of-the-peaks",
      source: "https://cdn1.mtggoldfish.com/images/gf/Terror%2Bof%2Bthe%2BPeaks%2B%255BOTJ%255D.jpg",
      qty: 1
    },
    {
      name: "Zurgo and Ojutai",
      id: "zurgo-and-ojutai",
      source: "https://cdn1.mtggoldfish.com/images/gf/Zurgo%2Band%2BOjutai%2B%253Cshowcase%253E%2B%255BMOM%255D.jpg",
      qty: 1
    },
    {
      name: "Ancient Copper Dragon",
      id: "ancient-copper-dragon",
      source: "https://cdn1.mtggoldfish.com/images/gf/Ancient%2BCopper%2BDragon%2B%253Cshowcase%253E%2B%255BCLB%255D.jpg",
      qty: 1
    },
    {
      name: "Dragonlord Dromoka",
      id: "dragonlord-dromoka",
      source: "https://cdn1.mtggoldfish.com/images/gf/Dragonlord%2BDromoka%2B%255B2X2%255D.jpg",
      qty: 1
    },
    {
      name: "Hellkite Courser",
      id: "hellkite-courser",
      source: "https://cdn1.mtggoldfish.com/images/gf/Hellkite%2BCourser%2B%255BCMR%255D.jpg",
      qty: 1
    },
    {
      name: "Lathliss, Dragon Queen",
      id: "lathliss-dragon-queen",
      source: "https://cdn1.mtggoldfish.com/images/gf/Lathliss%252C%2BDragon%2BQueen%2B%255BGN2%255D.jpg",
      qty: 1
    },
    {
      name: "Miirym, Sentinel Wyrm",
      id: "miirym-sentinel-wyrm",
      source: "https://cdn1.mtggoldfish.com/images/gf/Miirym%252C%2BSentinel%2BWyrm%2B%253Cfoil%2Betched%253E%2B%255BCLB%255D.jpg",
      qty: 1
    },
    {
      name: "Ramos, Dragon Engine",
      id: "ramos-dragon-engine",
      source: "https://cdn1.mtggoldfish.com/images/gf/Ramos%252C%2BDragon%2BEngine%2B%253Cschematics%253E%2B%255BBRR%255D.jpg",
      qty: 1
    },
    {
      name: "Silumgar, the Drifting Death",
      id: "silumgar-drifting-death",
      source: "https://cdn1.mtggoldfish.com/images/gf/Silumgar%252C%2Bthe%2BDrifting%2BDeath%2B%255BC17%255D.jpg",
      qty: 1
    },
    {
      name: "Two-Headed Hellkite",
      id: "two-headed-hellkite",
      source: "https://cdn1.mtggoldfish.com/images/gf/Two-Headed%2BHellkite%2B%255BDMC%255D.jpg",
      qty: 1
    },
    {
      name: "Ancient Gold Dragon",
      id: "ancient-gold-dragon",
      source: "https://cdn1.mtggoldfish.com/images/gf/Ancient%2BGold%2BDragon%2B%253Cshowcase%253E%2B%255BCLB%255D.jpg",
      qty: 1
    },
    {
      name: "Atarka, World Render",
      id: "atarka-world-render",
      source: "https://cdn1.mtggoldfish.com/images/gf/Atarka%252C%2BWorld%2BRender%2B%255BC17%255D.jpg",
      qty: 1
    },
    {
      name: "Balefire Dragon",
      id: "balefire-dragon",
      source: "https://cdn1.mtggoldfish.com/images/gf/Balefire%2BDragon%2B%255BISD%255D.jpg",
      qty: 1
    },
    {
      name: "Bladewing the Risen",
      id: "bladewing-the-risen",
      source: "https://cdn1.mtggoldfish.com/images/gf/Bladewing%2Bthe%2BRisen%2B%255BCMD%255D.jpg",
      qty: 1
    },
    {
      name: "Klauth, Unrivaled Ancient",
      id: "klauth-unrivaled-ancient",
      source: "https://cdn1.mtggoldfish.com/images/gf/Klauth%252C%2BUnrivaled%2BAncient%2B%255BAFC%255D.jpg",
      qty: 1
    },
    {
      name: "Old Gnawbone",
      id: "old-gnawbone",
      source: "https://cdn1.mtggoldfish.com/images/gf/Old%2BGnawbone%2B%255BPLIST%255D.jpg",
      qty: 1
    },
    {
      name: "Tiamat",
      id: "tiamat",
      source: "https://cdn1.mtggoldfish.com/images/gf/Tiamat%2B%255BAFR%255D.jpg",
      qty: 1
    },
    {
      name: "Ancient Silver Dragon",
      id: "ancient-silver-dragon",
      source: "https://cdn1.mtggoldfish.com/images/gf/Ancient%2BSilver%2BDragon%2B%253Cshowcase%253E%2B%255BCLB%255D.jpg",
      qty: 1
    },
    {
      name: "Utvara Hellkite",
      id: "utvara-hellkite",
      source: "https://cdn1.mtggoldfish.com/images/gf/Utvara%2BHellkite%2B%253Cretro%253E%2B%255BRVR%255D.jpg",
      qty: 1
    },
    {
      name: "Blast-Furnace Hellkite",
      id: "blast-furnace-hellkite",
      source: "https://cdn1.mtggoldfish.com/images/gf/Blast-Furnace%2BHellkite%2B%253Cretro%253E%2B%255BBRC%255D.jpg",
      qty: 1
    },
    {
      name: "Scion of Draco",
      id: "scion-of-draco",
      source: "https://cdn1.mtggoldfish.com/images/gf/Scion%2Bof%2BDraco%2B%255BMH2%255D.jpg",
      qty: 1
    },
  ]

  let instants = [
    {
      name: "Assassin's Trophy",
      id: "assassins-trophy",
      source: "https://cdn1.mtggoldfish.com/images/gf/Assassin%2527s%2BTrophy%2B%253Cextended%253E%2B%255BACR%255D.jpg",
      qty: 1
    },
    {
      name: "Cyclonic Rift",
      id: "cyclonic-rift",
      source: "https://cdn1.mtggoldfish.com/images/gf/Cyclonic%2BRift%2B%255BRTR%255D.jpg",
      qty: 1
    },
    {
      name: "Heroic Intervention",
      id: "heroic-intervention",
      source: "https://cdn1.mtggoldfish.com/images/gf/Heroic%2BIntervention%2B%253Cextended%253E%2B%255BWHO%255D.jpg",
      qty: 1
    },
    {
      name: "Anguished Unmaking",
      id: "anguished-unmaking",
      source: "https://cdn1.mtggoldfish.com/images/gf/Anguished%2BUnmaking%2B%253Cextended%253E%2B%255BPIP%255D.jpg",
      qty: 1
    },
    {
      name: "Utter End",
      id: "utter-end",
      source: "https://cdn1.mtggoldfish.com/images/gf/Utter%2BEnd%2B%255B40K%255D.jpg",
      qty: 1
    },
  ]

  let sorceries = [
    {
      name: "Demonic Tutor",
      id: "demonic-tutor",
      source: "https://cdn1.mtggoldfish.com/images/gf/Demonic%2BTutor%2B%255BMB1%255D.jpg",
      qty: 1
    },
    {
      name: "Farseek",
      id: "farseek",
      source: "https://cdn1.mtggoldfish.com/images/gf/Farseek%2B%255BBLC%255D.jpg",
      qty: 1
    },
    {
      name: "Three Visits",
      id: "three-visits",
      source: "https://cdn1.mtggoldfish.com/images/gf/Three%2BVisits%2B%255BCMR%255D.jpg",
      qty: 1
    },
    {
      name: "Skyshroud Claim",
      id: "skyshroud-claim",
      source: "https://cdn1.mtggoldfish.com/images/gf/Skyshroud%2BClaim%2B%255BCMM%255D.jpg",
      qty: 1
    },
    {
      name: "Crux of Fate",
      id: "crux-of-fate",
      source: "https://cdn1.mtggoldfish.com/images/gf/Crux%2Bof%2BFate%2B%255BFRF%255D.jpg",
      qty: 1
    },
    {
      name: "Patriarch's Bidding",
      id: "patriarchs-bidding",
      source: "https://cdn1.mtggoldfish.com/images/gf/Patriarch%2527s%2BBidding%2B%255BMH2%255D.jpg",
      qty: 1
    },
    {
      name: "Ruionous Ultimatum",
      id: "ruinous-ultimatum",
      source: "https://cdn1.mtggoldfish.com/images/gf/Ruinous%2BUltimatum%2B%253Cextended%253E%2B%255BPIP%255D.jpg",
      qty: 1
    },
  ]

  let planeswalkers = [
    {
      name: "Sarkhan Fireblood",
      id: "sarkhan-fireblood",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sarkhan%252C%2BFireblood%2B%255BM19%255D.jpg",
      qty: 1
    },
    {
      name: "Sivitri Dragon Master",
      id: "sivitri-dragon-master",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sivitri%252C%2BDragon%2BMaster%2B%255BDMC%255D.jpg",
      qty: 1
    },
    {
      name: "Sarkhan Unbroken",
      id: "sarkhan-unbroken",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sarkhan%2BUnbroken%2B%255BDTK%255D.jpg",
      qty: 1
    },
    {
      name: "Sarkhan the Masterless",
      id: "sarkhan-the-masterless",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sarkhan%2Bthe%2BMasterless%2B%255BCMM%255D.jpg",
      qty: 1
    },
  ]

  let artifacts = [
    {
      name: "Sol Ring",
      id: "sol-ring",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sol%2BRing%2B%253C251%253E%2B%255B40K%255D.jpg",
      qty: 1
    },
    {
      name: "Chromatic Lanturn",
      id: "chromatic-lanturn",
      source: "https://cdn1.mtggoldfish.com/images/gf/Chromatic%2BLantern%2B%253Cretro%253E%2B%255BRVR%255D.jpg",
      qty: 1
    },
    {
      name: "Commander's Sphere",
      id: "commanders-sphere",
      source: "https://cdn1.mtggoldfish.com/images/gf/Commander%2527s%2BSphere%2B%255BLCC%255D.jpg",
      qty: 1
    },
    {
      name: "Dragon's Hoard",
      id: "dragons-hoard",
      source: "https://cdn1.mtggoldfish.com/images/gf/Dragon%2527s%2BHoard%2B%255BJ22%255D.jpg",
      qty: 1
    },
    {
      name: "Herald's Horn",
      id: "heralds-horn",
      source: "https://cdn1.mtggoldfish.com/images/gf/Herald%2527s%2BHorn%2B%255BLCC%255D.jpg",
      qty: 1
    },
    {
      name: "Urza's Incubator",
      id: "urzas-incubator",
      source: "https://cdn1.mtggoldfish.com/images/gf/Urza%2527s%2BIncubator%2B%255BMH3%255D.jpg",
      qty: 1
    },
    {
      name: "Belbe's Portal",
      id: "belbes-portal",
      source: "https://cdn1.mtggoldfish.com/images/gf/Belbe%2527s%2BPortal%2B%255BMB1%255D.jpg",
      qty: 1
    },
    {
      name: "Gilded Lotus",
      id: "gilded-lotus",
      source: "https://cdn1.mtggoldfish.com/images/gf/Gilded%2BLotus%2B%255BBLC%255D.jpg",
      qty: 1
    },
    {
      name: "The Great Henge",
      id: "the-great-henge",
      source: "https://cdn1.mtggoldfish.com/images/gf/The%2BGreat%2BHenge%2B%255BCMM%255D.jpg",
      qty: 1
    },
  ]

  let enchantments = [
    {
      name: "Dragon Tempest",
      id: "dragon-tempest",
      source: "https://cdn1.mtggoldfish.com/images/gf/Dragon%2BTempest%2B%255BSCD%255D.jpg",
      qty: 1
    },
    {
      name: "Steely Resolve",
      id: "steely-resolve",
      source: "https://cdn1.mtggoldfish.com/images/gf/Steely%2BResolve%2B%255BONS%255D.jpg",
      qty: 1
    },
    {
      name: "Sylvan Library",
      id: "sylvan-library",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sylvan%2BLibrary%2B%253Cretro%253E%2B%255BDMR%255D.jpg",
      qty: 1
    },
    {
      name: "Up the Beanstalk",
      id: "up-the-beanstalk",
      source: "https://cdn1.mtggoldfish.com/images/gf/Up%2Bthe%2BBeanstalk%2B%255BWOE%255D.jpg",
      qty: 1
    },
    {
      name: "Garruk's Uprising",
      id: "garruks-uprising",
      source: "https://cdn1.mtggoldfish.com/images/gf/Garruk%2527s%2BUprising%2B%253Cshowcase%253E%2B%255BM21%255D.jpg",
      qty: 1
    },
    {
      name: "Rhythm of the Wild",
      id: "rhythm-of-the-wild",
      source: "https://cdn1.mtggoldfish.com/images/gf/Rhythm%2Bof%2Bthe%2BWild%2B%253Cretro%253E%2B%255BRVR%255D.jpg",
      qty: 1
    },
    {
      name: "Temur Ascendancy",
      id: "temur-ascendancy",
      source: "https://cdn1.mtggoldfish.com/images/gf/Temur%2BAscendancy%2B%255BKTK%255D.jpg",
      qty: 1
    },
  ]

  let lands = [
    {
      name: "Arid Mesa",
      id: "arid-mesa",
      source:"https://cdn1.mtggoldfish.com/images/gf/Arid%2BMesa%2B%255BZEN%255D.jpg",
      qty: 1
    },
    {
      name: "Badlands",
      id: "badlands",
      source: "https://cdn1.mtggoldfish.com/images/gf/Badlands%2B%255B3ED%255D.jpg",
      qty: 1
    },
    {
      name: "Bayou",
      id: "bayou",
      source: "https://cdn1.mtggoldfish.com/images/gf/Bayou%2B%255B3ED%255D.jpg",
      qty: 1
    },
    {
      name: "Blood Crypt",
      id: "blood-crypt",
      source: "https://cdn1.mtggoldfish.com/images/gf/Blood%2BCrypt%2B%255BPLIST%255D.jpg",
      qty: 1
    },
    {
      name: "Bloodstained Mire",
      id: "bloodstained-mire",
      source: "https://cdn1.mtggoldfish.com/images/gf/Bloodstained%2BMire%2B%255BMH3%255D.jpg",
      qty: 1
    },
    {
      name: "Breeding Pool",
      id: "breeding-pool",
      source: "https://cdn1.mtggoldfish.com/images/gf/Breeding%2BPool%2B%255BRVR%255D.jpg",
      qty: 1
    },
    {
      name: "Cavern of Souls",
      id: "cavern-of-souls",
      source: "https://cdn1.mtggoldfish.com/images/gf/Cavern%2Bof%2BSouls%2B%255BLCI%255D.jpg",
      qty: 1
    },
    {
      name: "Command Tower",
      id: "command-tower",
      source: "https://cdn1.mtggoldfish.com/images/gf/Command%2BTower%2B%253C266%253E%2B%255BWHO%255D.jpg",
      qty: 1
    },
    {
      name: "Crucible of the Spirit Dragon",
      id: "crucible-of-the-spirit-dragon",
      source: "https://cdn1.mtggoldfish.com/images/gf/Crucible%2Bof%2Bthe%2BSpirit%2BDragon%2B%255BAFC%255D.jpg",
      qty: 1
    },
    {
      name: "Flooded Strand",
      id: "flooded-strand",
      source: "https://cdn1.mtggoldfish.com/images/gf/Flooded%2BStrand%2B%255BMH3%255D.jpg",
      qty: 1
    },
    {
      name: "Godless Shrine",
      id: "godless-shrine",
      source: "https://cdn1.mtggoldfish.com/images/gf/Godless%2BShrine%2B%255BGTC%255D.jpg",
      qty: 1
    },
    {
      name: "Haven of the Spirit Dragon",
      id: "haven-of-the-spirit-dragon",
      source: "https://cdn1.mtggoldfish.com/images/gf/Haven%2Bof%2Bthe%2BSpirit%2BDragon%2B%255BSCD%255D.jpg",
      qty: 1
    },
    {
      name: "Marsh Flats",
      id: "marsh-flats",
      source: "https://cdn1.mtggoldfish.com/images/gf/Marsh%2BFlats%2B%255BMH2%255D.jpg",
      qty: 1
    },
    {
      name: "Misty Rainforest",
      id: "misty-rainforest",
      source: "https://cdn1.mtggoldfish.com/images/gf/Misty%2BRainforest%2B%255BMH2%255D.jpg",
      qty: 1
    },
    {
      name: "Overgrown Tomb",
      id: "overgrown-tomb",
      source: "https://cdn1.mtggoldfish.com/images/gf/Overgrown%2BTomb%2B%255BRTR%255D.jpg",
      qty: 1
    },
    {
      name: "Path of Ancestry",
      id: "path-of-ancestry",
      source: "https://cdn1.mtggoldfish.com/images/gf/Path%2Bof%2BAncestry%2B%255BLCC%255D.jpg",
      qty: 1
    },
    {
      name: "Plateau",
      id: "plateau",
      source: "https://cdn1.mtggoldfish.com/images/gf/Plateau%2B%255B3ED%255D.jpg",
      qty: 1
    },
    {
      name: "Polluted Delta",
      id: "polluted-delta",
      source: "https://cdn1.mtggoldfish.com/images/gf/Polluted%2BDelta%2B%253Cextended%253E%2B%255BMH3%255D.jpg",
      qty: 1
    },
    {
      name: "Reflecting Pool",
      id: "reflecting-pool",
      source: "https://cdn1.mtggoldfish.com/images/gf/Reflecting%2BPool%2B%255BCLB%255D.jpg",
      qty: 1
    },
    {
      name: "Sacred Foundry",
      id: "sacred-foundry",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sacred%2BFoundry%2B%255BGTC%255D.jpg",
      qty: 1
    },
    {
      name: "Savannah",
      id: "savannah",
      source: "https://cdn1.mtggoldfish.com/images/gf/Savannah%2B%255B3ED%255D.jpg",
      qty: 1
    },
    {
      name: "Scalding Tarn",
      id: "scalding-tarn",
      source: "https://cdn1.mtggoldfish.com/images/gf/Scalding%2BTarn%2B%255BMH2%255D.jpg",
      qty: 1
    },
    {
      name: "Scrubland",
      id: "scrubland",
      source: "https://cdn1.mtggoldfish.com/images/gf/Scrubland%2B%255B3ED%255D.jpg",
      qty: 1
    },
    {
      name: "Steam Vents",
      id: "steam-vents",
      source: "https://cdn1.mtggoldfish.com/images/gf/Steam%2BVents%2B%255BGRN%255D.jpg",
      qty: 1
    },
    {
      name: "Stomping Ground",
      id: "stomping-ground",
      source: "https://cdn1.mtggoldfish.com/images/gf/Stomping%2BGround%2B%255BGTC%255D.jpg",
      qty: 1
    },
    {
      name: "Taiga",
      id: "taiga",
      source: "https://cdn1.mtggoldfish.com/images/gf/Taiga%2B%255B3ED%255D.jpg",
      qty: 1
    },
    {
      name: "Temple Garden",
      id: "temple-garden",
      source: "https://cdn1.mtggoldfish.com/images/gf/Temple%2BGarden%2B%255BRTR%255D.jpg",
      qty: 1
    },
    {
      name: "Tropical Island",
      id: "tropical-island",
      source: "https://cdn1.mtggoldfish.com/images/gf/Tropical%2BIsland%2B%255B3ED%255D.jpg",
      qty: 1
    },
    {
      name: "Tundra",
      id: "tundra",
      source: "https://cdn1.mtggoldfish.com/images/gf/Tundra%2B%255B3ED%255D.jpg",
      qty: 1
    },
    {
      name: "Unclaimed Territory",
      id: "unclaimed-terriroty",
      source: "https://cdn1.mtggoldfish.com/images/gf/Unclaimed%2BTerritory%2B%255BLCC%255D.jpg",
      qty: 1
    },
    {
      name: "Underground Sea",
      id: "underground-sea",
      source: "https://cdn1.mtggoldfish.com/images/gf/Underground%2BSea%2B%255B3ED%255D.jpg",
      qty: 1
    },
    {
      name: "Volcanic Island",
      id: "volcanic-island",
      source: "https://cdn1.mtggoldfish.com/images/gf/Volcanic%2BIsland%2B%255B3ED%255D.jpg",
      qty: 1
    },
    {
      name: "Watery Grave",
      id: "watery-grave",
      source: "https://cdn1.mtggoldfish.com/images/gf/Watery%2BGrave%2B%255BGRN%255D.jpg",
      qty: 1
    },
    {
      name: "Windswept Heath",
      id: "windswept-heath",
      source: "https://cdn1.mtggoldfish.com/images/gf/Windswept%2BHeath%2B%255BMH3%255D.jpg",
      qty: 1
    },
    {
      name: "Wooded Foothills",
      id: "wooded-foothills",
      source: "https://cdn1.mtggoldfish.com/images/gf/Wooded%2BFoothills%2B%255BMH3%255D.jpg",
      qty: 1
    },
  ]

  let battles = [
    {
      name: "Invasion of Tarkir",
      id: "invasion-of-tarkir",
      source: "https://cdn1.mtggoldfish.com/images/gf/Invasion%2Bof%2BTarkir%2B%255BMOM%255D.jpg",
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
    battles={battles}
  />
</div>
<div id="gameplan">
  <h3 style="margin: 0px;">The Gameplan:</h3>
  <hr>
  <p>
    I like dragons.
    <br>
    <br>
    The gameplan is straightforward. Mana ramp, play big creatures, turn them sideways.
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