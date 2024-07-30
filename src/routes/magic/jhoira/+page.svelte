<script>
  import DeckList from "../DeckList.svelte";
  import cards from "../card-list.json"

  let commander = cards["jhoira-of-the-ghitu"]

  let creatures = [
    cards["rift-elemental"],
    cards["timebender"],
    cards["dockside-extortionist"],
    cards["jhoiras-timebug"],
    cards["shivan-sand-mage"],
    cards["consecrated-sphinx"],
    cards["jin-gitaxias-progress-tyrant"],
    cards["ancient-silver-dragon"],
    cards["sphinx-of-the-second-sun"],
    cards["void-winnower"],
    cards["flayer-of-loyalties"],
    cards["jin-gitaxias-core-augur"],
    cards["kozilek-butcher-of-truth"],
    cards["kozilek-the-great-distortion"],
    cards["ulamog-the-ceaseless-hunger"],
    cards["ulamog-the-infinite-gyre"],
    cards["blightsteel-colossus"],
    cards["it-that-betrays"],
    cards["emrakul-the-promised-end"]
  ]

  let artifacts = [
    cards["chrome-mox"],
    cards["jeweled-lotus"],
    cards["mana-crypt"],
    cards["sol-talisman"],
    cards["mana-vault"],
    cards["senseis-divining-top"],
    cards["sol-ring"],
    cards["grim-monolith"],
    cards["isochron-scepter"],
    cards["lightning-greaves"],
    cards["portal-to-phyrexia"]
  ]

  let sorceries = [
    cards["ancestral-vision"],
    cards["show-and-tell"],
    cards["wheel-of-fortune"],
    cards["temporal-manipulation"],
    cards["time-warp"],
    cards["jokulhaups"],
    cards["time-spiral"],
    cards["temporal-mastery"],
    cards["call-forth-the-tempest"],
    cards["obliterate"],
    cards["blasphemous-act"],
    cards["expropriate"],
    cards["time-stretch"],
    cards["rise-of-the-eldrazi"]
  ]

  let instants = [
    cards["pact-of-negation"],
    cards["an-offer-you-cant-refuse"],
    cards["clockspinning"],
    cards["mystical-tutor"],
    cards["suspend"],
    cards["swan-song"],
    cards["timecrafting"],
    cards["counterspell"],
    cards["cyclonic-rift"],
    cards["fury-charm"],
    cards["mana-drain"],
    cards["deflecting-swat"],
    cards["fierce-guardianship"],
    cards["force-of-negation"],
    cards["force-of-will"],
    cards["nexus-of-fate"]
  ]

  let enchantments = [
    cards["mystic-remora"],
    cards["passionate-archaeologist"],
    cards["paradox-haze"],
    cards["rhystic-study"],
    cards["one-with-the-multiverse"],
    cards["omniscience"]
  ]

  let planeswalkers = [
    cards["ugin-the-spirit-dragon"]
  ]

  let island = cards["island"]
  island.quantity = 11

  let mountain = cards["mountain"]
  mountain.quantity = 10

  let lands = [
    cards["ancient-tomb"],
    cards["command-tower"],
    island,
    mountain,
    cards["otawara-soaring-city"],
    cards["riverglide-pathway"],
    cards["scalding-tarn"],
    cards["shivan-reef"],
    cards["steam-vents"],
    cards["stormcarved-coast"],
    cards["sulfur-falls"],
    cards["training-center"],
    cards["volcanic-island"]
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
    What turn is it again?
    <br>
    <br>
    Jhoira wants to be on the board as soon as possible with some mana to spare.
    We're using her ability to suspend the big spells we have in hand that have no business seeing the board
    as soon as they're going to be played.
    <br>
    <br>
    The pressure will be on the opponents as the time counters tick down, and we'll be speeding
    the process up with the cards in the deck that manipulate time counters.
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