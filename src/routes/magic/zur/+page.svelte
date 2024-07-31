<script>
  import DeckList from "../DeckList.svelte";
  import cards from "../card-list.json"

  let commander = cards["zur-the-enchanter"]

  let creatures = [
    cards["esper-sentinel"],
    cards["dauntless-dismantler"],
    cards["dauthi-voidwalker"],
    cards["grand-abolisher"],
    cards["kor-spiritdancer"],
    cards["sram-senior-edificer"],
    cards["auramancer"],
    cards["eidolon-of-countless-battles"],
    cards["eriette-of-the-charmed-apple"],
    cards["hanna-ships-navigator"],
    cards["opposition-agent"]
  ]

  let instants = [
    cards["pact-of-negation"],
    cards["an-offer-you-cant-refuse"],
    cards["brainstorm"],
    cards["enlightened-tutor"],
    cards["swan-song"],
    cards["swords-to-plowshares"],
    cards["counterspell"],
    cards["cyclonic-rift"],
    cards["dovins-veto"],
    cards["mana-drain"],
    cards["fierce-guardianship"],
    cards["force-of-negation"],
    cards["teferis-protection"],
    cards["force-of-will"]
  ]

  let sorceries = [
    cards["demonic-tutor"],
    cards["beseech-the-mirror"],
    cards["replenish"],
    cards["winds-of-rath"]
  ]

  let artifacts = [
    cards["chrome-mox"],
    cards["lotus-petal"],
    cards["mana-crypt"],
    cards["mox-diamond"],
    cards["senseis-divining-top"],
    cards["sol-ring"],
    cards["talisman-of-dominance"],
    cards["talisman-of-progress"]
  ]

  let enchantments = [
    cards["aqueous-form"],
    cards["combat-research"],
    cards["ethereal-armor"],
    cards["hyena-umbra"],
    cards["kayas-ghostform"],
    cards["all-that-glitters"],
    cards["blind-obedience"],
    cards["darksteel-mutation"],
    cards["daybreak-coronet"],
    cards["diplomatic-immunity"],
    cards["greater-auramancy"],
    cards["phyresis"],
    cards["spirit-mantle"],
    cards["staggering-insight"],
    cards["aura-of-silence"],
    cards["banishing-light"],
    cards["battle-mastery"],
    cards["curators-ward"],
    cards["estrids-invocation"],
    cards["gift-of-immortality"],
    cards["grasp-of-fate"],
    cards["imprisoned-in-the-moon"],
    cards["mirrormade"],
    cards["necropotence"],
    cards["rhystic-study"],
    cards["rule-of-law"],
    cards["seal-from-existence"],
    cards["shielded-by-faith"],
    cards["solitary-confinement"],
    cards["steel-of-the-godhead"]
  ]

  let plains = cards["plains"]
  plains.quantity = 5

  let island = cards["island"]
  island.quantity = 4

  let swamp = cards["swamp"]
  swamp.quantity = 4

  let lands = [
    cards["command-tower"],
    cards["drowned-catacomb"],
    cards["flooded-strand"],
    cards["glacial-fortress"],
    cards["godless-shrine"],
    cards["hall-of-heliods-generosity"],
    cards["hallowed-fountain"],
    island,
    cards["isolated-chapel"],
    cards["marsh-flats"],
    cards["morphic-pool"],
    plains,
    cards["polluted-delta"],
    cards["raffines-tower"],
    cards["scrubland"],
    cards["sea-of-clouds"],
    cards["serras-sanctum"],
    swamp,
    cards["tundra"],
    cards["underground-sea"],
    cards["vault-of-champions"],
    cards["watery-grave"]
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
    Enchantment?
    <br>
    <br>
    The plan is to get Zur down and start swinging with him.
    With his ability to tutor out enchantments, we can quickly gain an advantage in the game 
    either by finding answers to problems or powering Zur himself up.
    <br>
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