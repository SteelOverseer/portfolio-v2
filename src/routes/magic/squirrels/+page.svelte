<script>
  import DeckList from "../DeckList.svelte";

  let commander = {
    name: "Chatterfang, Squirrel General",
    source: "",
    qty: 1
  }

  let creatures = [
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
  ]

  let instants = [

  ]

  let sorceries = [
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
  ]

  let planeswalkers = [

  ]

  let artifacts = [
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
    {
      name: "",
      source: "",
      qty: 1
    },
  ]

  let enchantments = [

  ]

  let lands = [

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
    Everyone gets to draw!
    <br>
    <br>
    Sit back, relax, and let everyone draw some cards!
    <br>
    <br>
    This deck is called group hug and it does so in the form of letting everyone draw plenty of cards!
    However, the hug gets tighter and tighter as deck counts get lower and lower. 
    No problem here though, we have cards that say we win if we have no more cards in our library.
    And, while everyone was having fun drawing cards, we've built a defense that's pretty tough to get around.
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