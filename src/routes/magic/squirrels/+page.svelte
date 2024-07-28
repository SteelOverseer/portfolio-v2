<script>
  import DeckList from "../DeckList.svelte";
  import cards from "../card-list.json"

  let commander = cards["chatterfang-squirrel-general"]

  let creatures = [
    cards["gilded-goose"],
    cards["nested-shambler"],
    cards["ravenous-squirrel"],
    cards["blood-artist"],
    cards["gala-greeters"],
    cards["prosperous-inkeeper"],
    cards["squirrel-sovereign"],
    cards["zulaport-cutthroat"],
    cards["circle-of-dreams-druid"],
    cards["jaheira-friend-of-the-forest"],
    cards["scurry-oak"],
    cards["scute-swarm"],
    cards["squirrel-mob"],
    cards["tireless-provisioner"],
    cards["ivy-lane-denizen"],
    cards["pitiless-plunderer"],
    cards["toski-bearer-of-secrets"],
    cards["deep-forest-hermit"],
    cards["deranged-hermit"],
    cards["drey-keeper"],
    cards["tendershoot-dryad"],
    cards["nut-collector"],
    cards["old-gnawbone"],
    cards["craterhoof-behemoth"]
  ]

  let instants = [
    cards["noxious-revival"],
    cards["vampiric-tutor"],
    cards["veil-of-summer"],
    cards["worldly-tutor"],
    cards["abrupt-decay"],
    cards["assassins-trophy"],
    cards["deadly-dispute"],
    cards["heroic-intervention"],
    cards["verdant-command"],
    cards["chord-of-calling"],
    cards["deadly-rollick"],
    cards["force-of-vigor"],
    cards["second-harvest"]
  ]

  let sorceries = [
    cards["chatter-of-the-squirrel"],
    cards["awaken-the-woods"],
    cards["chatterstorm"],
    cards["demonic-tutor"],
    cards["diabolic-intent"],
    cards["finale-of-devastation"],
    cards["acorn-harvest"],
    cards["natural-order"],
    cards["parallel-evolution"]
  ]

  let planeswalkers = [
    cards["lilana-dreadhorde-general"],
    cards["nissa-ascended-animist"]
  ]

  let artifacts = [
    cards["chrome-mox"],
    cards["jeweled-lotus"],
    cards["skullclamp"],
    cards["sol-ring"],
    cards["ashnods-altar"],
    cards["chitterspitter"],
    cards["phyrexian-altar"],
    cards["bootleggers-stash"]
  ]

  let enchantments = [
    cards["squirrel-sanctuary"],
    cards["bitterblossom"],
    cards["cryptolith-rite"],
    cards["earthcraft"],
    cards["sylvan-anthem"],
    cards["sylvan-library"],
    cards["the-meathook-massacre"],
    cards["black-market-connections"],
    cards["squirrel-nest"],
    cards["grave-pact"],
    cards["parallel-lives"],
    cards["doubling-season"]
  ]

  let forest = cards["forest"];
  forest.quantity = 11

  let swamp = cards["swamp"];
  swamp.quantity = 8

  let lands = [
    cards["ancient-tomb"],
    cards["bayou"],
    cards["boseiju-who-endures"],
    cards["darkbore-pathway"],
    forest,
    cards["gaeas-cradle"],
    cards["overgrown-tomb"],
    cards["phyrexian-tower"],
    swamp,
    cards["swarmyard"],
    cards["undergrowth-stadium"],
    cards["urborg-tomb-of-yawgmoth"],
    cards["verdant-catacombs"],
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
    It's about to get <i>nutty</i>.
    <br>
    <br>
    We're building an army of squirrels and overwhelming our opponents with sheer squirrel power!
    <br>
    <br>
    Once the squirrels get going, they're hard to stop.
    With Chatterfang on the field the tokens keep coming, 
    and when combined with Pitiless Plunderer theres an infinite combo that 
    enables other cards to trigger, like blood artist, to win us the game.
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