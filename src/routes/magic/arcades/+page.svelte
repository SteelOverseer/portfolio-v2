<script>
  import DeckList from "../DeckList.svelte";
  import cards from "../card-list.json"

  let commander = cards["arcades-the-strategist"]

  let creatures = [
    cards["shield-sphere"],
    cards["perimeter-captain"],
    cards["walking-bulwark"],
    cards["wall-of-runes"],
    cards["crashing-drawbridge"],
    cards["flumph"],
    cards["jeskai-barricade"],
    cards["overgrown-battlement"],
    cards["stalwart-shield-bearers"],
    cards["sunscape-familiar"],
    cards["sylvan-caryatid"],
    cards["tetsuko-umezawa-fugitive"],
    cards["vine-trellis"],
    cards["wall-of-blossoms"],
    cards["wall-of-junk"],
    cards["wall-of-mulch"],
    cards["wall-of-omens"],
    cards["wall-of-roots"],
    cards["wall-of-shards"],
    cards["wall-of-tanglecord"],
    cards["axebane-guardian"],
    cards["carven-caryatid"],
    cards["drift-of-phantasms"],
    cards["hover-barrier"],
    cards["wall-of-denial"],
    cards["wall-of-frost"],
    cards["weathered-sentinels"],
    cards["shield-wall-sentinel"],
    cards["tree-of-redemption"],
    cards["wall-of-stolen-identity"],
    cards["wingmantle-chaplain"],
    cards["mnemonic-wall"],
    cards["zopandrel-hunger-dominus"] 
  ]

  let instants = [
    cards["swan-song"],
    cards["swords-to-plowshares"],
    cards["counterspell"],
    cards["cyclonic-rift"],
    cards["heroic-intervention"],
    cards["mana-drain"],
    cards["tower-defense"],
    cards["bar-the-door"],
    cards["beast-within"],
    cards["eerie-interlude"],
    cards["flawless-maneuver"],
    cards["ghostway"],
    cards["akromas-will"]
  ]

  let sorceries = [
    cards["retribution-of-the-meek"],
    cards["slaughter-the-strong"],
    cards["expel-the-interlopers"],
    cards["fell-the-mighty"],
    cards["last-march-of-the-ents"],
    cards["dusk-dawn"]
  ]

  let planeswalkers = [
    cards["huatli-the-suns-heart"],
    cards["teyo-geometric-tactician"]
  ]

  let artifacts = [
    cards["meekstone"],
    cards["sol-ring"],
    cards["chromatic-lantern"],
    cards["rammas-echor-ancient-shield"]
  ]

  let enchantments = [
    cards["assault-formation"],
    cards["brave-the-sands"],
    cards["aura-shards"],
    cards["high-alert"],
    cards["rhystic-study"],
    cards["stoneskin"],
    cards["aluren"],
    cards["court-of-ardenvale"]
  ]

  let forest = cards["forest"];
  forest.quantity = 2;

  let island = cards["island"];
  island.quantity = 3;

  let plains = cards["plains"];
  plains.quantity = 4;

  let lands = [
    cards["bountiful-promenade"],
    cards["breeding-pool"],
    cards["command-tower"],
    cards["flooded-grove"],
    cards["flooded-strand"],
    forest,
    cards["glacial-fortress"],
    cards["hallowed-fountain"],
    cards["hinterland-harbor"],
    island,
    cards["misty-rainforest"],
    cards["mystic-gate"],
    plains,
    cards["reflecting-pool"],
    cards["rejuvenating-springs"],
    cards["reliquary-tower"],
    cards["savannah"],
    cards["sea-of-clouds"],
    cards["sparas-headquarters"],
    cards["sunpetal-grove"],
    cards["temple-garden"],
    cards["tropical-island"],
    cards["tundra"],
    cards["windswept-heath"],
    cards["wooded-bastion"],
    cards["yavimaya-hollow"],
    cards["yavimaya-cradle-of-growth"]
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
    The best defense is the best offense.
    <br>
    <br>
    Walls are cheap to cast and have a large toughness, the drawbacks being they have 0 to little attack power and can't attack on their own.
    <br>
    <br>
    We build an army of walls and wait, eventually enabling them to attack with Arcades, Assault Formation or High Alert.
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