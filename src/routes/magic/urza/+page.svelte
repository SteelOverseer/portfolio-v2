<script>
  import DeckList from "../DeckList.svelte";
  import cards from "../card-list.json"

  let commander = cards["urza-lord-high-artificer"]

  let creatures = [
    cards["spellskite"],
    cards["the-reality-chip"],
    cards["forensic-gadgeteer"],
    cards["cyberdrive-awakener"],
    cards["hullbreaker-horror"],
    cards["tidespout-tyrant"]
  ]

  let planeswalkers = [
    cards["narset-parter-of-veils"],
    cards["tezzeret-the-seeker"]
  ]

  let instants = [
    cards["pact-of-negation"],
    cards["an-offer-you-cant-refuse"],
    cards["brainstorm"],
    cards["chain-of-vapor"],
    cards["flusterstorm"],
    cards["march-of-swirling-mist"],
    cards["mental-misstep"],
    cards["mystical-tutor"],
    cards["swan-song"],
    cards["cyclonic-rift"],
    cards["dramatic-reversal"],
    cards["mana-drain"],
    cards["muddle-the-mixture"],
    cards["narsets-reversal"],
    cards["resculpt"],
    cards["fierce-guardianship"],
    cards["force-of-negation"],
    cards["whir-of-invention"],
    cards["paradoxical-outcome"],
    cards["force-of-will"],
    cards["dig-through-time"]
  ]

  let sorceries = [
    cards["gitaxian-probe"],
    cards["ponder"],
    cards["merchant-scroll"],
    cards["transmute-artifact"],
    cards["fabricate"],
    cards["solve-the-equation"],
    cards["windfall"],
    cards["recurring-insight"],
    cards["time-spiral"]
  ]

  let artifacts = [
    cards["chrome-mox"],
    cards["dark-sphere"],
    cards["everflowing-chalice"],
    cards["jeweled-amulet"],
    cards["jeweled-lotus"],
    cards["lotus-petal"],
    cards["mishras-bauble"],
    cards["mox-opal"],
    cards["tormods-crypt"],
    cards["aether-spellbomb"],
    cards["arcums-astrolabe"],
    cards["grafdiggers-cage"],
    cards["mana-vault"],
    cards["senseis-divining-top"],
    cards["grim-monolith"],
    cards["imposter-mech"],
    cards["isochron-scepter"],
    cards["sapphire-medallion"],
    cards["torpor-orb"],
    cards["winter-orb"],
    cards["crawlspace"],
    cards["mana-web"],
    cards["sculpting-steel"],
    cards["static-orb"],
    cards["trinisphere"],
    cards["mystic-forge"],
    cards["unwinding-clock"]
  ]

  let enchantments = [
    cards["mystic-remora"],
    cards["copy-artifact"],
    cards["counterbalance"],
    cards["power-artifact"],
    cards["back-to-basics"],
    cards["rhystic-study"]
  ]

  let island = cards["snow-covered-island"]
  island.quantity = 17

  let lands = [
    cards["urzas-saga"],
    cards["academy-ruins"],
    cards["ancient-tomb"],
    cards["blast-zone"],
    cards["cephalid-coliseum"],
    cards["emergence-zone"],
    cards["formori-vault"],
    cards["inventors-fair"],
    cards["mystic-sanctuary"],
    cards["otawara-soaring-city"],
    cards["saprazzan-skerry"],
    island
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
    How about no!
    <br>
    <br>
    We're taking control of the game with this one. Countering any threats and playing 0 cost to cheap artifacts
    that will generate mana with Urza in play.
    <br>
    <br>
    Once we have control we can win with the token urza generates or one of Cyberdrive Awakener, Hullbreaker Horror or Tidespout Tyrant.
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