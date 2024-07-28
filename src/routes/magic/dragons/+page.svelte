<script>
  import DeckList from "../DeckList.svelte";
  import cards from "../card-list.json"

  let commander = cards["the-ur-dragon"]

  let creatures = [
    cards["dragonlords-servant"],
    cards["dragonspeaker-shaman"],
    cards["rivaz-of-the-claw"],
    cards["sarkhan-soul-aflame"],
    cards["decadent-dragon"],
    cards["goldspan-dragon"],
    cards["rith-liberated-primeval"],
    cards["scalelord-reckoner"],
    cards["scion-of-the-ur-dragon"],
    cards["scourge-of-valkas"],
    cards["terror-of-the-peaks"],
    cards["zurgo-and-ojutai"],
    cards["ancient-copper-dragon"],
    cards["dragonlord-dromoka"],
    cards["hellkite-courser"],
    cards["lathliss-dragon-queen"],
    cards["miirym-sentinel-wyrm"],
    cards["ramos-dragon-engine"],
    cards["silumgar-the-drifting-death"],
    cards["two-headed-hellkite"],
    cards["ancient-gold-dragon"],
    cards["atarka-world-render"],
    cards["balefire-dragon"],
    cards["bladewing-the-risen"],
    cards["klauth-unriveled-ancient"],
    cards["old-gnawbone"],
    cards["tiamat"],
    cards["ancient-silver-dragon"],
    cards["utvara-hellkite"],
    cards["blast-furnace-hellkite"],
    cards["scion-of-draco"]
  ]

  let instants = [
    cards["assassins-trophy"],
    cards["cyclonic-rift"],
    cards["heroic-intervention"],
    cards["anguished-unmaking"],
    cards["utter-end"]
  ]

  let sorceries = [
    cards["demonic-tutor"],
    cards["farseek"],
    cards["three-visits"],
    cards["skyshroud-claim"],
    cards["crux-of-fate"],
    cards["patriarchs-bidding"],
    cards["ruinous-ultimatum"]
  ]

  let planeswalkers = [
    cards["sarkhan-fireblood"],
    cards["sivitri-dragon-master"],
    cards["sarkhan-unbroken"],
    cards["sarkhan-the-masterless"] 
  ]

  let artifacts = [
    cards["sol-ring"],
    cards["chromatic-lantern"],
    cards["commanders-sphere"],
    cards["dragons-hoard"],
    cards["heralds-horn"],
    cards["urzas-incubator"],
    cards["belbes-portal"],
    cards["gilded-lotus"],
    cards["the-great-henge"]
  ]

  let enchantments = [
    cards["dragon-tempest"],
    cards["steely-resolve"],
    cards["sylvan-library"],
    cards["up-the-beanstalk"],
    cards["garruks-uprising"],
    cards["rhythm-of-the-wild"],
    cards["temur-ascendancy"] 
  ]

  let lands = [
    cards["arid-mesa"],
    cards["badlands"],
    cards["bayou"],
    cards["blood-crypt"],
    cards["bloodstained-mire"],
    cards["breeding-pool"],
    cards["cavern-of-souls"],
    cards["command-tower"],
    cards["crucible-of-the-spirit-dragon"],
    cards["flooded-strand"],
    cards["godless-shrine"],
    cards["haven-of-the-spirit-dragon"],
    cards["marsh-flats"],
    cards["misty-rainforest"],
    cards["overgrown-tomb"],
    cards["path-of-ancestry"],
    cards["plateau"],
    cards["polluted-delta"],
    cards["reflecting-pool"],
    cards["sacred-foundry"],
    cards["savannah"],
    cards["scalding-tarn"],
    cards["scrubland"],
    cards["steam-vents"],
    cards["stomping-ground"],
    cards["taiga"],
    cards["temple-garden"],
    cards["tropical-island"],
    cards["tundra"],
    cards["unclaimed-territory"],
    cards["underground-sea"],
    cards["volcanic-island"],
    cards["watery-grave"],
    cards["windswept-heath"],
    cards["wooded-foothills"]
  ]

  let battles = [
    cards["invasion-of-tarkir"]
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
    battles={battles}
  />
</div>
<div id="gameplan">
  <h3 style="margin: 0px;">The Gameplan:</h3>
  <hr>
  <p>
    I like dragons.
    <br>
    <br>
    The gameplan is straightforward. Mana ramp, play big creatures, turn them sideways.
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