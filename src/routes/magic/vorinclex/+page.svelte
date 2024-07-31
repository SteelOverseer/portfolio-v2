<script>
  import DeckList from "../DeckList.svelte";
  import cards from "../card-list.json"

  let commander = cards["vorinclex-monstrous-raider"]

  let creatures = [
    cards["delighted-halfling"],
    cards["elvish-mystic"],
    cards["fyndhorn-elves"],
    cards["llanowar-elves"],
    cards["benevolent-hydra"],
    cards["gyre-sage"],
    cards["incubation-druid"],
    cards["primordial-hydra"],
    cards["scavenging-ooze"],
    cards["arwen-weaver-of-hope"],
    cards["champion-of-lambholt"],
    cards["eternal-witness"],
    cards["evolution-sage"],
    cards["kami-of-whispered-hopes"],
    cards["kodama-of-the-west-tree"],
    cards["managorger-hydra"],
    cards["rishkar-peema-renegade"],
    cards["beast-whisperer"],
    cards["forgotten-ancient"],
    cards["renata-called-to-the-hunt"],
    cards["defiler-of-vigor"],
    cards["kalonian-hydra"],
    cards["loyal-guardian"],
    cards["vorinclex"],
    cards["vigor"],
    cards["ancient-bronze-dragon"],
    cards["avenger-of-zendikar"],
    cards["craterhoof-behemoth"]
  ]

  let planeswalkers = [
    cards["garruk-unleashed"],
    cards["garruk-primal-hunter"],
    cards["nissa-who-shakes-the-world"],
    cards["vivien-reid"],
    cards["garruk-caller-of-beasts"],
    cards["ugin-the-spirit-dragon"]
  ]

  let instants = [
    cards["natures-claim"],
    cards["snakeskin-veil"],
    cards["veil-of-summer"],
    cards["worldly-tutor"],
    cards["heroic-intervention"],
    cards["beast-within"],
    cards["inspiring-call"]
  ]

  let sorceries = [
    cards["green-suns-zenith"],
    cards["natures-lore"],
    cards["three-visits"],
    cards["unnatural-restoration"],
    cards["cultivate"],
    cards["kodamas-reach"],
    cards["triumph-of-the-hordes"],
    cards["virtue-of-strength"]
  ]

  let artifacts = [
    cards["jeweled-lotus"],
    cards["sol-ring"],
    cards["the-millennium-calendar"],
    cards["the-ozolith"],
    cards["emerald-medallion"],
    cards["lightning-greaves"],
    cards["ozolith-the-shattered-spire"],
    cards["sword-of-truth-and-justice"],
    cards["the-great-henge"]
  ]

  let enchantments = [
    cards["hardened-scales"],
    cards["sylvan-library"],
    cards["branching-evolution"],
    cards["court-of-garenbrig"],
    cards["tribute-to-the-world-tree"],
    cards["guardian-project"],
    cards["asceticism"],
    cards["doubling-season"]
  ]

  let forest = cards["forest"]
  forest.quanity = 25

  let lands = [
    cards["boseiju-who-endures"],
    cards["castle-garenbrig"],
    forest,
    cards["gaeas-cradle"],
    cards["karns-bastion"],
    cards["nykthos-shrine-to-nyx"],
    cards["oran-rief-the-vastwood"],
    cards["war-room"],
    cards["yavimaya-hollow"]
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
    planeswalkers={planeswalkers}
    lands={lands}
  />
</div>
<div id="gameplan">
  <h3 style="margin: 0px;">The Gameplan:</h3>
  <hr>
  <p>
    +1/+1 counters go <i>brrrrrrr</i>
    <br>
    <br>
    This deck is all about getting big creatures on the board fast and making them bigger with +1/+1 counters.
    <br>
    <br>
    With this, we trample over our opponents. It doesn't get much more green than that.
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