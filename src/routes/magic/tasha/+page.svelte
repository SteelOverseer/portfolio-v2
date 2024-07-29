<script>
  import DeckList from "../DeckList.svelte";
  import cards from "../card-list.json"

  let commander = cards["tasha-the-witch-queen"]

  let creatures = [
    cards["dauthi-voidwalker"],
    cards["gix-yawgmoth-praetor"],
    cards["halo-forager"],
    cards["nashi-moon-sages-scion"],
    cards["nightveil-specter"],
    cards["opposition-agent"],
    cards["thada-adel-acquisitor"],
    cards["thief-of-sanity"],
    cards["displacer-kitten"],
    cards["gonti-lord-of-luxury"],
    cards["grima-sarumans-footman"],
    cards["hostage-taker"],
    cards["intellect-devourer"],
    cards["xanathar-guild-kingpin"],
    cards["brainstealer-dragon"],
    cards["diluvian-primordial"],
    cards["elder-brain"]
  ]

  let planeswalkers = [
    cards["ashiok-nightmare-muse"]
  ]

  let instants = [
    cards["pact-of-negation"],
    cards["brainstorm"],
    cards["dark-ritual"],
    cards["mystical-tutor"],
    cards["swan-song"],
    cards["counterspell"],
    cards["cyclonic-rift"],
    cards["drown-in-the-loch"],
    cards["mana-drain"],
    cards["outrageous-robbery"],
    cards["siphon-insight"],
    cards["fierce-guardianship"],
    cards["force-of-negation"],
    cards["memory-plunder"],
    cards["force-of-will"]
  ]

  let sorceries = [
    cards["ponder"],
    cards["reanimate"],
    cards["demonic-tutor"],
    cards["maddening-cacophony"],
    cards["fractured-sanity"],
    cards["mnemonic-betrayal"],
    cards["praetors-grasp"],
    cards["toxic-deluge"],
    cards["windfall"],
    cards["arcane-heist"],
    cards["damnation"],
    cards["stolen-goods"],
    cards["talent-of-the-telepath"],
    cards["bribery"],
    cards["heartless-conscription"]
  ]

  let artifacts = [
    cards["jeweled-lotus"],
    cards["mana-crypt"],
    cards["mana-vault"],
    cards["sol-ring"],
    cards["arcane-signet"],
    cards["dimir-signet"],
    cards["fellwar-stone"],
    cards["grim-monolith"],
    cards["talisman-of-dominance"],
    cards["chaos-wand"],
    cards["thran-dynamo"]
  ]

  let enchantments = [
    cards["mystic-remora"],
    cards["animate-dead"],
    cards["lilianas-talent"],
    cards["cunning-rhetoric"],
    cards["king-narfis-betrayal"],
    cards["rhystic-study"],
    cards["court-of-locthwain"],
    cards["treachery"],
    cards["minds-dilation"]
  ]

  let island = cards["island"]
  island.quantity = 11

  let swamp = cards["swamp"]
  swamp.quantity = 11

  let lands = [
    cards["ancient-tomb"],
    cards["cabal-coffers"],
    cards["command-tower"],
    island,
    cards["morphic-pool"],
    cards["polluted-delta"],
    cards["prismatic-vista"],
    swamp,
    cards["underground-sea"],
    cards["urborg-tomb-of-yawgmoth"],
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
    My opponents always have really cool cards.
    <br>
    <br>
    This deck is all about stealing the cool stuff my opponents play.
    <br>
    <br>
    Whether it be the field or the graveyard, nothing is safe from being stolen by this deck!
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