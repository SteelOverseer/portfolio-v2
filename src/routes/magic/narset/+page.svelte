<script>
  import DeckList from "../DeckList.svelte";
  import cards from "../card-list.json"

  let commander = cards["narset-enlightened-master"]

  let creatures = [
    cards["dockside-extortionist"],
    cards["generator-servant"],
    cards["simian-spirit-guide"]
  ]

  let artifacts = [
    cards["jeweled-lotus"],
    cards["lions-eye-diamond"],
    cards["lotus-petal"],
    cards["mana-crypt"],
    cards["mox-diamond"],
    cards["mox-opal"],
    cards["mana-vault"],
    cards["senseis-divining-top"],
    cards["sol-ring"],
    cards["arcane-signet"],
    cards["grim-monolith"],
    cards["scroll-rack"],
    cards["strionic-resonator"],
    cards["thran-dynamo"]
  ]
  
  let sorceries = [
    cards["personal-tutor"],
    cards["armageddon"],
    cards["seize-the-day"],
    cards["supreme-verdict"],
    cards["temporal-manipulation"],
    cards["time-warp"],
    cards["waves-of-aggression"],
    cards["world-at-war"],
    cards["karns-temporal-sundering"],
    cards["part-the-waterveil"],
    cards["walk-the-aeons"],
    cards["alrunds-epiphany"],
    cards["fury-of-the-horde"],
    cards["temporal-mastery"],
    cards["beacon-of-tomorrows"],
    cards["expropriate"],
    cards["time-stretch"],
    cards["temporal-trespass"],
    cards["enter-the-infinate"],
    cards["rise-of-the-eldrazi"]
  ]

  let instants = [
    cards["pact-of-negation"],
    cards["brainstorm"],
    cards["enlightened-tutor"],
    cards["flusterstorm"],
    cards["mystical-tutor"],
    cards["path-to-exile"],
    cards["swan-song"],
    cards["counterspell"],
    cards["cyclonic-rift"],
    cards["mana-drain"],
    cards["narsets-reversal"],
    cards["disallow"],
    cards["dissipate"],
    cards["fierce-guardianship"],
    cards["force-of-negation"],
    cards["long-term-plans"],
    cards["render-silent"],
    cards["spell-crumple"],
    cards["cryptic-command"],
    cards["force-of-will"],
    cards["nexus-of-fate"]
  ]

  let planeswalkers = [
    cards["jace-wielder-of-mysteries"],
    cards["jace-the-mind-sculptor"]
  ]

  let enchantments = [
    cards["mystic-remora"],
    cards["need-for-speed"],
    cards["rhystic-study"],
    cards["thousand-year-storm"],
    cards["eldrazi-conscription"],
    cards["one-with-the-multiverse"],
    cards["omniscience"]
  ]
  
  let lands = [
    cards["urzas-saga"],
    cards["ancient-tomb"],
    cards["arid-mesa"],
    cards["cascade-bluffs"],
    cards["cavern-of-souls"],
    cards["city-of-brass"],
    cards["command-tower"],
    cards["crystal-vein"],
    cards["fiery-islet"],
    cards["flooded-strand"],
    cards["hall-of-the-bandit-lord"],
    cards["hallowed-fountain"],
    cards["mana-confluence"],
    cards["marsh-flats"],
    cards["maze-of-ith"],
    cards["misty-rainforest"],
    cards["mystic-gate"],
    cards["otawara-soaring-city"],
    cards["plateau"],
    cards["reflecting-pool"],
    cards["rogues-passage"],
    cards["rugged-prairie"],
    cards["scalding-tarn"],
    cards["sea-of-clouds"],
    cards["spectator-seating"],
    cards["steam-vents"],
    cards["sunbaked-canyon"],
    cards["temple-of-the-false-god"],
    cards["training-center"],
    cards["tundra"],
    cards["volcanic-island"],
    cards["windswept-heath"]
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