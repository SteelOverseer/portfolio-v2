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
let cardPreview = $state(null)
let flipped = $state(false)
let activeMobileCard = $state(null);
let mobileFlip = $state(0)

let commanders = $derived(selectedDeck?.commanders || null);  
let creatures = $derived(selectedDeck ? getCardsByType(selectedDeck.mainboard, 'creature') : []);
let instants = $derived(selectedDeck ? getCardsByType(selectedDeck.mainboard, 'instant') : []);
let planeswalkers = $derived(selectedDeck ? getCardsByType(selectedDeck.mainboard, 'planeswalker') : []);
let sorceries = $derived(selectedDeck ? getCardsByType(selectedDeck.mainboard, 'sorcery') : []);
let artifacts = $derived(selectedDeck ? getCardsByType(selectedDeck.mainboard, 'artifact').filter(c => !c.type_line.toLowerCase().includes('creature')) : []);
let enchantments = $derived(selectedDeck ? getCardsByType(selectedDeck.mainboard, 'enchantment').filter(c => !c.type_line.toLowerCase().includes('creature')) : []);
let lands = $derived(selectedDeck ? getCardsByType(selectedDeck.mainboard, 'land').filter(c => !c.type_line.toLowerCase().includes('creature')) : []);

const getCardsByType = (cards, type) => {
  return cards.filter(card => {
    if(card.error) {
      console.error(`${card.error}: ${card.name}`)
      return
    }

    const cardTypes = card.type_line?.split(' // ')
    const cardType = cardTypes[0].toLowerCase()
    
    return cardType.includes(type)
  })
}

const handleHover = (value) => {
  hoveredCard = value;
  flipped = false
  cardPreview = hoveredCard.faces[0].large;
}

const rotateCard = () => {
  if (window.innerWidth <= 800) {
    mobileFlip = 1
    activeMobileCard = hoveredCard
    return;
  }

  flipped = !flipped
  
  if (flipped) {
    cardPreview = hoveredCard.faces[1].large;
  }
  else {
    cardPreview = hoveredCard.faces[0].large;
  }
}

const handleCardClick = (card) => {
  if (window.innerWidth <= 800) {
    activeMobileCard = card;
  }
}

</script>

<nav id="magic-nav">
  {#each decks as deck}
    <button class="image-button" onclick={() => selectedDeck = deck} >
      {#if deck.commanders && deck.commanders.length > 0}
        {#if deck.commanders.length >= 2}
          <div class="partner-split-container">
            <img 
              class="partner-primary"
              src={deck.commanders[0].faces?.[0]?.art_crop}
              alt={deck.commanders[0].name}
            >
            <img 
              class="partner-secondary"
              src={deck.commanders[1].faces?.[0]?.art_crop}
              alt={deck.commanders[1].name}
            >
          </div>
        {:else}
          <img 
            src={deck.commanders[0].faces?.[0]?.art_crop}
            alt={deck.commanders[0].name}
          >
        {/if}
      {/if}
    </button>
  {/each}
</nav>
<div id="magic-view">
  {#if selectedDeck == null}
    Select a commander to see the decklist!
  {:else}
    <div id="deck-view">
      <DeckList 
        {commanders}
        {creatures}
        {instants}
        {planeswalkers}
        {sorceries}
        {artifacts}
        {enchantments}
        {lands}
        showCardPreview={handleHover}
        {rotateCard}
        {handleCardClick}
      />
    </div>
    <div id="card-window" class="desktop-only">
      {#if hoveredCard}
        <img 
          src={cardPreview}
          alt={hoveredCard.name}
        >
      {:else}
        Hover a card to see a preview
      {/if}
    </div>
  {/if}
  {#if activeMobileCard}
    <button 
      class="mobile-card-overlay" 
      role="dialog"
      onclick={() => {activeMobileCard = null; mobileFlip = 0;}}
    >
      <div class="modal-content">
        <img 
          src={activeMobileCard.faces?.[mobileFlip]?.large} 
          alt={activeMobileCard.name} 
        />
        <p class="tap-close-hint">Tap anywhere to close</p>
      </div>
    </button>
  {/if}
</div>

<style lang="scss">
  #magic-nav {
    margin-top: 2rem;
    margin-bottom: 2rem;
    max-height: 340px;
    width: 100%;
    overflow-x: scroll;
    display: grid;
    
    grid-template-rows: repeat(2, 1fr);
    
    grid-auto-flow: column;
    grid-auto-columns: max-content; 
    
    overflow-x: auto;
    overflow-y: hidden;
    
    gap: 10px;
    padding: 10px 0;
    
    -webkit-overflow-scrolling: touch;

    /* Firefox support */
    scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
    scrollbar-width: thin;
    
    .image-button {
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      width: 150px;
      height: 150px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  /* Chrome, Edge, and Safari support */
  #magic-nav::-webkit-scrollbar {
    height: 6px;
  }

  #magic-nav::-webkit-scrollbar-track {
    background: transparent; 
  }
  
  #magic-nav::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.15); 
    border-radius: 10px;
    transition: background 0.2s ease;
  }

  #magic-nav::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3); 
  }

  #magic-view {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
  }

  #deck-view {
    width: 65%;
  }

  #card-window {
    width: 35%;
    position: sticky;
    top: 2rem;
    height: auto;
    align-self: start;
    
    img {
      width: 100%;
      height: auto;
      border-radius: 4% / 3%;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
    }
  }

  .partner-split-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .partner-primary {
      z-index: 2;
      clip-path: polygon(0 0, 100% 0, 0 100%);
    }

    .partner-secondary {
      z-index: 1;
      transform-origin: center center;
      transform: scale(1.4) translate(15%, 10%);
    }
  }

  .mobile-card-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    border: none;
    background-color: rgba(0, 0, 0, 0.85); 
    text-align: inherit;
    font-family: inherit;
    padding: 0;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .modal-content {
      width: 85%;
      max-width: 340px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      img {
        width: 100%;
        height: auto;
        border-radius: 4.75% / 3.5%;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
        animation: zoomIn 0.2s cubic-bezier(0.16, 1, 0.3, 1);
      }

      .tap-close-hint {
        color: #aaaaaa;
        font-size: 0.9rem;
        letter-spacing: 0.5px;
        text-transform: uppercase;
      }
    }
  }

  @media only screen and (max-width: 800px) {
    #magic-nav {
      width: 22.5rem;
    }
    
    .desktop-only {
      display: none;
    }
  }
</style>
