<script>
  import DeckList from "../DeckList.svelte";
  import cards from "../card-list.json"

  let commander = cards["lin-sivvi-defiant-hero"]

  let creatures = [
    cards["children-of-korlis"],
    cards["ramosian-sergeant"],
    cards["amrou-scout"],
    cards["defiant-falcon"],
    cards["knight-of-the-holy-nimbus"],
    cards["ramosian-lieutenant"],
    cards["whipcorder"],
    cards["amrou-seekers"],
    cards["bloodline-pretender"],
    cards["defiant-vanguard"],
    cards["lawbringer"],
    cards["leonin-lightbringer"],
    cards["lightbringer"],
    cards["mirror-entity"],
    cards["nightwind-glider"],
    cards["outrider-en-kor"],
    cards["ramosian-captain"],
    cards["shield-dancer"],
    cards["task-force"],
    cards["thermal-glider"],
    cards["zealot-il-vec"],
    cards["ballista-squad"],
    cards["cho-manno-revolutionary"],
    cards["pious-warrior"],
    cards["ramosian-commander"],
    cards["ramosian-revivalist"],
    cards["rappeling-scouts"],
    cards["reveille-squad"],
    cards["ramosian-sky-marshal"],
    cards["cho-arrim-bruiser"]
  ]

  let instants = [
    cards["enlightened-tutor"],
    cards["path-to-exile"],
    cards["swords-to-plowshares"],
    cards["tithe"],
    cards["crib-swap"],
    cards["flawless-maneuver"],
    cards["teferis-protection"],
    cards["akromas-will"]
  ]

  let sorceries = [
    cards["ravnica-at-war"],
    cards["wrath-of-god"],
    cards["hallowed-burial"],
    cards["mass-calcify"]
  ]

  let artifacts = [
    cards["jeweled-lotus"],
    cards["mana-crypt"],
    cards["mana-vault"],
    cards["sol-ring"],
    cards["grim-monolith"],
    cards["illusionists-bracers"],
    cards["scroll-rack"],
    cards["basalt-monolith"],
    cards["halo-fountain"],
    cards["heartstone"],
    cards["rings-of-brighthearth"],
    cards["sword-of-feast-and-famine"],
    cards["thousand-year-elixir"],
    cards["maskwood-nexus"],
    cards["nyx-lotus"],
    cards["thran-dynamo"],
    cards["coat-of-arms"]
  ]

  let enchantments = [
    cards["land-tax"],
    cards["always-watching"],
    cards["bound-in-silence"],
    cards["pariah"],
    cards["tocasias-welcome"],
    cards["smothering-tithe"],
    cards["cathars-crusade"],
    cards["true-conviction"]
  ]

  let plains = cards["plains"]
  plains.quantity = 19

  let lands = [
    cards["ancient-tomb"],
    cards["cavern-of-souls"],
    cards["eiganjo-seat-of-the-empire"],
    cards["emeria-the-sky-ruin"],
    cards["high-market"],
    cards["kor-haven"],
    cards["miren-the-moaning-well"],
    cards["mistveil-plains"],
    cards["nykthos-shrine-to-nyx"],
    plains,
    cards["strip-mine"],
    cards["temple-of-the-false-god"],
    cards["terrain-generator"],
    cards["wasteland"]
  ]
</script>

<div id="decklist">
  <h3 style="margin: 0px;">The Deck:</h3>
  <hr>
  <DeckList 
    commander={commander}
    creatures={creatures}
    instants={instants}
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
    Resistance is <i>not</i> futile.
    <br>
    <br>
    Rebels are resiliant and often overlooked, and this is reflected in the game plan.
    <br>
    <br>
    Just one rebel needs to get onto the board and start tutoring more rebels.
    Once there's a critical mass of rebels and available mana, Mirror Entity hits play and wins us the game.
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