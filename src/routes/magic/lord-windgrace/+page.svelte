<script>
  import DeckList from "../DeckList.svelte";
  import cards from "../card-list.json"

  let commander = cards["lord-windgrace"]

  let creatures = [
    cards["deathrite-shaman"],
    cards["elvish-reclaimer"],
    cards["orcish-lumberjack"],
    cards["collector-ouphe"],
    cards["lotus-cobra"],
    cards["azusa-lost-but-seeking"],
    cards["dryad-of-the-ilysian-grove"],
    cards["eternal-witness"],
    cards["nissa-resurgent-animist"],
    cards["ramunap-excavator"],
    cards["scute-swarm"],
    cards["tireless-provisioner"],
    cards["blossoming-tortoise"],
    cards["oracle-of-mul-daya"],
    cards["soul-of-windgrace"],
    cards["world-shaper"],
    cards["the-gitrog-monster"],
    cards["titania-protector-of-argoth"],
    cards["ancient-greenwarden"],
    cards["avenger-of-zendikar"],
    cards["cultivator-colossus"],
    cards["omnath-locus-of-rage"]
  ]

  let planeswalkers = [
    cards["wrenn-and-six"],
    cards["wrenn-and-realmbreaker"],
    cards["wrenn-and-seven"]
  ]

  let instants = [
    cards["crop-rotation"],
    cards["vampiric-tutor"],
    cards["veil-of-summer"],
    cards["worldly-tutor"],
    cards["abrupt-decay"],
    cards["assassins-trophy"],
    cards["deflecting-swat"],
    cards["realms-uncharted"],
    cards["force-of-vigor"]
  ]

  let sorceries = [
    cards["green-suns-zenith"],
    cards["awaken-the-woods"],
    cards["demonic-tutor"],
    cards["explore"],
    cards["life-from-the-loam"],
    cards["sylvan-scrying"],
    cards["torment-of-hailfire"],
    cards["worldsouls-rage"],
    cards["toxic-deluge"],
    cards["damnation"],
    cards["scapeshift"],
    cards["splendid-reclamation"],
    cards["reshape-the-earth"]
  ]

  let artifacts = [
    cards["jeweled-lotus"],
    cards["mana-crypt"],
    cards["mox-diamond"],
    cards["zuran-orb"],
    cards["amulet-of-vigor"],
    cards["expedition-map"],
    cards["sol-ring"],
    cards["crucible-of-worlds"],
    cards["conduit-of-worlds"]
  ]

  let enchantments = [
    cards["burgeoning"],
    cards["exploration"],
    cards["prismatic-omen"],
    cards["squandered-resources"],
    cards["sylvan-library"],
    cards["valakut-exploration"]
  ]

  let lands = [
    cards["ancient-tomb"],
    cards["argoth-sanctum-of-nature"],
    cards["arid-mesa"],
    cards["badlands"],
    cards["bayou"],
    cards["blood-crypt"],
    cards["bloodstained-mire"],
    cards["bojuka-bog"],
    cards["boseiju-who-endures"],
    cards["boseiju-who-shelters-all"],
    cards["cabal-coffers"],
    cards["dakmor-salvage"],
    cards["dark-depths"],
    cards["echoing-deeps"],
    cards["field-of-the-dead"],
    cards["glacial-chasm"],
    cards["horizon-of-progress"],
    cards["marsh-flats"],
    cards["maze-of-ith"],
    cards["misty-rainforest"],
    cards["overgrown-tomb"],
    cards["polluted-delta"],
    cards["scalding-tarn"],
    cards["stomping-ground"],
    cards["strip-mine"],
    cards["taiga"],
    cards["takenuma-abandoned-mire"],
    cards["thespians-stage"],
    cards["urborg-tomb-of-yawgmoth"],
    cards["valakut-the-molten-pinnacle"],
    cards["verdant-catacombs"],
    cards["vesuva"],
    cards["wasteland"],
    cards["windswept-heath"],
    cards["wooded-foothills"],
    cards["yavimaya-cradle-of-growth"],
    cards["ziatoras-proving-ground"]
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
    (regally) LORD WINDGRACE!
    <br>
    <br>
    Landfall is the name of the game.
    <br>
    <br>
    The aim of the game is to get multiple landfall triggers in a single turn, generating advantage
    and finally winning with Valakut the Molten Pinnacle or Field of the Dead.
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