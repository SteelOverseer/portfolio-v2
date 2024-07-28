<script>
  import DeckList from "../DeckList.svelte";
  import cards from "../card-list.json"

  let commander = cards["grand-arbiter-augustin-iv"];

  let creatures = [
    cards["esper-sentinel"],
    cards["archivist-of-oghma"],
    cards["dauntless-dismantler"],
    cards["drannith-magistrate"],
    cards["grand-abolisher"],
    cards["lavinia-azorius-renegade"],
    cards["soulless-jailer"],
    cards["thalia-guardian-of-thraben"],
    cards["archon-of-emeria"],
    cards["aven-mindcensor"],
    cards["urza-lord-protector"],
    cards["linvala-keeper-of-silence"],
    cards["spelltithe-enforcer"],
    cards["consecrated-sphinx"]
  ]

  let instants = [
    cards["brainstorm"],
    cards["enlightened-tutor"],
    cards["flusterstorm"],
    cards["mystical-tutor"],
    cards["silence"],
    cards["swan-song"],
    cards["swords-to-plowshares"],
    cards["cyclonic-rift"],
    cards["mana-drain"],
    cards["mana-leak"],
    cards["muddle-the-mixture"],
    cards["fierce-guardianship"],
    cards["force-of-negation"],
    cards["force-of-will"]
  ]

  let sorceries = [
    cards["ponder"],
    cards["preordain"],
    cards["transmute-artifact"],
    cards["days-undoing"],
    cards["windfall"],
    cards["supreme-verdict"]
  ]

  let planeswalkers = [
    cards["dovin-hand-of-control"],
    cards["narset-parter-of-veils"],
    cards["teferi-time-raveler"],
    cards["teferi-hero-of-dominaria"],
    cards["tezzeret-the-seeker"]    
  ]
  
  let artifacts = [
    cards["jeweled-lotus"],
    cards["mox-diamond"],
    cards["mox-opal"],
    cards["mana-vault"],
    cards["senseis-divining-top"],
    cards["sol-ring"],
    cards["cursed-totem"],
    cards["grim-monolith"],
    cards["isochron-scepter"],
    cards["sapphire-medallion"],
    cards["sphere-of-resistance"],
    cards["talisman-of-progress"],
    cards["thorn-of-amethyst"],
    cards["torpor-orb"],
    cards["winter-orb"],
    cards["helm-of-obedience"],
    cards["god-pharaohs-statue"]
  ]

  let enchantments = [
    cards["land-tax"],
    cards["mystic-remora"],
    cards["blind-obedience"],
    cards["counterbalance"],
    cards["rest-in-peace"],
    cards["stasis"],
    cards["aura-of-silence"],
    cards["back-to-basics"],
    cards["propaganda"],
    cards["rhystic-study"],
    cards["smothering-tithe"],
    cards["trouble-in-pairs"]
  ]

  let island = cards["island"];
  island.quantity = 8;

  let plains = cards["plains"];
  plains.quantity = 6;

  let lands = [
    cards["academy-ruins"],
    cards["ancient-tomb"],
    cards["celestial-colonnade"],
    cards["command-tower"],
    cards["fabled-passage"],
    cards["flooded-strand"],
    cards["hall-of-heliods-generosity"],
    cards["hallowed-fountain"],
    cards["inventors-fair"],
    island,
    cards["maze-of-ith"],
    plains,
    cards["prahv-spires-of-order"],
    cards["prismatic-vista"],
    cards["rishadan-port"],
    cards["sea-of-clouds"],
    cards["strip-mine"],
    cards["tundra"],
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