<script>
  import DeckList from "../DeckList.svelte";

  let commander = {
    name: "Grand Arbiter Augustin IV",
    source: "https://cdn1.mtggoldfish.com/images/gf/Grand%2BArbiter%2BAugustin%2BIV%2B%253Cborderless%253E%2B%255B2X2%255D.jpg",
    qty: 1
  }

  let creatures = [
    {
      name: "Esper Sentinel",
      source: "https://cdn1.mtggoldfish.com/images/gf/Esper%2BSentinel%2B%253Cshowcase%253E%2B%255BMH2%255D.jpg",
      qty: 1
    },
    {
      name: "Archivist of Oghma",
      source: "https://cdn1.mtggoldfish.com/images/gf/Archivist%2Bof%2BOghma%2B%255BCLB%255D.jpg",
      qty: 1
    },
    {
      name: "Dauntless Dismantler",
      source: "https://cdn1.mtggoldfish.com/images/gf/Dauntless%2BDismantler%2B%255BLCI%255D.jpg",
      qty: 1
    },
    {
      name: "Drannith Magistrate",
      source: "https://cdn1.mtggoldfish.com/images/gf/Drannith%2BMagistrate%2B%255BIKO%255D.jpg",
      qty: 1
    },
    {
      name: "Grand Abolisher",
      source: "https://cdn1.mtggoldfish.com/images/gf/Grand%2BAbolisher%2B%255BBIG%255D.jpg",
      qty: 1
    },
    {
      name: "Lavinia, Azorius Renegade",
      source: "https://cdn1.mtggoldfish.com/images/gf/Lavinia%252C%2BAzorius%2BRenegade%2B%253Cretro%253E%2B%255BRVR%255D.jpg",
      qty: 1
    },
    {
      name: "Soulless Jailer",
      source: "https://cdn1.mtggoldfish.com/images/gf/Soulless%2BJailer%2B%255BONE%255D.jpg",
      qty: 1
    },
    {
      name: "Thalia, Guardian of Thraben",
      source: "https://cdn1.mtggoldfish.com/images/gf/Thalia%252C%2BGuardian%2Bof%2BThraben%2B%253Cshowcase%253E%2B%255BVOW%255D.jpg",
      qty: 1
    },
    {
      name: "Archon of Emeria",
      source: "https://cdn1.mtggoldfish.com/images/gf/Archon%2Bof%2BEmeria%2B%253Cplaneswalker%2Bstamp%253E%2B%255BZNR%255D.jpg",
      qty: 1
    },
    {
      name: "Aven Mindcensor",
      source: "https://cdn1.mtggoldfish.com/images/gf/Aven%2BMindcensor%2B%255BCLB%255D.jpg",
      qty: 1
    },
    {
      name: "Urza, Lord Protector",
      source: "https://cdn1.mtggoldfish.com/images/gf/Urza%252C%2BLord%2BProtector%2B%255BBRO%255D.jpg",
      qty: 1
    },
    {
      name: "Linvala, Keeper of Silence",
      source: "https://cdn1.mtggoldfish.com/images/gf/Linvala%252C%2BKeeper%2Bof%2BSilence%2B%255BJMP%255D.jpg",
      qty: 1
    },
    {
      name: "Spelltithe Enforcer",
      source: "https://cdn1.mtggoldfish.com/images/gf/Spelltithe%2BEnforcer%2B%255BFMB1%255D.jpg",
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
      name: "Silence",
      source: "https://cdn1.mtggoldfish.com/images/gf/Silence%2B%255BM11%255D.jpg",
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
      name: "Mana Leak",
      source: "https://cdn1.mtggoldfish.com/images/gf/Mana%2BLeak%2B%255BDDN%255D.jpg",
      qty: 1
    },
    {
      name: "Muddle the Mixture",
      source: "https://cdn1.mtggoldfish.com/images/gf/Muddle%2Bthe%2BMixture%2B%253Cretro%253E%2B%255BRVR%255D.jpg",
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
      name: "Force of Will",
      source: "https://cdn1.mtggoldfish.com/images/gf/Force%2Bof%2BWill%2B%253Cborderless%253E%2B%255BDMR%255D.jpg",
      qty: 1
    },
  ]

  let sorceries = [
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
      name: "Transmute Artifact",
      source: "https://cdn1.mtggoldfish.com/images/gf/Transmute%2BArtifact%2B%255BATQ%255D.jpg",
      qty: 1
    },
    {
      name: "Day's Undoing",
      source: "https://cdn1.mtggoldfish.com/images/gf/Day%2527s%2BUndoing%2B%255BCMM%255D.jpg",
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
  ]

  let planeswalkers = [
    {
      name: "Dovin, Hand of Control",
      source: "https://cdn1.mtggoldfish.com/images/gf/Dovin%252C%2BHand%2Bof%2BControl%2B%255BWAR%255D.jpg",
      qty: 1
    },
    {
      name: "Narset, Parter of Veils",
      source: "https://cdn1.mtggoldfish.com/images/gf/Narset%252C%2BParter%2Bof%2BVeils%2B%255BWAR%255D.jpg",
      qty: 1
    },
    {
      name: "Teferi, Time Raveler",
      source: "https://cdn1.mtggoldfish.com/images/gf/Teferi%252C%2BTime%2BRaveler%2B%253CImagine%253A%2BCritters%253E%2B%255BBLC%255D.jpg",
      qty: 1
    },
    {
      name: "Teferi, Hero of Dominaria",
      source: "https://cdn1.mtggoldfish.com/images/gf/Teferi%252C%2BHero%2Bof%2BDominaria%2B%255BDOM%255D.jpg",
      qty: 1
    },
    {
      name: "Tezzeret the Seeker",
      source: "https://cdn1.mtggoldfish.com/images/gf/Tezzeret%2Bthe%2BSeeker%2B%253COutlaw%2BAnthology%2BVolume%2B1%253A%2BRebellious%2BRenegades%253E%2B%255BSLD%255D.jpg",
      qty: 1
    },
  ]
  
  let artifacts = [
    {
      name: "Jeweled Lotus",
      source: "https://cdn1.mtggoldfish.com/images/gf/Jeweled%2BLotus%2B%255BCMR%255D.jpg",
      qty: 1
    },
    {
      name: "Mox Diamond",
      source: "https://cdn1.mtggoldfish.com/images/gf/Mox%2BDiamond%2B%255BST%255D.jpg",
      qty: 1
    },
    {
      name: "Mox Opal",
      source: "https://cdn1.mtggoldfish.com/images/gf/Mox%2BOpal%2B%255B2XM%255D.jpg",
      qty: 1
    },
    {
      name: "Mana Vault",
      source: "https://cdn1.mtggoldfish.com/images/gf/Mana%2BVault%2B%255B4ED%255D.jpg",
      qty: 1
    },
    {
      name: "Sensei's Divining Top",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sensei%2527s%2BDivining%2BTop%2B%255BEMA%255D.jpg",
      qty: 1
    },
    {
      name: "Sol Ring",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sol%2BRing%2B%255BBLC%255D.jpg",
      qty: 1
    },
    {
      name: "Cursed Totem",
      source: "https://cdn1.mtggoldfish.com/images/gf/Cursed%2BTotem%2B%255BMH2%255D.jpg",
      qty: 1
    },
    {
      name: "Grim Monolith",
      source: "https://cdn1.mtggoldfish.com/images/gf/Grim%2BMonolith%2B%255BUL%255D.jpg",
      qty: 1
    },
    {
      name: "Isochron Scepter",
      source: "https://cdn1.mtggoldfish.com/images/gf/Isochron%2BScepter%2B%255BDDJ%255D.jpg",
      qty: 1
    },
    {
      name: "Sapphire Medallion",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sapphire%2BMedallion%2B%255BMH3%255D.jpg",
      qty: 1
    },
    {
      name: "Sphere of Resistance",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sphere%2Bof%2BResistance%2B%253CFallout%2BVault%2BBoy%253E%2B%255BSLD%255D.jpg",
      qty: 1
    },
    {
      name: "Talisman of Progress",
      source: "https://cdn1.mtggoldfish.com/images/gf/Talisman%2Bof%2BProgress%2B%255BM3C%255D.jpg",
      qty: 1
    },
    {
      name: "Thorn of Amethyst",
      source: "https://cdn1.mtggoldfish.com/images/gf/Thorn%2Bof%2BAmethyst%2B%253Cretro%253E%2B%255BBRR%255D.jpg",
      qty: 1
    },
    {
      name: "Torpor Orb",
      source: "https://cdn1.mtggoldfish.com/images/gf/Torpor%2BOrb%2B%255BBIG%255D.jpg",
      qty: 1
    },
    {
      name: "Winter Orb",
      source: "https://cdn1.mtggoldfish.com/images/gf/Winter%2BOrb%2B%253CFallout%2BVault%2BBoy%253E%2B%255BSLD%255D.jpg",
      qty: 1
    },
    {
      name: "Helm of Obedience",
      source: "https://cdn1.mtggoldfish.com/images/gf/Helm%2Bof%2BObedience%2B%255BALL%255D.jpg",
      qty: 1
    },
    {
      name: "God-Pharaoh's Statue",
      source: "https://cdn1.mtggoldfish.com/images/gf/God-Pharaoh%2527s%2BStatue%2B%255BWAR%255D.jpg",
      qty: 1
    },
  ]

  let enchantments = [
    {
      name: "Land Tax",
      source: "https://cdn1.mtggoldfish.com/images/gf/Land%2BTax%2B%255BWOT%255D.jpg",
      qty: 1
    },
    {
      name: "Mystic Remora",
      source: "https://cdn1.mtggoldfish.com/images/gf/Mystic%2BRemora%2B%253Cretro%253E%2B%255BDMR%255D.jpg",
      qty: 1
    },
    {
      name: "Blind Obedience",
      source: "https://cdn1.mtggoldfish.com/images/gf/Blind%2BObedience%2B%253Cretro%253E%2B%255BRVR%255D.jpg",
      qty: 1
    },
    {
      name: "Counterbalance",
      source: "https://cdn1.mtggoldfish.com/images/gf/Counterbalance%2B%255BPLIST%255D.jpg",
      qty: 1
    },
    {
      name: "Rest in Peace",
      source: "https://cdn1.mtggoldfish.com/images/gf/Rest%2Bin%2BPeace%2B%255BACR%255D.jpg",
      qty: 1
    },
    {
      name: "Stasis",
      source: "https://cdn1.mtggoldfish.com/images/gf/Stasis%2B%255B5ED%255D.jpg",
      qty: 1
    },
    {
      name: "Aura of Silence",
      source: "https://cdn1.mtggoldfish.com/images/gf/Aura%2Bof%2BSilence%2B%255BMB1%255D.jpg",
      qty: 1
    },
    {
      name: "Back to Basics",
      source: "https://cdn1.mtggoldfish.com/images/gf/Back%2Bto%2BBasics%2B%255BUMA%255D.jpg",
      qty: 1
    },
    {
      name: "Propaganda",
      source: "https://cdn1.mtggoldfish.com/images/gf/Propaganda%2B%255BACR%255D.jpg",
      qty: 1
    },
    {
      name: "Rhystic Study",
      source: "https://cdn1.mtggoldfish.com/images/gf/Rhystic%2BStudy%2B%255BPR%255D.jpg",
      qty: 1
    },
    {
      name: "Smothering Tithe",
      source: "https://cdn1.mtggoldfish.com/images/gf/Smothering%2BTithe%2B%255BWOT%255D.jpg",
      qty: 1
    },
    {
      name: "Trouble in Pairs",
      source: "https://cdn1.mtggoldfish.com/images/gf/Trouble%2Bin%2BPairs%2B%255BMKC%255D.jpg",
      qty: 1
    },
  ]

  let lands = [
    {
      name: "Academy Ruins",
      source: "https://cdn1.mtggoldfish.com/images/gf/Academy%2BRuins%2B%255B2XM%255D.jpg",
      qty: 1
    },
    {
      name: "Ancient Tomb",
      source: "https://cdn1.mtggoldfish.com/images/gf/Ancient%2BTomb%2B%255BTE%255D.jpg",
      qty: 1
    },
    {
      name: "Celestial Colonnade",
      source: "https://cdn1.mtggoldfish.com/images/gf/Celestial%2BColonnade%2B%255BWHO%255D.jpg",
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
      name: "Inventors' Fair",
      source: "https://cdn1.mtggoldfish.com/images/gf/Inventors%2527%2BFair%2B%255BKLD%255D.jpg",
      qty: 1
    },
    {
      name: "Island",
      source: "https://cdn1.mtggoldfish.com/images/gf/Island%2B%253C251%253E%2B%255BTHB%255D.jpg",
      qty: 8
    },
    {
      name: "Maze of Ith",
      source: "https://cdn1.mtggoldfish.com/images/gf/Maze%2Bof%2BIth%2B%253Cretro%253E%2B%255BDMR%255D.jpg",
      qty: 1
    },
    {
      name: "Plains",
      source: "https://cdn1.mtggoldfish.com/images/gf/Plains%2B%253C250%253E%2B%255BTHB%255D.jpg",
      qty: 6
    },
    {
      name: "Prahv, Spires of Order",
      source: "https://cdn1.mtggoldfish.com/images/gf/Prahv%252C%2BSpires%2Bof%2BOrder%2B%255BDIS%255D.jpg",
      qty: 1
    },
    {
      name: "Prismatic Vista",
      source: "https://cdn1.mtggoldfish.com/images/gf/Prismatic%2BVista%2B%253Cretro%253E%2B%255BMH2%255D.jpg",
      qty: 1
    },
    {
      name: "Rishadan Port",
      source: "https://cdn1.mtggoldfish.com/images/gf/Rishadan%2BPort%2B%255BA25%255D.jpg",
      qty: 1
    },
    {
      name: "Sea of Clouds",
      source: "https://cdn1.mtggoldfish.com/images/gf/Sea%2Bof%2BClouds%2B%255BCLB%255D.jpg",
      qty: 1
    },
    {
      name: "Strip Mine",
      source: "https://cdn1.mtggoldfish.com/images/gf/Strip%2BMine%2B%255B4ED%255D.jpg",
      qty: 1
    },
    {
      name: "Tundra",
      source: "https://cdn1.mtggoldfish.com/images/gf/Tundra%2B%255B3ED%255D.jpg",
      qty: 1
    },
    {
      name: "Wasteland",
      source: "https://cdn1.mtggoldfish.com/images/gf/Wasteland%2B%253CValley%2Bof%2BGorgoroth%253E%2B%255BLTC%255D.jpg",
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
    Death and Taxes.
    <br>
    <br>
    Make everything expensive while simultaniously reducing the costs of spells you cast. 
    If an oppenent manages to cast something, it can get countered or removed. 
    Get comfortable, this will be a slow grindy game.
    <br>
    <br>
    The win condition is the Rest in Peace and Helm of Obedience combo.
    This will deck out your oppenonts and they will lose when they draw from and empty deck.
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