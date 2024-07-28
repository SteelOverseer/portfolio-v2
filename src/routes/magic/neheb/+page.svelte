<script>
  import DeckList from "../DeckList.svelte";
  import cards from "../card-list.json"

  let commander = cards["neheb-the-eternal"]

  let creatures = [
    cards["dockside-extortionist"],
    cards["birgi-god-of-storytelling"],
    cards["magus-of-the-moon"],
    cards["magus-of-the-wheel"],
    cards["leyline-tyrant"],
    cards["neheb-dreadhorde-champion"],
    cards["ojer-axonil-deepest-might"],
    cards["solphim-mayhem-dominus"],
    cards["tectonic-giant"],
    cards["torbran-thane-of-the-red-fell"],
    cards["urabrask"],
    cards["bonehoard-dracosaur"],
    cards["heartless-hidetsugu"],
    cards["knollspine-dragon"]
  ]

  let artifacts = [
    cards["chrome-mox"],
    cards["everflowing-chalice"],
    cards["jeweled-lotus"],
    cards["mana-crypt"],
    cards["mox-diamond"],
    cards["mana-vault"],
    cards["sol-ring"],
    cards["grim-monolith"],
    cards["lightning-greaves"],
    cards["ruby-medallion"],
    cards["cryptolith-fragment"],
    cards["sword-of-fire-and-ice"],
    cards["memory-jar"],
    cards["pyromancers-goggles"]
  ]

  let sorceries = [
    cards["faithless-looting"],
    cards["gamble"],
    cards["rolling-earthquake"],
    cards["vandalblast"],
    cards["crackle-with-power"],
    cards["flame-rift"],
    cards["jayas-immolating-inferno"],
    cards["acidic-soil"],
    cards["jeskas-will"],
    cards["slagstorm"],
    cards["wheel-of-fortune"],
    cards["wheel-of-misfortune"],
    cards["fiery-confluence"],
    cards["ignite-the-future"],
    cards["past-in-flames"],
    cards["seize-the-day"],
    cards["chandras-ignition"],
    cards["reforge-the-soul"],
    cards["insult-injury"],
    cards["apex-of-power"]
  ]

  let instants = [
    cards["pyroblast"],
    cards["red-elemental-blast"],
    cards["comet-storm"],
    cards["commune-with-lava"],
    cards["fork"],
    cards["price-of-progress"],
    cards["reverberate"],
    cards["tibalts-trickery"],
    cards["chaos-warp"],
    cards["deflecting-swat"],
    cards["delayed-blast-fireball"],
    cards["seething-song"],
    cards["valakut-awakening"]
  ]

  let enchantments = [
    cards["underworld-breach"],
    cards["virtue-of-courage"],
    cards["aggravated-assault"],
    cards["blood-moon"],
    cards["repercussion"],
    cards["pyrohemia"],
    cards["fiery-emancipation"]
  ]
  
  let planeswalkers = [
    cards["chandra-torch-of-defiance"]
  ]

  let snowCoveredMountain = cards["snow-covered-mountain"];
  snowCoveredMountain.quantity = 22;
  let lands = [
    cards["ancient-tomb"],
    cards["arid-mesa"],
    cards["bloodstained-mire"],
    cards["nykthos-shrine-to-nyx"],
    cards["prismatic-vista"],
    cards["scalding-tarn"],
    snowCoveredMountain,
    cards["valakut-the-molten-pinnacle"],
    cards["wooded-foothills"]
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
 #gameplan {
    width: 80%;
  }

 hr {
  width: 75%;
  margin-left: 0px;
 }
</style>