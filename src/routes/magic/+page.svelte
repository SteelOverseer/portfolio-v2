<script>
import DeckList from "./DeckList.svelte";

/**
  * @typedef {Object} Face
  * @property {string} large
  * @property {string} art_crop
*/

/**
  * @typedef {Object} Card
  * @property {string} name
  * @property {number} quantity
  * @property {string} type_line
  * @property {Face} faces
*/

/** 
  * @typedef {Object} Deck
  * @property {string} deckName
  * @property {Card[]} commanders
  * @property {Card[]} mainboard
*/

/** @type {{ data: { decks: Deck[] } & import('./$types').PageData }} */
let { data } = $props();

const decks = $derived([...(data.decks || [])].sort((a, b) => a.deckName.localeCompare(b.deckName)))
let selectedDeck = $state(null)
let hoveredCard = $state(null);

const getCardsByType = (cards, type) => {
  return cards.filter(card => {
    if(card.error) {
      console.error(`${card.error}: ${card.name}`)
      return
    }

    // some cards have a land on the backside, i dont want them included in the land array
    if(type == 'land' && card.type_line?.includes('//') && card.type_line?.toLowerCase().includes('land')) {
      return
    }
    
    return card.type_line?.toLowerCase().includes(type)
  })
}

function handleHover(value) {
  hoveredCard = value;
}
</script>

<nav id="magic-nav">
  {#each decks as deck}
    <!-- will need to handle this better for partner commanders -->
    <button class="image-button" onclick={() => selectedDeck = deck} >
      {#if deck.commanders && deck.commanders.length > 0}
        <img 
          src={deck.commanders[0].faces?.[0]?.art_crop}
          alt={deck.commanders[0].name}
        >
      {/if}
    </button>
  {/each}
</nav>
<div id="magic-view">
  {#if selectedDeck == null}
    Select a commander to see the decklist!
  {:else}
    <div id="decklist">
      <DeckList 
        commander={selectedDeck.commanders[0]}
        creatures={getCardsByType(selectedDeck.mainboard, 'creature')}
        instants={getCardsByType(selectedDeck.mainboard, 'instant')}
        planeswalkers={getCardsByType(selectedDeck.mainboard, 'planeswalker')}
        sorceries={getCardsByType(selectedDeck.mainboard, 'sorcery')}
        artifacts={getCardsByType(selectedDeck.mainboard, 'artifact')}
        enchantments={getCardsByType(selectedDeck.mainboard, 'enchantment')}
        lands={getCardsByType(selectedDeck.mainboard, 'land')}
        showCardPreview={handleHover}
      />
    </div>
    <div id="card-window">
      {#if hoveredCard}
        <img 
          src={hoveredCard.faces[0].large}
          alt={hoveredCard.name}
        >
      {:else}
        Hover a card to see a preview
      {/if}
    </div>
  {/if}
</div>

<style lang="scss">
  #magic-nav {
    margin-top: 2rem;
    margin-bottom: 2rem;
   
    a:not(:last-child) {
      margin-right: 5px;
    }

    img {
      width: 150px;
      height: 110px;
    }

    .image-button {
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
    }
  }

  #magic-view {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  #card-window {
    width: 50%;
    
    img {
      width: 400px;
      height: auto;
    }
  }

  @media only screen and (max-width: 750px) {
    #magic-nav {
      width: 22.5rem;
    }
    #magic-view {     
      flex-direction: column-reverse;
    }
  }
</style>