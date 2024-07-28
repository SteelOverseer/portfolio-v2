<script>
  import DeckList from "../DeckList.svelte";
  import cards from "../card-list.json"

  let commander = cards["kwain-itinerant-meddleer"]
  
  let creatures = [
    cards["faerie-mastermind"],
    cards["kami-of-the-crescent-moon"],
    cards["prince-imrahil-the-fair"],
    cards["thassas-oracle"],
    cards["triskaidekaphile"],
    cards["laboratory-maniac"],
    cards["loran-of-the-third-path"],
    cards["alandra-sky-dreamer"],
    cards["heliod-the-radiant-dawn"],
    cards["the-council-of-four"],
    cards["consecrated-sphinx"]    
  ]

  let instants = [
    cards["pact-of-negation"],
    cards["brainstorm"],
    cards["enlightened-tutor"],
    cards["swan-song"],
    cards["swords-to-plowshares"],
    cards["arcane-denial"],
    cards["counterspell"],
    cards["cyclonic-rift"],
    cards["dovins-veto"],
    cards["mana-drain"],
    cards["vision-skeins"],
    cards["words-of-wisdom"],
    cards["fierce-guardianship"],
    cards["force-of-negation"],
    cards["teferis-protection"],
    cards["force-of-will"]
  ]

  let sorceries = [
    cards["minds-aglow"],
    cards["ponder"],
    cards["preordain"],
    cards["prosperity"],
    cards["windfall"],
    cards["supreme-verdict"],
    cards["approach-of-the-second-sun"],
    cards["sea-gate-restoration"]
  ]

  let planeswalkers = [
    cards["jace-beleren"],
    cards["jace-wielder-of-mysteries"],
    cards["teferi-temporal-pilgrim"]
  ]

  let artifacts = [
    cards["mana-crypt"],
    cards["mana-vault"],
    cards["sol-ring"],
    cards["arcane-signet"],
    cards["folio-of-fancies"],
    cards["howling-mine"],
    cards["talisman-of-progress"],
    cards["thought-vessel"],
    cards["temple-bell"],
    cards["font-of-mythos"],
    cards["otherworld-atlas"],
    cards["wedding-ring"],
    cards["alhammarrets-archive"],
    cards["vensers-journal"]
  ]

  let enchantments = [
    cards["mystic-remora"],
    cards["island-sanctuary"],
    cards["ominous-seas"],
    cards["rest-in-peace"],
    cards["dictate-of-kruphix"],
    cards["ghostly-prison"],
    cards["propaganda"],
    cards["psychic-corrosion"],
    cards["rhystic-study"],
    cards["smugglers-share"],
    cards["smothering-tithe"],
    cards["teferis-ageless-insight"],
    cards["sphere-of-safety"],
    cards["forced-fruition"],
    cards["mind-over-matter"]
  ]

  let island = cards["island"];
  island.quantity = 10;

  let plains = cards["plains"];
  plains.quantity = 8;

  let lands = [
    cards["ancient-tomb"],
    cards["command-tower"],
    cards["fabled-passage"],
    cards["flooded-strand"],
    cards["hall-of-heliods-generosity"],
    cards["hallowed-fountain"],
    cards["hengegate-pathway"],
    island,
    cards["mikokoro-center-of-the-sea"],
    cards["mystic-gate"],
    cards["mystic-sanctuary"],
    plains,
    cards["prismatic-vista"],
    cards["reliquary-tower"],
    cards["sea-of-clouds"],
    cards["tundra"]
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