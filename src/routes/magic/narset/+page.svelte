<script>
  import DeckList from "../DeckList.svelte";

  let commander = {name: "Narset, Enlightened Master", source:"https://cdn1.mtggoldfish.com/images/gf/Narset%252C%2BEnlightened%2BMaster%2B%255BCMM%255D.jpg"}

  let creatures = [
    {
      name: "Dockside Extorsionist",
      source:"https://cdn1.mtggoldfish.com/images/gf/Dockside%2BExtortionist%2B%255BC19%255D.jpg",
      qty: 1
    },
    {
      name: "Generator Servant",
      source:"https://cdn1.mtggoldfish.com/images/gf/Generator%2BServant%2B%255BMB1%255D.jpg",
      qty: 1
    },
    {
      name: "Simian Spirit Guide",
      source:"https://cdn1.mtggoldfish.com/images/gf/Simian%2BSpirit%2BGuide%2B%255BTSR%255D.jpg",
      qty: 1
    },
  ]

  let artifacts = [
    {
      name: "Jeweled Lotus",
      source: "https://cdn1.mtggoldfish.com/images/gf/Jeweled%2BLotus%2B%253C418094%253E%2B%255BPRM%255D.jpg",
      qty: 1
    },
    {
      name: "Lion's Eye Diamond",
      source: "https://cdn1.mtggoldfish.com/images/gf/Lion%2527s%2BEye%2BDiamond%2B%253C1134%253E%2B%255BPRM%255D.jpg",
      qty: 1
    },
    {
      name: "Lotus Petal",
      source: "https://cdn1.mtggoldfish.com/images/gf/Lotus%2BPetal%2B%255BTPR%255D.jpg",
      qty: 1
    },
    {
      name: "Mana Crypt",
      source: "https://cdn1.mtggoldfish.com/images/gf/Mana%2BCrypt%2B%255BVMA%255D.jpg",
      qty: 1
    },
    {
      name: "Mox Diamond",
      source: "https://cdn1.mtggoldfish.com/images/gf/Mox%2BDiamond%2B%255BTPR%255D.jpg",
      qty: 1
    },
    {
      name: "Mox Opal",
      source: "https://cdn1.mtggoldfish.com/images/gf/Mox%2BOpal%2B%255BSOM%255D.jpg",
      qty: 1
    },
    {
      name: "Mana Vault",
      source: "https://cdn1.mtggoldfish.com/images/gf/Mana%2BVault%2B%255BVMA%255D.jpg",
      qty: 1
    },
    {
      name: "Sensei's Divining Top",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sensei%2527s%2BDivining%2BTop%2B%255BCHK%255D.jpg",
      qty: 1
    },
    {
      name: "Sol Ring",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sol%2BRing%2B%253C251%253E%2B%255B40K%255D.jpg",
      qty: 1
    },
    {
      name: "Arcane Signet",
      source: "https://cdn1.mtggoldfish.com/images/gf/Arcane%2BSignet%2B%255BCMM%255D.jpg",
      qty: 1
    },
    {
      name: "Grim Monolith",
      source: "https://cdn1.mtggoldfish.com/images/gf/Grim%2BMonolith%2B%253C400641%253E%2B%255BPRM%255D.jpg",
      qty: 1
    },
    {
      name: "Scroll Rack",
      source: "https://cdn1.mtggoldfish.com/images/gf/Scroll%2BRack%2B%255BCMR%255D.jpg",
      qty: 1
    },
    {
      name: "Strionic Resonator",
      source: "https://cdn1.mtggoldfish.com/images/gf/Strionic%2BResonator%2B%255BA25%255D.jpg",
      qty: 1
    },
    {
      name: "Thran Dynamo",
      source: "https://cdn1.mtggoldfish.com/images/gf/Thran%2BDynamo%2B%255BCMM%255D.jpg",
      qty: 1
    },
  ]
  
  let sorceries = [
    {
      name: "Personal Tutor",
      source: "https://cdn1.mtggoldfish.com/images/gf/Personal%2BTutor%2B%253Cborderless%253E%2B%255BCMM%255D.jpg",
      qty: 1
    },
    {
      name: "Armageddon",
      source: "https://cdn1.mtggoldfish.com/images/gf/Armageddon%2B%255BS99%255D.jpg",
      qty: 1
    },
    {
      name: "Seize the Day",
      source: "https://cdn1.mtggoldfish.com/images/gf/Seize%2Bthe%2BDay%2B%255BOD%255D.jpg",
      qty: 1
    },
    {
      name: "Supreme Verdict",
      source: "https://cdn1.mtggoldfish.com/images/gf/Supreme%2BVerdict%2B%255BRTR%255D.jpg",
      qty: 1
    },
    {
      name: "Temporal Manipulation",
      source: "https://cdn1.mtggoldfish.com/images/gf/Temporal%2BManipulation%2B%253C159366%253E%2B%255BPRM%255D.jpg",
      qty: 1
    },
    {
      name: "Time Warp",
      source: "https://cdn1.mtggoldfish.com/images/gf/Time%2BWarp%2B%253C414%253E%2B%255BPRM%255D.jpg",
      qty: 1
    },
    {
      name: "Waves of Aggression",
      source: "https://cdn1.mtggoldfish.com/images/gf/Waves%2Bof%2BAggression%2B%255BEVE%255D.jpg",
      qty: 1
    },
    {
      name: "World at War",
      source: "https://cdn1.mtggoldfish.com/images/gf/World%2Bat%2BWar%2B%255BROE%255D.jpg",
      qty: 1
    },
    {
      name: "Karn's Temporal Sundering",
      source: "https://cdn1.mtggoldfish.com/images/gf/Karn%2527s%2BTemporal%2BSundering%2B%255BDOM%255D.jpg",
      qty: 1
    },
    {
      name: "Part the Waterveil",
      source: "https://cdn1.mtggoldfish.com/images/gf/Part%2Bthe%2BWaterveil%2B%255BBFZ%255D.jpg",
      qty: 1
    },
    {
      name: "Walk the Aeons",
      source: "https://cdn1.mtggoldfish.com/images/gf/Walk%2Bthe%2BAeons%2B%255BTSP%255D.jpg",
      qty: 1
    },
    {
      name: "Alrund's Epiphany",
      source: "https://cdn1.mtggoldfish.com/images/gf/Alrund%2527s%2BEpiphany%2B%255BKHM%255D.jpg",
      qty: 1
    },
    {
      name: "Fury of the Horde",
      source: "https://cdn1.mtggoldfish.com/images/gf/Fury%2Bof%2Bthe%2BHorde%2B%255BCSP%255D.jpg",
      qty: 1
    },
    {
      name: "Temporal Mastery",
      source: "https://cdn1.mtggoldfish.com/images/gf/Temporal%2BMastery%2B%255BAVR%255D.jpg",
      qty: 1
    },
    {
      name: "Beacon of Tomorrows",
      source: "https://cdn1.mtggoldfish.com/images/gf/Beacon%2Bof%2BTomorrows%2B%255B5DN%255D.jpg",
      qty: 1
    },
    {
      name: "Expropriate",
      source: "https://cdn1.mtggoldfish.com/images/gf/Expropriate%2B%255BPZ2%255D.jpg",
      qty: 1
    },
    {
      name: "Time Stretch",
      source: "https://cdn1.mtggoldfish.com/images/gf/Time%2BStretch%2B%255B10E%255D.jpg",
      qty: 1
    },
    {
      name: "Temporal Trespass",
      source: "https://cdn1.mtggoldfish.com/images/gf/Temporal%2BTrespass%2B%255BFRF%255D.jpg",
      qty: 1
    },
    {
      name: "Enter the Infinite",
      source: "https://cdn1.mtggoldfish.com/images/gf/Enter%2Bthe%2BInfinite%2B%255BGTC%255D.jpg",
      qty: 1
    },
    {
      name: "Rise of the Eldrazi",
      source: "https://cdn1.mtggoldfish.com/images/gf/Rise%2Bof%2Bthe%2BEldrazi%2B%255BCMM%255D.jpg",
      qty: 1
    },
  ]

  let instants = [
    {
      name: "Pact of Negation",
      source: "https://cdn1.mtggoldfish.com/images/gf/Pact%2Bof%2BNegation%2B%255BMMA%255D.jpg",
      qty: 1
    },
    {
      name: "Brainstorm",
      source: "https://cdn1.mtggoldfish.com/images/gf/Brainstorm%2B%255BC15%255D.jpg",
      qty: 1
    },
    {
      name: "Enlightened Tutor",
      source: "https://cdn1.mtggoldfish.com/images/gf/Enlightened%2BTutor%2B%253Cretro%253E%2B%255BDMR%255D.jpg",
      qty: 1
    },
    {
      name: "Flusterstorm",
      source: "https://cdn1.mtggoldfish.com/images/gf/Flusterstorm%2B%253Cbuy-a-box%253E%2B%255BMH3%255D.jpg",
      qty: 1
    },
    {
      name: "Mystical Tutor",
      source: "https://cdn1.mtggoldfish.com/images/gf/Mystical%2BTutor%2B%253Cretro%253E%2B%255BDMR%255D.jpg",
      qty: 1
    },
    {
      name: "Path to Exile",
      source: "https://cdn1.mtggoldfish.com/images/gf/Path%2Bto%2BExile%2B%253Cfoil%2Betched%253E%2B%255BACR%255D.jpg",
      qty: 1
    },
    {
      name: "Swan Song",
      source: "https://cdn1.mtggoldfish.com/images/gf/Swan%2BSong%2B%255BTHS%255D.jpg",
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
      name: "Mana Drain",
      source: "https://cdn1.mtggoldfish.com/images/gf/Mana%2BDrain%2B%253Cshowcase%253E%2B%255BOTP%255D.jpg",
      qty: 1
    },
    {
      name: "Narset's Reversal",
      source: "https://cdn1.mtggoldfish.com/images/gf/Narset%2527s%2BReversal%2B%255BWAR%255D.jpg",
      qty: 1
    },
    {
      name: "Disallow",
      source: "https://cdn1.mtggoldfish.com/images/gf/Disallow%2B%255BAER%255D.jpg",
      qty: 1
    },
    {
      name: "Dissipate",
      source: "https://cdn1.mtggoldfish.com/images/gf/Dissipate%2B%255BMID%255D.jpg",
      qty: 1
    },
    {
      name: "Fierce Guardianship",
      source: "https://cdn1.mtggoldfish.com/images/gf/Fierce%2BGuardianship%2B%255BCMM%255D.jpg",
      qty: 1
    },
    {
      name: "Force of Negation",
      source: "https://cdn1.mtggoldfish.com/images/gf/Force%2Bof%2BNegation%2B%255B2X2%255D.jpg",
      qty: 1
    },
    {
      name: "Long-Term Plans",
      source: "https://cdn1.mtggoldfish.com/images/gf/Long-Term%2BPlans%2B%255BSCG%255D.jpg",
      qty: 1
    },
    {
      name: "Render Silent",
      source: "https://cdn1.mtggoldfish.com/images/gf/Render%2BSilent%2B%255BDGM%255D.jpg",
      qty: 1
    },
    {
      name: "Spell Crumple",
      source: "https://cdn1.mtggoldfish.com/images/gf/Spell%2BCrumple%2B%255BCM2%255D.jpg",
      qty: 1
    },
    {
      name: "Cryptic Command",
      source: "https://cdn1.mtggoldfish.com/images/gf/Cryptic%2BCommand%2B%255BMMA%255D.jpg",
      qty: 1
    },
    {
      name: "Force of Will",
      source: "https://cdn1.mtggoldfish.com/images/gf/Force%2Bof%2BWill%2B%253C415883%253E%2B%255BPRM%255D.jpg",
      qty: 1
    },
    {
      name: "Nexus of Fate",
      source: "https://cdn1.mtggoldfish.com/images/gf/Nexus%2Bof%2BFate%2B%255BM19%255D.jpg",
      qty: 1
    },
  ]

  let planeswalkers = [
    {
      name: "Jace, Wielder of Mysteries",
      source: "https://cdn1.mtggoldfish.com/images/gf/Jace%252C%2BWielder%2Bof%2BMysteries%2B%253Cplaneswalker%2Bstamp%253E%2B%255BPELD%255D.jpg",
      qty: 1
    },
    {
      name: "Jace, the Mind Sculptor",
      source: "https://cdn1.mtggoldfish.com/images/gf/Jace%252C%2Bthe%2BMind%2BSculptor%2B%255BA25%255D.jpg",
      qty: 1
    }
  ]

  let enchantments = [
    {
      name: "Mystic Remora",
      source: "https://cdn1.mtggoldfish.com/images/gf/Mystic%2BRemora%2B%255BMED%255D.jpg",
      qty: 1
    },
    {
      name: "Need for Speed",
      source: "https://cdn1.mtggoldfish.com/images/gf/Need%2Bfor%2BSpeed%2B%255BOD%255D.jpg",
      qty: 1
    },
    {
      name: "Rhystic Study",
      source: "https://cdn1.mtggoldfish.com/images/gf/Rhystic%2BStudy%2B%255BPR%255D.jpg",
      qty: 1
    },
    {
      name: "Thousand-Year Storm",
      source: "https://cdn1.mtggoldfish.com/images/gf/Thousand-Year%2BStorm%2B%255B2X2%255D.jpg",
      qty: 1
    },
    {
      name: "Eldrazi Conscription",
      source: "https://cdn1.mtggoldfish.com/images/gf/Eldrazi%2BConscription%2B%255BROE%255D.jpg",
      qty: 1
    },
    {
      name: "One with the Multiverse",
      source: "https://cdn1.mtggoldfish.com/images/gf/One%2Bwith%2Bthe%2BMultiverse%2B%255BBRO%255D.jpg",
      qty: 1
    },
    {
      name: "Omniscience",
      source: "https://cdn1.mtggoldfish.com/images/gf/Omniscience%2B%255BM19%255D.jpg",
      qty: 1
    },
  ]
  
  let lands = [
    {
      name: "Urza's Saga",
      source: "https://cdn1.mtggoldfish.com/images/gf/Urza%2527s%2BSaga%2B%253Cshowcase%253E%2B%255BMH2%255D.jpg",
      qty: 1
    },
    {
      name: "Ancient Tomb",
      source: "https://cdn1.mtggoldfish.com/images/gf/Ancient%2BTomb%2B%255BPLIST%255D.jpg",
      qty: 1
    },
    {
      name: "Arid Mesa",
      source:"https://cdn1.mtggoldfish.com/images/gf/Arid%2BMesa%2B%255BZEN%255D.jpg",
      qty: 1
    },
    {
      name: "Cascade Bluffs",
      source: "https://cdn1.mtggoldfish.com/images/gf/Cascade%2BBluffs%2B%255BBLC%255D.jpg",
      qty: 1
    },
    {
      name: "Cavern of Souls",
      source: "https://cdn1.mtggoldfish.com/images/gf/Cavern%2Bof%2BSouls%2B%255BLCI%255D.jpg",
      qty: 1
    },
    {
      name: "City of Brass",
      source: "https://cdn1.mtggoldfish.com/images/gf/City%2Bof%2BBrass%2B%255B5ED%255D.jpg",
      qty: 1
    },
    {
      name: "Command Tower",
      source: "https://cdn1.mtggoldfish.com/images/gf/Command%2BTower%2B%253C266%253E%2B%255BWHO%255D.jpg",
      qty: 1
    },
    {
      name: "Crystal Vein",
      source: "https://cdn1.mtggoldfish.com/images/gf/Crystal%2BVein%2B%255BMI%255D.jpg",
      qty: 1
    },
    {
      name: "Fiery Islet",
      source: "https://cdn1.mtggoldfish.com/images/gf/Fiery%2BIslet%2B%255BWHO%255D.jpg",
      qty: 1
    },
    {
      name: "Flooded Strand",
      source: "https://cdn1.mtggoldfish.com/images/gf/Flooded%2BStrand%2B%255BMH3%255D.jpg",
      qty: 1
    },
    {
      name: "Hall of the Bandit Lord",
      source: "https://cdn1.mtggoldfish.com/images/gf/Hall%2Bof%2Bthe%2BBandit%2BLord%2B%255BCHK%255D.jpg",
      qty: 1
    },
    {
      name: "Hallowed Fountain",
      source: "https://cdn1.mtggoldfish.com/images/gf/Hallowed%2BFountain%2B%255BRNA%255D.jpg",
      qty: 1
    },
    {
      name: "Mana Confluence",
      source: "https://cdn1.mtggoldfish.com/images/gf/Mana%2BConfluence%2B%255BJOU%255D.jpg",
      qty: 1
    },
    {
      name: "Marsh Flats",
      source: "https://cdn1.mtggoldfish.com/images/gf/Marsh%2BFlats%2B%255BMH2%255D.jpg",
      qty: 1
    },
    {
      name: "Maze of Ith",
      source: "https://cdn1.mtggoldfish.com/images/gf/Maze%2Bof%2BIth%2B%253Cretro%253E%2B%255BDMR%255D.jpg",
      qty: 1
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
      name: "Otawara, Soaring City",
      source: "https://cdn1.mtggoldfish.com/images/gf/Otawara%252C%2BSoaring%2BCity%2B%255BNEO%255D.jpg",
      qty: 1
    },
    {
      name: "Plateau",
      source: "https://cdn1.mtggoldfish.com/images/gf/Plateau%2B%255B3ED%255D.jpg",
      qty: 1
    },
    {
      name: "Reflecting Pool",
      source: "https://cdn1.mtggoldfish.com/images/gf/Reflecting%2BPool%2B%255BCLB%255D.jpg",
      qty: 1
    },
    {
      name: "Rogue's Passage",
      source: "https://cdn1.mtggoldfish.com/images/gf/Rogue%2527s%2BPassage%2B%255BMKC%255D.jpg",
      qty: 1
    },
    {
      name: "Rugged Prairie",
      source: "https://cdn1.mtggoldfish.com/images/gf/Rugged%2BPrairie%2B%255BOTC%255D.jpg",
      qty: 1
    },
    {
      name: "Scalding Tarn",
      source: "https://cdn1.mtggoldfish.com/images/gf/Scalding%2BTarn%2B%255BMH2%255D.jpg",
      qty: 1
    },
    {
      name: "Sea of Clouds",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sea%2Bof%2BClouds%2B%255BCLB%255D.jpg",
      qty: 1
    },
    {
      name: "Spectator Seating",
      source: "https://cdn1.mtggoldfish.com/images/gf/Spectator%2BSeating%2B%253Cborderless%253E%2B%255BCMM%255D.jpg",
      qty: 1
    },
    {
      name: "Steam Vents",
      source: "https://cdn1.mtggoldfish.com/images/gf/Steam%2BVents%2B%255BRTR%255D.jpg",
      qty: 1
    },
    {
      name: "Sunbaked Canyon",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sunbaked%2BCanyon%2B%253Cextended%253E%2B%255BWHO%255D.jpg",
      qty: 1
    },
    {
      name: "Temple of the False God",
      source: "https://cdn1.mtggoldfish.com/images/gf/Temple%2Bof%2Bthe%2BFalse%2BGod%2B%255BPIP%255D.jpg",
      qty: 1
    },
    {
      name: "Training Center",
      source: "https://cdn1.mtggoldfish.com/images/gf/Training%2BCenter%2B%255BCMM%255D.jpg",
      qty: 1
    },
    {
      name: "Tundra",
      source: "https://cdn1.mtggoldfish.com/images/gf/Tundra%2B%255B3ED%255D.jpg",
      qty: 1
    },
    {
      name: "Volcanic Island",
      source: "https://cdn1.mtggoldfish.com/images/gf/Volcanic%2BIsland%2B%255B3ED%255D.jpg",
      qty: 1
    },
    {
      name: "Windswept Heath",
      source: "https://cdn1.mtggoldfish.com/images/gf/Windswept%2BHeath%2B%255BMH3%255D.jpg",
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
    Take <i>all</i> the turns.
    <br>
    <br>
    Narset wants to be on the board as soon as possible, so the deck is filled with fast mana and ways to give her haste.
    <br>
    <br>
    After that, she just needs to get attacking to cast any and all of the free extra turn spells in the deck.
    <br>
    <br>
    I win with either putting Eldrazi Conscription on her and winning with commander damage, or casting Enter the Infinite with Jace Wielder of Mysteries on the board.
    <br>
    <br>
    If winning does not come quickly, Narset can be protected or others can be stopped from winning with the variety of counter magic.
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