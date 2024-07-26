<script>
  import DeckList from "../DeckList.svelte";

  let commander = {
    name: "The Ur-Dragon",
    source: "https://cdn1.mtggoldfish.com/images/gf/The%2BUr-Dragon%2B%255BPZ2%255D.jpg",
    qty: 1
  }

  let creatures = [
    {
      name: "Dragonlord' Servant",
      source: "https://cdn1.mtggoldfish.com/images/gf/Dragonlord%2527s%2BServant%2B%255BJ22%255D.jpg",
      qty: 1
    },
    {
      name: "Dragonspeaker Shaman",
      source: "https://cdn1.mtggoldfish.com/images/gf/Dragonspeaker%2BShaman%2B%255BJ22%255D.jpg",
      qty: 1
    },
    {
      name: "Rivaz of the Claw",
      source: "https://cdn1.mtggoldfish.com/images/gf/Rivaz%2Bof%2Bthe%2BClaw%2B%253Cshowcase%253E%2B%255BDMU%255D.jpg",
      qty: 1
    },
    {
      name: "Sarkhan, Soul Aflame",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sarkhan%252C%2BSoul%2BAflame%2B%255BMAT%255D.jpg",
      qty: 1
    },
    {
      name: "Decadent Dragon",
      source: "https://cdn1.mtggoldfish.com/images/gf/Decadent%2BDragon%2B%253Cshowcase%253E%2B%255BWOE%255D.jpg",
      qty: 1
    },
    {
      name: "Goldspan Dragon",
      source: "https://cdn1.mtggoldfish.com/images/gf/Goldspan%2BDragon%2B%255BM3C%255D.jpg",
      qty: 1
    },
    {
      name: "Rith, Liberated Primeval",
      source: "https://cdn1.mtggoldfish.com/images/gf/Rith%252C%2BLiberated%2BPrimeval%2B%253Cshowcase%253E%2B%255BDMU%255D.jpg",
      qty: 1
    },
    {
      name: "Scalelord Reckoner",
      source: "https://cdn1.mtggoldfish.com/images/gf/Scalelord%2BReckoner%2B%255BC17%255D.jpg",
      qty: 1
    },
    {
      name: "Scion of the Ur-Dragon",
      source: "https://cdn1.mtggoldfish.com/images/gf/Scion%2Bof%2Bthe%2BUr-Dragon%2B%255BC17%255D.jpg",
      qty: 1
    },
    {
      name: "Scourge of Valkas",
      source: "https://cdn1.mtggoldfish.com/images/gf/Scourge%2Bof%2BValkas%2B%255BSCD%255D.jpg",
      qty: 1
    },
    {
      name: "Terror of the Peaks",
      source: "https://cdn1.mtggoldfish.com/images/gf/Terror%2Bof%2Bthe%2BPeaks%2B%255BOTJ%255D.jpg",
      qty: 1
    },
    {
      name: "Zurgo and Ojutai",
      source: "https://cdn1.mtggoldfish.com/images/gf/Zurgo%2Band%2BOjutai%2B%253Cshowcase%253E%2B%255BMOM%255D.jpg",
      qty: 1
    },
    {
      name: "Ancient Copper Dragon",
      source: "https://cdn1.mtggoldfish.com/images/gf/Ancient%2BCopper%2BDragon%2B%253Cshowcase%253E%2B%255BCLB%255D.jpg",
      qty: 1
    },
    {
      name: "Dragonlord Dromoka",
      source: "https://cdn1.mtggoldfish.com/images/gf/Dragonlord%2BDromoka%2B%255B2X2%255D.jpg",
      qty: 1
    },
    {
      name: "Hellkite Courser",
      source: "https://cdn1.mtggoldfish.com/images/gf/Hellkite%2BCourser%2B%255BCMR%255D.jpg",
      qty: 1
    },
    {
      name: "Lathliss, Dragon Queen",
      source: "https://cdn1.mtggoldfish.com/images/gf/Lathliss%252C%2BDragon%2BQueen%2B%255BGN2%255D.jpg",
      qty: 1
    },
    {
      name: "Miirym, Sentinel Wyrm",
      source: "https://cdn1.mtggoldfish.com/images/gf/Miirym%252C%2BSentinel%2BWyrm%2B%253Cfoil%2Betched%253E%2B%255BCLB%255D.jpg",
      qty: 1
    },
    {
      name: "Ramos, Dragon Engine",
      source: "https://cdn1.mtggoldfish.com/images/gf/Ramos%252C%2BDragon%2BEngine%2B%253Cschematics%253E%2B%255BBRR%255D.jpg",
      qty: 1
    },
    {
      name: "Silumgar, the Drifting Death",
      source: "https://cdn1.mtggoldfish.com/images/gf/Silumgar%252C%2Bthe%2BDrifting%2BDeath%2B%255BC17%255D.jpg",
      qty: 1
    },
    {
      name: "Two-Headed Hellkite",
      source: "https://cdn1.mtggoldfish.com/images/gf/Two-Headed%2BHellkite%2B%255BDMC%255D.jpg",
      qty: 1
    },
    {
      name: "Ancient Gold Dragon",
      source: "https://cdn1.mtggoldfish.com/images/gf/Ancient%2BGold%2BDragon%2B%253Cshowcase%253E%2B%255BCLB%255D.jpg",
      qty: 1
    },
    {
      name: "Atarka, World Render",
      source: "https://cdn1.mtggoldfish.com/images/gf/Atarka%252C%2BWorld%2BRender%2B%255BC17%255D.jpg",
      qty: 1
    },
    {
      name: "Balefire Dragon",
      source: "https://cdn1.mtggoldfish.com/images/gf/Balefire%2BDragon%2B%255BISD%255D.jpg",
      qty: 1
    },
    {
      name: "Bladewing the Risen",
      source: "https://cdn1.mtggoldfish.com/images/gf/Bladewing%2Bthe%2BRisen%2B%255BCMD%255D.jpg",
      qty: 1
    },
    {
      name: "Klauth, Unrivaled Ancient",
      source: "https://cdn1.mtggoldfish.com/images/gf/Klauth%252C%2BUnrivaled%2BAncient%2B%255BAFC%255D.jpg",
      qty: 1
    },
    {
      name: "Old Gnawbone",
      source: "https://cdn1.mtggoldfish.com/images/gf/Old%2BGnawbone%2B%255BPLIST%255D.jpg",
      qty: 1
    },
    {
      name: "Tiamat",
      source: "https://cdn1.mtggoldfish.com/images/gf/Tiamat%2B%255BAFR%255D.jpg",
      qty: 1
    },
    {
      name: "Ancient Silver Dragon",
      source: "https://cdn1.mtggoldfish.com/images/gf/Ancient%2BSilver%2BDragon%2B%253Cshowcase%253E%2B%255BCLB%255D.jpg",
      qty: 1
    },
    {
      name: "Utvara Hellkite",
      source: "https://cdn1.mtggoldfish.com/images/gf/Utvara%2BHellkite%2B%253Cretro%253E%2B%255BRVR%255D.jpg",
      qty: 1
    },
    {
      name: "Blast-Furnace Hellkite",
      source: "https://cdn1.mtggoldfish.com/images/gf/Blast-Furnace%2BHellkite%2B%253Cretro%253E%2B%255BBRC%255D.jpg",
      qty: 1
    },
    {
      name: "Scion of Draco",
      source: "https://cdn1.mtggoldfish.com/images/gf/Scion%2Bof%2BDraco%2B%255BMH2%255D.jpg",
      qty: 1
    },
  ]

  let instants = [
    {
      name: "Assassin's Trophy",
      source: "https://cdn1.mtggoldfish.com/images/gf/Assassin%2527s%2BTrophy%2B%253Cextended%253E%2B%255BACR%255D.jpg",
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
      name: "Anguished Unmaking",
      source: "https://cdn1.mtggoldfish.com/images/gf/Anguished%2BUnmaking%2B%253Cextended%253E%2B%255BPIP%255D.jpg",
      qty: 1
    },
    {
      name: "Utter End",
      source: "https://cdn1.mtggoldfish.com/images/gf/Utter%2BEnd%2B%255B40K%255D.jpg",
      qty: 1
    },
  ]

  let sorceries = [
    {
      name: "Demonic Tutor",
      source: "https://cdn1.mtggoldfish.com/images/gf/Demonic%2BTutor%2B%255BMB1%255D.jpg",
      qty: 1
    },
    {
      name: "Farseek",
      source: "https://cdn1.mtggoldfish.com/images/gf/Farseek%2B%255BBLC%255D.jpg",
      qty: 1
    },
    {
      name: "Three Visits",
      source: "https://cdn1.mtggoldfish.com/images/gf/Three%2BVisits%2B%255BCMR%255D.jpg",
      qty: 1
    },
    {
      name: "Skyshroud Claim",
      source: "https://cdn1.mtggoldfish.com/images/gf/Skyshroud%2BClaim%2B%255BCMM%255D.jpg",
      qty: 1
    },
    {
      name: "Crux of Fate",
      source: "https://cdn1.mtggoldfish.com/images/gf/Crux%2Bof%2BFate%2B%255BFRF%255D.jpg",
      qty: 1
    },
    {
      name: "Patriarch's Bidding",
      source: "https://cdn1.mtggoldfish.com/images/gf/Patriarch%2527s%2BBidding%2B%255BMH2%255D.jpg",
      qty: 1
    },
    {
      name: "Ruionous Ultimatum",
      source: "https://cdn1.mtggoldfish.com/images/gf/Ruinous%2BUltimatum%2B%253Cextended%253E%2B%255BPIP%255D.jpg",
      qty: 1
    },
  ]

  let planeswalkers = [
    {
      name: "Sarkhan Fireblood",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sarkhan%252C%2BFireblood%2B%255BM19%255D.jpg",
      qty: 1
    },
    {
      name: "Sivitri Dragon Master",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sivitri%252C%2BDragon%2BMaster%2B%255BDMC%255D.jpg",
      qty: 1
    },
    {
      name: "Sarkhan Unbroken",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sarkhan%2BUnbroken%2B%255BDTK%255D.jpg",
      qty: 1
    },
    {
      name: "Sarkhan the Masterless",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sarkhan%2Bthe%2BMasterless%2B%255BCMM%255D.jpg",
      qty: 1
    },
  ]

  let artifacts = [
    {
      name: "Sol Ring",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sol%2BRing%2B%253C251%253E%2B%255B40K%255D.jpg",
      qty: 1
    },
    {
      name: "Chromatic Lanturn",
      source: "https://cdn1.mtggoldfish.com/images/gf/Chromatic%2BLantern%2B%253Cretro%253E%2B%255BRVR%255D.jpg",
      qty: 1
    },
    {
      name: "Commander's Sphere",
      source: "https://cdn1.mtggoldfish.com/images/gf/Commander%2527s%2BSphere%2B%255BLCC%255D.jpg",
      qty: 1
    },
    {
      name: "Dragon's Hoard",
      source: "https://cdn1.mtggoldfish.com/images/gf/Dragon%2527s%2BHoard%2B%255BJ22%255D.jpg",
      qty: 1
    },
    {
      name: "Herald's Horn",
      source: "https://cdn1.mtggoldfish.com/images/gf/Herald%2527s%2BHorn%2B%255BLCC%255D.jpg",
      qty: 1
    },
    {
      name: "Urza's Incubator",
      source: "https://cdn1.mtggoldfish.com/images/gf/Urza%2527s%2BIncubator%2B%255BMH3%255D.jpg",
      qty: 1
    },
    {
      name: "Belbe's Portal",
      source: "https://cdn1.mtggoldfish.com/images/gf/Belbe%2527s%2BPortal%2B%255BMB1%255D.jpg",
      qty: 1
    },
    {
      name: "Gilded Lotus",
      source: "https://cdn1.mtggoldfish.com/images/gf/Gilded%2BLotus%2B%255BBLC%255D.jpg",
      qty: 1
    },
    {
      name: "The Great Henge",
      source: "https://cdn1.mtggoldfish.com/images/gf/The%2BGreat%2BHenge%2B%255BCMM%255D.jpg",
      qty: 1
    },
  ]

  let enchantments = [
    {
      name: "Dragon Tempest",
      source: "https://cdn1.mtggoldfish.com/images/gf/Dragon%2BTempest%2B%255BSCD%255D.jpg",
      qty: 1
    },
    {
      name: "Steely Resolve",
      source: "https://cdn1.mtggoldfish.com/images/gf/Steely%2BResolve%2B%255BONS%255D.jpg",
      qty: 1
    },
    {
      name: "Sylvan Library",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sylvan%2BLibrary%2B%253Cretro%253E%2B%255BDMR%255D.jpg",
      qty: 1
    },
    {
      name: "Up the Beanstalk",
      source: "https://cdn1.mtggoldfish.com/images/gf/Up%2Bthe%2BBeanstalk%2B%255BWOE%255D.jpg",
      qty: 1
    },
    {
      name: "Garruk's Uprising",
      source: "https://cdn1.mtggoldfish.com/images/gf/Garruk%2527s%2BUprising%2B%253Cshowcase%253E%2B%255BM21%255D.jpg",
      qty: 1
    },
    {
      name: "Rhythm of the Wild",
      source: "https://cdn1.mtggoldfish.com/images/gf/Rhythm%2Bof%2Bthe%2BWild%2B%253Cretro%253E%2B%255BRVR%255D.jpg",
      qty: 1
    },
    {
      name: "Temur Ascendancy",
      source: "https://cdn1.mtggoldfish.com/images/gf/Temur%2BAscendancy%2B%255BKTK%255D.jpg",
      qty: 1
    },
  ]

  let lands = [
    {
      name: "Arid Mesa",
      source:"https://cdn1.mtggoldfish.com/images/gf/Arid%2BMesa%2B%255BZEN%255D.jpg",
      qty: 1
    },
    {
      name: "Badlands",
      source: "https://cdn1.mtggoldfish.com/images/gf/Badlands%2B%255B3ED%255D.jpg",
      qty: 1
    },
    {
      name: "Bayou",
      source: "https://cdn1.mtggoldfish.com/images/gf/Bayou%2B%255B3ED%255D.jpg",
      qty: 1
    },
    {
      name: "Blood Crypt",
      source: "https://cdn1.mtggoldfish.com/images/gf/Blood%2BCrypt%2B%255BPLIST%255D.jpg",
      qty: 1
    },
    {
      name: "Bloodstained Mire",
      source: "https://cdn1.mtggoldfish.com/images/gf/Bloodstained%2BMire%2B%255BMH3%255D.jpg",
      qty: 1
    },
    {
      name: "Breeding Pool",
      source: "https://cdn1.mtggoldfish.com/images/gf/Breeding%2BPool%2B%255BRVR%255D.jpg",
      qty: 1
    },
    {
      name: "Cavern of Souls",
      source: "https://cdn1.mtggoldfish.com/images/gf/Cavern%2Bof%2BSouls%2B%255BLCI%255D.jpg",
      qty: 1
    },
    {
      name: "Command Tower",
      source: "https://cdn1.mtggoldfish.com/images/gf/Command%2BTower%2B%253C266%253E%2B%255BWHO%255D.jpg",
      qty: 1
    },
    {
      name: "Crucible of the Spirit Dragon",
      source: "https://cdn1.mtggoldfish.com/images/gf/Crucible%2Bof%2Bthe%2BSpirit%2BDragon%2B%255BAFC%255D.jpg",
      qty: 1
    },
    {
      name: "Flooded Strand",
      source: "https://cdn1.mtggoldfish.com/images/gf/Flooded%2BStrand%2B%255BMH3%255D.jpg",
      qty: 1
    },
    {
      name: "Godless Shrine",
      source: "https://cdn1.mtggoldfish.com/images/gf/Godless%2BShrine%2B%255BGTC%255D.jpg",
      qty: 1
    },
    {
      name: "Haven of the Spirit Dragon",
      source: "https://cdn1.mtggoldfish.com/images/gf/Haven%2Bof%2Bthe%2BSpirit%2BDragon%2B%255BSCD%255D.jpg",
      qty: 1
    },
    {
      name: "Marsh Flats",
      source: "https://cdn1.mtggoldfish.com/images/gf/Marsh%2BFlats%2B%255BMH2%255D.jpg",
      qty: 1
    },
    {
      name: "Misty Rainforest",
      source: "https://cdn1.mtggoldfish.com/images/gf/Misty%2BRainforest%2B%255BMH2%255D.jpg",
      qty: 1
    },
    {
      name: "Overgrown Tomb",
      source: "https://cdn1.mtggoldfish.com/images/gf/Overgrown%2BTomb%2B%255BRTR%255D.jpg",
      qty: 1
    },
    {
      name: "Path of Ancestry",
      source: "https://cdn1.mtggoldfish.com/images/gf/Path%2Bof%2BAncestry%2B%255BLCC%255D.jpg",
      qty: 1
    },
    {
      name: "Plateau",
      source: "https://cdn1.mtggoldfish.com/images/gf/Plateau%2B%255B3ED%255D.jpg",
      qty: 1
    },
    {
      name: "Polluted Delta",
      source: "https://cdn1.mtggoldfish.com/images/gf/Polluted%2BDelta%2B%253Cextended%253E%2B%255BMH3%255D.jpg",
      qty: 1
    },
    {
      name: "Reflecting Pool",
      source: "https://cdn1.mtggoldfish.com/images/gf/Reflecting%2BPool%2B%255BCLB%255D.jpg",
      qty: 1
    },
    {
      name: "Sacred Foundry",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sacred%2BFoundry%2B%255BGTC%255D.jpg",
      qty: 1
    },
    {
      name: "Savannah",
      source: "https://cdn1.mtggoldfish.com/images/gf/Savannah%2B%255B3ED%255D.jpg",
      qty: 1
    },
    {
      name: "Scalding Tarn",
      source: "https://cdn1.mtggoldfish.com/images/gf/Scalding%2BTarn%2B%255BMH2%255D.jpg",
      qty: 1
    },
    {
      name: "Scrubland",
      source: "https://cdn1.mtggoldfish.com/images/gf/Scrubland%2B%255B3ED%255D.jpg",
      qty: 1
    },
    {
      name: "Steam Vents",
      source: "https://cdn1.mtggoldfish.com/images/gf/Steam%2BVents%2B%255BGRN%255D.jpg",
      qty: 1
    },
    {
      name: "Stomping Ground",
      source: "https://cdn1.mtggoldfish.com/images/gf/Stomping%2BGround%2B%255BGTC%255D.jpg",
      qty: 1
    },
    {
      name: "Taiga",
      source: "https://cdn1.mtggoldfish.com/images/gf/Taiga%2B%255B3ED%255D.jpg",
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
      name: "Unclaimed Territory",
      source: "https://cdn1.mtggoldfish.com/images/gf/Unclaimed%2BTerritory%2B%255BLCC%255D.jpg",
      qty: 1
    },
    {
      name: "Underground Sea",
      source: "https://cdn1.mtggoldfish.com/images/gf/Underground%2BSea%2B%255B3ED%255D.jpg",
      qty: 1
    },
    {
      name: "Volcanic Island",
      source: "https://cdn1.mtggoldfish.com/images/gf/Volcanic%2BIsland%2B%255B3ED%255D.jpg",
      qty: 1
    },
    {
      name: "Watery Grave",
      source: "https://cdn1.mtggoldfish.com/images/gf/Watery%2BGrave%2B%255BGRN%255D.jpg",
      qty: 1
    },
    {
      name: "Windswept Heath",
      source: "https://cdn1.mtggoldfish.com/images/gf/Windswept%2BHeath%2B%255BMH3%255D.jpg",
      qty: 1
    },
    {
      name: "Wooded Foothills",
      source: "https://cdn1.mtggoldfish.com/images/gf/Wooded%2BFoothills%2B%255BMH3%255D.jpg",
      qty: 1
    },
  ]

  let battles = [
    {
      name: "Invasion of Tarkir",
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