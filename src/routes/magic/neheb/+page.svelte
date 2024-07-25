<script>
  import DeckList from "../DeckList.svelte";

  let commander = {
    name: "Neheb, the Eternal",
    id: "neheb-the-eternal", 
    source: "https://cdn1.mtggoldfish.com/images/gf/Neheb%252C%2Bthe%2BEternal%2B%255BMKC%255D.jpg",
    qty: 1
  }

  let creatures = [
    {
      name: "Dockside Extorsionist",
      id: "dockside-extortionist",
      source:"https://cdn1.mtggoldfish.com/images/gf/Dockside%2BExtortionist%2B%255BC19%255D.jpg",
      qty: 1
    },
    {
      name: "Birgi, God of Storytelling",
      id: "birgi",
      source: "https://cdn1.mtggoldfish.com/images/gf/Birgi%252C%2BGod%2Bof%2BStorytelling%2B%253Cshowcase%253E%2B%255BKHM%255D.jpg",
      qty: 1
    },
    {
      name: "Magus of the Moon",
      id: "magus-of-the-moon",
      source: "https://cdn1.mtggoldfish.com/images/gf/Magus%2Bof%2Bthe%2BMoon%2B%255BTSR%255D.jpg",
      qty: 1
    },
    {
      name: "Magus of the Wheel",
      id: "magus-of-the-wheel",
      source: "https://cdn1.mtggoldfish.com/images/gf/Magus%2Bof%2Bthe%2BWheel%2B%253Cfoil%2Betched%253E%2B%255BCMM%255D.jpg",
      qty: 1
    },
    {
      name: "Leyline Tyrant",
      id: "leyline-tyrant",
      source: "https://cdn1.mtggoldfish.com/images/gf/Leyline%2BTyrant%2B%255BZNR%255D.jpg",
      qty: 1
    },
    {
      name: "Neheb, Dreadhorde Champion",
      id: "neheb-dreadhorde-champion",
      source: "https://cdn1.mtggoldfish.com/images/gf/Neheb%252C%2BDreadhorde%2BChampion%2B%255BDMC%255D.jpg",
      qty: 1
    },
    {
      name: "Ojer Axonil, Deepest Might",
      id: "ojer-axonil",
      source: "https://cdn1.mtggoldfish.com/images/gf/Ojer%2BAxonil%252C%2BDeepest%2BMight%2B%253Cshowcase%253E%2B%255BLCI%255D.jpg",
      qty: 1
    },
    {
      name: "Solphim, Mayhem Dominus",
      id: "solphim-mayhem-dominus",
      source: "https://cdn1.mtggoldfish.com/images/gf/Solphim%252C%2BMayhem%2BDominus%2B%253Cshowcase%253E%2B%255BONE%255D.jpg",
      qty: 1
    },
    {
      name: "Tectonic Giant",
      id: "tectonic-giant",
      source: "https://cdn1.mtggoldfish.com/images/gf/Tectonic%2BGiant%2B%255BSCD%255D.jpg",
      qty: 1
    },
    {
      name: "Torbran, Thane of the Red Fell",
      id: "torbran-thane",
      source: "https://cdn1.mtggoldfish.com/images/gf/Torbran%252C%2BThane%2Bof%2BRed%2BFell%2B%255BELD%255D.jpg",
      qty: 1
    },
    {
      name: "Urabrask",
      id: "urabrask",
      source: "https://cdn1.mtggoldfish.com/images/gf/Urabrask%2B%253Cshowcase%253E%2B%255BMOM%255D.jpg",
      qty: 1
    },
    {
      name: "Bonehoard Dracosaur",
      id: "bonehoard-dracosaur",
      source: "https://cdn1.mtggoldfish.com/images/gf/Bonehoard%2BDracosaur%2B%253Cborderless%253E%2B%255BLCI%255D.jpg",
      qty: 1
    },
    {
      name: "Heartless Hidetsugu",
      id: "heartless-hidetsugu",
      source: "https://cdn1.mtggoldfish.com/images/gf/Heartless%2BHidetsugu%2B%255BCMM%255D.jpg",
      qty: 1
    },
    {
      name: "Knollspone Dragon",
      id: "knollspine-dragon",
      source: "https://cdn1.mtggoldfish.com/images/gf/Knollspine%2BDragon%2B%255BGN3%255D.jpg",
      qty: 1
    },
  ]

  let artifacts = [
    {
      name: "Chrome Mox",
      id: "chrome-mox",
      source: "https://cdn1.mtggoldfish.com/images/gf/Chrome%2BMox%2B%255BMRD%255D.jpg",
      qty: 1
    },
    {
      name: "Everflowing Chalice",
      id: "everflowing-chalice",
      source: "https://cdn1.mtggoldfish.com/images/gf/Everflowing%2BChalice%2B%255BMKC%255D.jpg",
      qty: 1
    },
    {
      name: "Jeweled Lotus",
      id: "jeweled-lotus",
      source: "https://cdn1.mtggoldfish.com/images/gf/Jeweled%2BLotus%2B%253C418094%253E%2B%255BPRM%255D.jpg",
      qty: 1
    },
    {
      name: "Mana Crypt",
      id: "mana-crypt",
      source: "https://cdn1.mtggoldfish.com/images/gf/Mana%2BCrypt%2B%255BVMA%255D.jpg",
      qty: 1
    },
    {
      name: "Mox Diamond",
      id: "mox-diamond",
      source: "https://cdn1.mtggoldfish.com/images/gf/Mox%2BDiamond%2B%255BTPR%255D.jpg",
      qty: 1
    },
    {
      name: "Mana Vault",
      id: "mana-vault",
      source: "https://cdn1.mtggoldfish.com/images/gf/Mana%2BVault%2B%255BVMA%255D.jpg",
      qty: 1
    },
    {
      name: "Sol Ring",
      id: "sol-ring",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sol%2BRing%2B%253C251%253E%2B%255B40K%255D.jpg",
      qty: 1
    },
    {
      name: "Grim Monolith",
      id: "monolith",
      source: "https://cdn1.mtggoldfish.com/images/gf/Grim%2BMonolith%2B%253C400641%253E%2B%255BPRM%255D.jpg",
      qty: 1
    },
    {
      name: "Lightning Greaves",
      id: "lightning-greaves",
      source: "https://cdn1.mtggoldfish.com/images/gf/Lightning%2BGreaves%2B%255BMB1%255D.jpg",
      qty: 1
    },
    {
      name: "Ruby Medallion",
      id: "ruby-medallion",
      source: "https://cdn1.mtggoldfish.com/images/gf/Ruby%2BMedallion%2B%255BMH3%255D.jpg",
      qty: 1
    },
    {
      name: "Cryptolith Fragment",
      id: "cryptolith-fragment",
      source: "https://cdn1.mtggoldfish.com/images/gf/Cryptolith%2BFragment%2B%255BEMN%255D.jpg",
      qty: 1
    },
    {
      name: "Sword of Fire and Ice",
      id: "sword-fire-ice",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sword%2Bof%2BFire%2Band%2BIce%2B%255BDST%255D.jpg",
      qty: 1
    },
    {
      name: "Memory Jar",
      id: "memory-jar",
      source: "https://cdn1.mtggoldfish.com/images/gf/Memory%2BJar%2B%255BUL%255D.jpg",
      qty: 1
    },
    {
      name: "Pyromancer's Goggles",
      id: "goggles",
      source: "https://cdn1.mtggoldfish.com/images/gf/Pyromancer%2527s%2BGoggles%2B%255BC21%255D.jpg",
      qty: 1
    },
  ]

  let sorceries = [
    {
      name: "Faithless Looting",
      id: "faithless-looting",
      source: "https://cdn1.mtggoldfish.com/images/gf/Faithless%2BLooting%2B%255BCMM%255D.jpg",
      qty: 1
    },
    {
      name: "Gamble",
      id: "gamble",
      source: "https://cdn1.mtggoldfish.com/images/gf/Gamble%2B%253Cborderless%253E%2B%255BDMR%255D.jpg",
      qty: 1
    },
    {
      name: "Rolling Earthquake",
      id: "rolling-earthquake",
      source: "https://cdn1.mtggoldfish.com/images/gf/Rolling%2BEarthquake%2B%255B2XM%255D.jpg",
      qty: 1
    },
    {
      name: "Vandalblast",
      id: "vandalblast",
      source: "https://cdn1.mtggoldfish.com/images/gf/Vandalblast%2B%253Cborderless%253E%2B%255BCMM%255D.jpg",
      qty: 1
    },
    {
      name: "Crackle with Power",
      id: "crackle-with-power",
      source: "https://cdn1.mtggoldfish.com/images/gf/Crackle%2Bwith%2BPower%2B%253Cshowcase%253E%2B%255BOTP%255D.jpg",
      qty: 1
    },
    {
      name: "Flame Rift",
      id: "flame-rift",
      source: "https://cdn1.mtggoldfish.com/images/gf/Flame%2BRift%2B%255BMH2%255D.jpg",
      qty: 1
    },
    {
      name: "Jaya's Immolating Inferno",
      id: "immolating-inferno",
      source: "https://cdn1.mtggoldfish.com/images/gf/Jaya%2527s%2BImmolating%2BInferno%2B%253Cprecon%253E%2B%255BCMR%255D.jpg",
      qty: 1
    },
    {
      name: "Acidic Soil",
      id: "acidic-soil",
      source: "https://cdn1.mtggoldfish.com/images/gf/Acidic%2BSoil%2B%255BUZ%255D.jpg",
      qty: 1
    },
    {
      name: "Jeska's Will",
      id: "jeskas-will",
      source: "https://cdn1.mtggoldfish.com/images/gf/Jeska%2527s%2BWill%2B%255BMKC%255D.jpg",
      qty: 1
    },
    {
      name: "Slagstorm",
      id: "slagstorm",
      source: "https://cdn1.mtggoldfish.com/images/gf/Slagstorm%2B%255BMBS%255D.jpg",
      qty: 1
    },
    {
      name: "Wheel of Fortune",
      id: "wheel-of-fortune",
      source: "https://cdn1.mtggoldfish.com/images/gf/Wheel%2Bof%2BFortune%2B%255B3ED%255D.jpg",
      qty: 1
    },
    {
      name: "Wheel of Misfortune",
      id: "wheel-of-misfortune",
      source: "https://cdn1.mtggoldfish.com/images/gf/Wheel%2Bof%2BMisfortune%2B%255BCMR%255D.jpg",
      qty: 1
    },
    {
      name: "Fiery Confluence",
      id: "fiery-confluence",
      source: "https://cdn1.mtggoldfish.com/images/gf/Fiery%2BConfluence%2B%255BSCD%255D.jpg",
      qty: 1
    },
    {
      name: "Ignite the Future",
      id: "ignite-the-future",
      source: "https://cdn1.mtggoldfish.com/images/gf/Ignite%2Bthe%2BFuture%2B%255BJ22%255D.jpg",
      qty: 1
    },
    {
      name: "Past in Flames",
      id: "past-in-flames",
      source: "https://cdn1.mtggoldfish.com/images/gf/Past%2Bin%2BFlames%2B%255B40K%255D.jpg",
      qty: 1
    },
    {
      name: "Seize the Day",
      id: "seize-the-day",
      source: "https://cdn1.mtggoldfish.com/images/gf/Seize%2Bthe%2BDay%2B%253CSecret%2BLair%2Bx%2BArcane%253E%2B%255BSLD%255D.jpg",
      qty: 1
    },
    {
      name: "Chandra's Ignition",
      id: "chandras-ignition",
      source: "https://cdn1.mtggoldfish.com/images/gf/Chandra%2527s%2BIgnition%2B%255BM3C%255D.jpg",
      qty: 1
    },
    {
      name: "Reforge the Soul",
      id: "reforge-the-soul",
      source: "https://cdn1.mtggoldfish.com/images/gf/Reforge%2Bthe%2BSoul%2B%255BAVR%255D.jpg",
      qty: 1
    },
    {
      name: "Insult // Injury",
      id: "insult-injury",
      source: "https://cdn1.mtggoldfish.com/images/gf/Insult%2B%252F%252F%2BInjury%2B%255BAKH%255D.jpg",
      qty: 1
    },
    {
      name: "Apex of Power",
      id: "apex-of-power",
      source: "https://cdn1.mtggoldfish.com/images/gf/Apex%2Bof%2BPower%2B%255BAFC%255D.jpg",
      qty: 1
    },
  ]

  let instants = [
    {
      name: "Pyroblast",
      id: "pyroblast",
      source: "https://cdn1.mtggoldfish.com/images/gf/Pyroblast%2B%255BICE%255D.jpg",
      qty: 1
    },
    {
      name: "Red Elemental Blast",
      id: "red-elemental-blast",
      source: "https://cdn1.mtggoldfish.com/images/gf/Red%2BElemental%2BBlast%2B%255B3ED%255D.jpg",
      qty: 1
    },
    {
      name: "Comet Storm",
      id: "comet-storm",
      source: "https://cdn1.mtggoldfish.com/images/gf/Comet%2BStorm%2B%253Cprecon%253E%2B%255BCMR%255D.jpg",
      qty: 1
    },
    {
      name: "Commune with Lava",
      id: "commune-with-lava",
      source: "https://cdn1.mtggoldfish.com/images/gf/Commune%2Bwith%2BLava%2B%255BAFC%255D.jpg",
      qty: 1
    },
    {
      name: "Fork",
      id: "fork",
      source: "https://cdn1.mtggoldfish.com/images/gf/Fork%2B%255B3ED%255D.jpg",
      qty: 1
    },
    {
      name: "Price of Progress",
      id: "price-of-progress",
      source: "https://cdn1.mtggoldfish.com/images/gf/Price%2Bof%2BProgress%2B%255BEMA%255D.jpg",
      qty: 1
    },
    {
      name: "Reverberate",
      id: "reverberate",
      source: "https://cdn1.mtggoldfish.com/images/gf/Reverberate%2B%255B40K%255D.jpg",
      qty: 1
    },
    {
      name: "Tibalt's Trickery",
      id: "tibalts-trickery",
      source: "https://cdn1.mtggoldfish.com/images/gf/Tibalt%2527s%2BTrickery%2B%255BKHM%255D.jpg",
      qty: 1
    },
    {
      name: "Chaos Warp",
      id: "chaos-warp",
      source: "https://cdn1.mtggoldfish.com/images/gf/Chaos%2BWarp%2B%255BOTC%255D.jpg",
      qty: 1
    },
    {
      name: "Deflecting Swat",
      id: "deflecting-swat",
      source: "https://cdn1.mtggoldfish.com/images/gf/Deflecting%2BSwat%2B%255BC20%255D.jpg",
      qty: 1
    },
    {
      name: "Delayed Blast Fireball",
      id: "delayed-blast-fireball",
      source: "https://cdn1.mtggoldfish.com/images/gf/Delayed%2BBlast%2BFireball%2B%253Cextended%253E%2B%255BCLB%255D.jpg",
      qty: 1
    },
    {
      name: "Seething Song",
      id: "seething-song",
      source: "https://cdn1.mtggoldfish.com/images/gf/Seething%2BSong%2B%255B9ED%255D.jpg",
      qty: 1
    },
    {
      name: "Valakut Awakening",
      id: "valakut-awakening",
      source: "https://cdn1.mtggoldfish.com/images/gf/Valakut%2BAwakening%2B%255BZNR%255D.jpg",
      qty: 1
    },
  ]

  let enchantments = [
    {
      name: "Underworld Breach",
      id: "underworld-breach",
      source: "https://cdn1.mtggoldfish.com/images/gf/Underworld%2BBreach%2B%255BTHB%255D.jpg",
      qty: 1
    },
    {
      name: "Virtue of Courage",
      id: "virtue-of-courage",
      source: "https://cdn1.mtggoldfish.com/images/gf/Virtue%2Bof%2BCourage%2B%253Cshowcase%253E%2B%255BWOE%255D.jpg",
      qty: 1
    },
    {
      name: "Aggravated Assault",
      id: "aggravated-assault",
      source: "https://cdn1.mtggoldfish.com/images/gf/Aggravated%2BAssault%2B%255BWOT%255D.jpg",
      qty: 1
    },
    {
      name: "Blood Moon",
      id: "blood-moon",
      source: "https://cdn1.mtggoldfish.com/images/gf/Blood%2BMoon%2B%255BMM3%255D.jpg",
      qty: 1
    },
    {
      name: "Repercussion",
      id: "repercussion",
      source: "https://cdn1.mtggoldfish.com/images/gf/Repercussion%2B%253Cborderless%2BAnime%253E%2B%255BWOT%255D.jpg",
      qty: 1
    },
    {
      name: "Pyrohemia",
      id: "pyrohemia",
      source: "https://cdn1.mtggoldfish.com/images/gf/Pyrohemia%2B%255BPLC%255D.jpg",
      qty: 1
    },
    {
      name: "Fiery Emancipation",
      id: "fiery-emancipation",
      source: "https://cdn1.mtggoldfish.com/images/gf/Fiery%2BEmancipation%2B%255BWOT%255D.jpg",
      qty: 1
    },
  ]
  
  let planeswalkers = [
    {
      name: "Chandra, Torch of Defiance",
      id: "chandra-torch",
      source: "https://cdn1.mtggoldfish.com/images/gf/Chandra%252C%2BTorch%2Bof%2BDefiance%2B%255BCMM%255D.jpg",
      qty: 1
    },
  ]

  let lands = [
    {
      name: "Ancient Tomb",
      id: "ancient-tomb",
      source: "https://cdn1.mtggoldfish.com/images/gf/Ancient%2BTomb%2B%255BPLIST%255D.jpg",
      qty: 1
    },
    {
      name: "Arid Mesa",
      id: "arid-mesa",
      source:"https://cdn1.mtggoldfish.com/images/gf/Arid%2BMesa%2B%255BZEN%255D.jpg",
      qty: 1
    },
    {
      name: "Bloodstained Mire",
      id: "bloodstained-mire",
      source: "https://cdn1.mtggoldfish.com/images/gf/Bloodstained%2BMire%2B%255BMH3%255D.jpg",
      qty: 1
    },
    {
      name: "Nykthos, Shrine to Nyx",
      id: "nykthos-shrine",
      source: "https://cdn1.mtggoldfish.com/images/gf/Nykthos%252C%2BShrine%2Bto%2BNyx%2B%255BTHS%255D.jpg",
      qty: 1
    },
    {
      name: "Prismatic Vista",
      id: "prismatic-vista",
      source: "https://cdn1.mtggoldfish.com/images/gf/Prismatic%2BVista%2B%255BMH1%255D.jpg",
      qty: 1
    },
    {
      name: "Scalding Tarn",
      id: "scalding-tarn",
      source: "https://cdn1.mtggoldfish.com/images/gf/Scalding%2BTarn%2B%255BMH2%255D.jpg",
      qty: 1
    },
    {
      name: "Snow-Covered Mountain",
      id: "snow-covered-mountain",
      source: "https://cdn1.mtggoldfish.com/images/gf/Snow-Covered%2BMountain%2B%253C283%253E%2B%255BKHM%255D.jpg",
      qty: 22
    },
    {
      name: "Valakut, the Molten Pinnacle",
      id: "valakut-molten-pinnacle",
      source: "https://cdn1.mtggoldfish.com/images/gf/Valakut%252C%2Bthe%2BMolten%2BPinnacle%2B%255BZEN%255D.jpg",
      qty: 1
    },
    {
      name: "Wooded Foothills",
      id: "wooded-foothills",
      source: "https://cdn1.mtggoldfish.com/images/gf/Wooded%2BFoothills%2B%255BMH3%255D.jpg",
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
    Burn everything.
    <br>
    <br>
    This deck is all about dealing a lot of damage around the table, and using Neheb to generate mana to deal even more damage!
    <br>
    <br>
    I slow the opponent down with punishing cards like Blood Moon or Magus of the Moon while I set up my board, then cast damage dealing spells like Price of Progress.
    <br>
    <br>
    Damage is maximized by either duplicating spells with Fork affects or multiplying damage with cards like Fiery Emancipation. 
  </p>
</div>

<style lang="scss">
 #decklist {
  width: 100%;
 }

 hr {
  width: 75%;
  margin-left: 0px;
 }
</style>