<script>
  import DeckList from "../DeckList.svelte";

  let commander = {
    name: "Kwain, Itinerant Meddler",
    source: "https://cdn1.mtggoldfish.com/images/gf/Kwain%252C%2BItinerant%2BMeddler%2B%255BCMR%255D.jpg",
    qty: 1
  }

  let creatures = [
    {
      name: "Faerie Mastermind",
      source: "https://cdn1.mtggoldfish.com/images/gf/Faerie%2BMastermind%2B%255BMOM%255D.jpg",
      qty: 1
    },
    {
      name: "Kami of the Crescent Moon",
      source: "https://cdn1.mtggoldfish.com/images/gf/Kami%2Bof%2Bthe%2BCrescent%2BMoon%2B%255BCN2%255D.jpg",
      qty: 1
    },
    {
      name: "Prince Imrahil the Fair",
      source: "https://cdn1.mtggoldfish.com/images/gf/Prince%2BImrahil%2Bthe%2BFair%2B%255BLTR%255D.jpg",
      qty: 1
    },
    {
      name: "Thassa's Oracle",
      source: "https://cdn1.mtggoldfish.com/images/gf/Thassa%2527s%2BOracle%2B%255BTHB%255D.jpg",
      qty: 1
    },
    {
      name: "Triskaidekaphile",
      source: "https://cdn1.mtggoldfish.com/images/gf/Triskaidekaphile%2B%253Cbundle%253E%2B%255BMID%255D.jpg",
      qty: 1
    },
    {
      name: "Laboratory Maniac",
      source: "https://cdn1.mtggoldfish.com/images/gf/Laboratory%2BManiac%2B%255BMB1%255D.jpg",
      qty: 1
    },
    {
      name: "Loran of the Third Path",
      source: "https://cdn1.mtggoldfish.com/images/gf/Loran%2Bof%2Bthe%2BThird%2BPath%2B%255BBLC%255D.jpg",
      qty: 1
    },
    {
      name: "Alandra, Sky Dreamer",
      source: "https://cdn1.mtggoldfish.com/images/gf/Alandra%252C%2BSky%2BDreamer%2B%255BMKC%255D.jpg",
      qty: 1
    },
    {
      name: "Heliod, the Radiant Dawn",
      source: "https://cdn1.mtggoldfish.com/images/gf/Heliod%252C%2Bthe%2BRadiant%2BDawn%2B%253Cshowcase%253E%2B%255BMOM%255D.jpg",
      qty: 1
    },
    {
      name: "The Council of Four",
      source: "https://cdn1.mtggoldfish.com/images/gf/The%2BCouncil%2Bof%2BFour%2B%253Cfoil%2Betched%253E%2B%255BCLB%255D.jpg",
      qty: 1
    },
    {
      name: "Consecrated Sphinx",
      source: "https://cdn1.mtggoldfish.com/images/gf/Consecrated%2BSphinx%2B%255BMBS%255D.jpg",
      qty: 1
    },
  ]

  let instants = [
    {
      name: "Pact of Negation",
      source: "https://cdn1.mtggoldfish.com/images/gf/Pact%2Bof%2BNegation%2B%255BA25%255D.jpg",
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
      name: "Swan Song",
      source: "https://cdn1.mtggoldfish.com/images/gf/Swan%2BSong%2B%255BTHS%255D.jpg",
      qty: 1
    },
    {
      name: "Swords to Plowshares",
      source: "https://cdn1.mtggoldfish.com/images/gf/Swords%2Bto%2BPlowshares%2B%255BLCC%255D.jpg",
      qty: 1
    },
    {
      name: "Arcane Denial",
      source: "https://cdn1.mtggoldfish.com/images/gf/Arcane%2BDenial%2B%253CB%253E%2B%255BALL%255D.jpg",
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
      name: "Dovin's Veto",
      source: "https://cdn1.mtggoldfish.com/images/gf/Dovin%2527s%2BVeto%2B%255BWAR%255D.jpg",
      qty: 1
    },
    {
      name: "Mana Drain",
      source: "https://cdn1.mtggoldfish.com/images/gf/Mana%2BDrain%2B%253Cshowcase%253E%2B%255BOTP%255D.jpg",
      qty: 1
    },
    {
      name: "Vision Skeins",
      source: "https://cdn1.mtggoldfish.com/images/gf/Vision%2BSkeins%2B%255BDIS%255D.jpg",
      qty: 1
    },
    {
      name: "Words of Wisdom",
      source: "https://cdn1.mtggoldfish.com/images/gf/Words%2Bof%2BWisdom%2B%255BOD%255D.jpg",
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
      name: "Teferi's Protection",
      source: "https://cdn1.mtggoldfish.com/images/gf/Teferi%2527s%2BProtection%2B%253CExtra%2BLife%2B2020%253E%2B%255BSLD%255D.jpg",
      qty: 1
    },
    {
      name: "Force of Will",
      source: "https://cdn1.mtggoldfish.com/images/gf/Force%2Bof%2BWill%2B%253Cborderless%253E%2B%255BDMR%255D.jpg",
      qty: 1
    },
  ]

  let sorceries = [
    {
      name: "Minds Aglow",
      source: "https://cdn1.mtggoldfish.com/images/gf/Minds%2BAglow%2B%255BCMM%255D.jpg",
      qty: 1
    },
    {
      name: "Ponder",
      source: "https://cdn1.mtggoldfish.com/images/gf/Ponder%2B%255BWHO%255D.jpg",
      qty: 1
    },
    {
      name: "Preordain",
      source: "https://cdn1.mtggoldfish.com/images/gf/Preordain%2B%255BWHO%255D.jpg",
      qty: 1
    },
    {
      name: "Prosperity",
      source: "https://cdn1.mtggoldfish.com/images/gf/Prosperity%2B%255B6ED%255D.jpg",
      qty: 1
    },
    {
      name: "Windfall",
      source: "https://cdn1.mtggoldfish.com/images/gf/Windfall%2B%255BLCC%255D.jpg",
      qty: 1
    },
    {
      name: "Supreme Verdict",
      source: "https://cdn1.mtggoldfish.com/images/gf/Supreme%2BVerdict%2B%255BCLU%255D.jpg",
      qty: 1
    },
    {
      name: "Approach of the Second Sun",
      source: "https://cdn1.mtggoldfish.com/images/gf/Approach%2Bof%2Bthe%2BSecond%2BSun%2B%255BAKH%255D.jpg",
      qty: 1
    },
    {
      name: "Sea Gate Restoration",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sea%2BGate%2BRestoration%2B%255BZNR%255D.jpg",
      qty: 1
    },
  ]

  let planeswalkers = [
    {
      name: "Jace Beleren",
      source: "https://cdn1.mtggoldfish.com/images/gf/Jace%2BBeleren%2B%255BCMM%255D.jpg",
      qty: 1
    },
    {
      name: "Jace, Wielder of Mysteries",
      source: "https://cdn1.mtggoldfish.com/images/gf/Jace%252C%2BWielder%2Bof%2BMysteries%2B%253Cplaneswalker%2Bstamp%253E%2B%255BPELD%255D.jpg",
      qty: 1
    },
    {
      name: "Teferi, Temporal Pilgrim",
      source: "https://cdn1.mtggoldfish.com/images/gf/Teferi%252C%2BTemporal%2BPilgrim%2B%253Cborderless%253E%2B%255BBRO%255D.jpg",
      qty: 1
    },
  ]

  let artifacts = [
    {
      name: "Mana Crypt",
      source: "https://cdn1.mtggoldfish.com/images/gf/Mana%2BCrypt%2B%255BMB1%255D.jpg",
      qty: 1
    },
    {
      name: "Mana Vault",
      source: "https://cdn1.mtggoldfish.com/images/gf/Mana%2BVault%2B%255B4ED%255D.jpg",
      qty: 1
    },
    {
      name: "Sol Ring",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sol%2BRing%2B%255BBLC%255D.jpg",
      qty: 1
    },
    {
      name: "Arcane Signet",
      source: "https://cdn1.mtggoldfish.com/images/gf/Arcane%2BSignet%2B%255BOTC%255D.jpg",
      qty: 1
    },
    {
      name: "Folio of Fancies",
      source: "https://cdn1.mtggoldfish.com/images/gf/Folio%2Bof%2BFancies%2B%255BELD%255D.jpg",
      qty: 1
    },
    {
      name: "Howling Mine",
      source: "https://cdn1.mtggoldfish.com/images/gf/Howling%2BMine%2B%253Cschematics%253E%2B%255BBRR%255D.jpg",
      qty: 1
    },
    {
      name: "Talisman of Progress",
      source: "https://cdn1.mtggoldfish.com/images/gf/Talisman%2Bof%2BProgress%2B%255BM3C%255D.jpg",
      qty: 1
    },
    {
      name: "Thought Vessel",
      source: "https://cdn1.mtggoldfish.com/images/gf/Thought%2BVessel%2B%255BBLC%255D.jpg",
      qty: 1
    },
    {
      name: "Temple Bell",
      source: "https://cdn1.mtggoldfish.com/images/gf/Temple%2BBell%2B%255BC16%255D.jpg",
      qty: 1
    },
    {
      name: "Font of Mythos",
      source: "https://cdn1.mtggoldfish.com/images/gf/Font%2Bof%2BMythos%2B%255BMB1%255D.jpg",
      qty: 1
    },
    {
      name: "Otherworld Atlas",
      source: "https://cdn1.mtggoldfish.com/images/gf/Otherworld%2BAtlas%2B%255BAVR%255D.jpg",
      qty: 1
    },
    {
      name: "Wedding Ring",
      source: "https://cdn1.mtggoldfish.com/images/gf/Wedding%2BRing%2B%253Cextended%253E%2B%255BWHO%255D.jpg",
      qty: 1
    },
    {
      name: "Alhammarret's Archive",
      source: "https://cdn1.mtggoldfish.com/images/gf/Alhammarret%2527s%2BArchive%2B%255BORI%255D.jpg",
      qty: 1
    },
    {
      name: "Venser's Journal",
      source: "https://cdn1.mtggoldfish.com/images/gf/Venser%2527s%2BJournal%2B%255BSOM%255D.jpg",
      qty: 1
    },
  ]

  let enchantments = [
    {
      name: "Mysic Remora",
      source: "https://cdn1.mtggoldfish.com/images/gf/Mystic%2BRemora%2B%253Cretro%253E%2B%255BDMR%255D.jpg",
      qty: 1
    },
    {
      name: "Island Sanctuary",
      source: "https://cdn1.mtggoldfish.com/images/gf/Island%2BSanctuary%2B%255B4ED%255D.jpg",
      qty: 1
    },
    {
      name: "Ominous Seas",
      source: "https://cdn1.mtggoldfish.com/images/gf/Ominous%2BSeas%2B%255BIKO%255D.jpg",
      qty: 1
    },
    {
      name: "Rest in Peace",
      source: "https://cdn1.mtggoldfish.com/images/gf/Rest%2Bin%2BPeace%2B%255BACR%255D.jpg",
      qty: 1
    },
    {
      name: "Dictate of Kruphix",
      source: "https://cdn1.mtggoldfish.com/images/gf/Dictate%2Bof%2BKruphix%2B%255BJOU%255D.jpg",
      qty: 1
    },
    {
      name: "Ghostly Prison",
      source: "https://cdn1.mtggoldfish.com/images/gf/Ghostly%2BPrison%2B%255BMKC%255D.jpg",
      qty: 1
    },
    {
      name: "Propaganda",
      source: "https://cdn1.mtggoldfish.com/images/gf/Propaganda%2B%255BACR%255D.jpg",
      qty: 1
    },
    {
      name: "Psychic Corrosion",
      source: "https://cdn1.mtggoldfish.com/images/gf/Psychic%2BCorrosion%2B%255BM19%255D.jpg",
      qty: 1
    },
    {
      name: "Rhystic Study",
      source: "https://cdn1.mtggoldfish.com/images/gf/Rhystic%2BStudy%2B%255BPR%255D.jpg",
      qty: 1
    },
    {
      name: "Smuggler's Share",
      source: "https://cdn1.mtggoldfish.com/images/gf/Smuggler%2527s%2BShare%2B%255BMKC%255D.jpg",
      qty: 1
    },
    {
      name: "Smothering Tithe",
      source: "https://cdn1.mtggoldfish.com/images/gf/Smuggler%2527s%2BShare%2B%255BMKC%255D.jpg",
      qty: 1
    },
    {
      name: "Teferi's Ageless Insight",
      source: "https://cdn1.mtggoldfish.com/images/gf/Teferi%2527s%2BAgeless%2BInsight%2B%253Cshowcase%253E%2B%255BM21%255D.jpg",
      qty: 1
    },
    {
      name: "Sphere of Safety",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sphere%2Bof%2BSafety%2B%253Cretro%253E%2B%255BRVR%255D.jpg",
      qty: 1
    },
    {
      name: "Forced Fruition",
      source: "https://cdn1.mtggoldfish.com/images/gf/Forced%2BFruition%2B%255BWOT%255D.jpg",
      qty: 1
    },
    {
      name: "Mind Over Matter",
      source: "https://cdn1.mtggoldfish.com/images/gf/Mind%2BOver%2BMatter%2B%255BEX%255D.jpg",
      qty: 1
    },
  ]

  let lands = [
    {
      name: "Ancient Tomb",
      source: "https://cdn1.mtggoldfish.com/images/gf/Ancient%2BTomb%2B%255BTE%255D.jpg",
      qty: 1
    },
    {
      name: "Command Tower",
      source: "https://cdn1.mtggoldfish.com/images/gf/Command%2BTower%2B%253C263%253E%2B%255BWHO%255D.jpg",
      qty: 1
    },
    {
      name: "Fabled Passage",
      source: "https://cdn1.mtggoldfish.com/images/gf/Fabled%2BPassage%2B%255BBLB%255D.jpg",
      qty: 1
    },
    {
      name: "Flooded Strand",
      source: "https://cdn1.mtggoldfish.com/images/gf/Flooded%2BStrand%2B%255BMH3%255D.jpg",
      qty: 1
    },
    {
      name: "Hall of Heliod's Generosity",
      source: "https://cdn1.mtggoldfish.com/images/gf/Hall%2Bof%2BHeliod%2527s%2BGenerosity%2B%255BWOC%255D.jpg",
      qty: 1
    },
    {
      name: "Hallowed Fountain",
      source: "https://cdn1.mtggoldfish.com/images/gf/Hallowed%2BFountain%2B%255BRNA%255D.jpg",
      qty: 1
    },
    {
      name: "Hengegate Pathway",
      source: "https://cdn1.mtggoldfish.com/images/gf/Hengegate%2BPathway%2B%253Cborderless%253E%2B%255BKHM%255D.jpg",
      qty: 1
    },
    {
      name: "Island",
      source: "https://cdn1.mtggoldfish.com/images/gf/Island%2B%253C251%253E%2B%255BTHB%255D.jpg",
      qty: 10
    },
    {
      name: "Mikokoro, Center of the Sea",
      source: "https://cdn1.mtggoldfish.com/images/gf/Mikokoro%252C%2BCenter%2Bof%2Bthe%2BSea%2B%255BDMC%255D.jpg",
      qty: 1
    },
    {
      name: "Mystic Gate",
      source: "https://cdn1.mtggoldfish.com/images/gf/Mystic%2BGate%2B%255BM3C%255D.jpg",
      qty: 1
    },
    {
      name: "Mystic Sanctuary",
      source: "https://cdn1.mtggoldfish.com/images/gf/Mystic%2BSanctuary%2B%255BELD%255D.jpg",
      qty: 1
    },
    {
      name: "Plains",
      source: "https://cdn1.mtggoldfish.com/images/gf/Plains%2B%253C250%253E%2B%255BTHB%255D.jpg",
      qty: 8
    },
    {
      name: "Prismatic Vista",
      source: "https://cdn1.mtggoldfish.com/images/gf/Prismatic%2BVista%2B%253Cretro%253E%2B%255BMH2%255D.jpg",
      qty: 1
    },
    {
      name: "Reliquary Tower",
      source: "https://cdn1.mtggoldfish.com/images/gf/Reliquary%2BTower%2B%255BM3C%255D.jpg",
      qty: 1
    },
    {
      name: "Sea of Clouds",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sea%2Bof%2BClouds%2B%255BCLB%255D.jpg",
      qty: 1
    },
    {
      name: "Tundra",
      source: "https://cdn1.mtggoldfish.com/images/gf/Tundra%2B%255B3ED%255D.jpg",
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
    Everyone gets to draw!
    <br>
    <br>
    Sit back, relax, and let everyone draw some cards!
    <br>
    <br>
    This deck is called group hug and it does so in the form of letting everyone draw plenty of cards!
    However, the hug gets tighter and tighter as deck counts get lower and lower. 
    No problem here though, we have cards that say we win if we have no more cards in our library.
    And, while everyone was having fun drawing cards, we've built a defense that's pretty tough to get around.
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