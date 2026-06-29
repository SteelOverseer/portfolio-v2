<script>
import Fa from 'svelte-fa';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

let {
  commanders = null,
  creatures = null,
  artifacts = null,
  instants = null,
  sorceries = null,
  planeswalkers = null,
  lands = null,
  enchantments = null,
  battles = null,
  showCardPreview,
  rotateCard,
  handleCardClick
} = $props();

const formatMainName = (name) => {
  return name.split(' // ')[0]
}
</script>

<div id="decklist">
  {#if commanders != null}
    <div class="category-block">
      <h3>Commander</h3>
      <hr>
      {#each commanders as commander}
        <div
          class="card-row premium-banner" 
          role="button"
          tabindex="-1"
          style="--art-url: url('{commander.faces?.[0]?.art_crop || ''}')"
          onmouseenter={() => showCardPreview(commander)}
          onclick={() => handleCardClick(commander)}
          onkeydown={(e) => e.key === 'Enter' && handleCardClick(commander)}
        >
          <button 
            type="button"
            class="card-name-btn"
          >
            <span class="card-name">{formatMainName(commander.name)}</span>
          </button>

          {#if commander.name.includes('//')}
            <button
              type="button"
              class="rotate-card"
              onclick={() => rotateCard()}
            >
              <Fa icon={faArrowsRotate} />
            </button>
          {/if}
        </div>
      {/each}
    </div>
  {/if}

  {#if creatures != null && creatures.length > 0}
    <div class="category-block">
      <h3>Creatures</h3>
      <hr>
      {#each creatures as creature}
        <div 
          class="card-row"
          role="button"
          tabindex="-1"
          onmouseenter={() => showCardPreview(creature)}
          onclick={() => handleCardClick(creature)}
          onkeydown={(e) => e.key === 'Enter' && handleCardClick(creature)}
        >
          <button 
            type="button"
            class="card-name-btn"
          >
            <span class="quantity">{creature.quantity || 1}</span>
            <span class="card-name">{formatMainName(creature.name)}</span>
          </button>
          {#if creature.name.includes(' // ') && creature.faces.length > 1}
            <button
              type="button"
              class="rotate-card"
              onclick={() => rotateCard()}
            >
              <Fa icon={faArrowsRotate} />
            </button>
          {/if}

        </div>
      {/each}
    </div>
  {/if}

  {#if instants != null && instants.length > 0}
    <div class="category-block">
      <h3>Instants</h3>
      <hr>
      {#each instants as instant}
        <div 
          class="card-row"
          role="button"
          tabindex="-1"
          onmouseenter={() => showCardPreview(instant)}
          onclick={() => handleCardClick(instant)}
          onkeydown={(e) => e.key === 'Enter' && handleCardClick(instant)}
        >
          <button 
            type="button"
            class="card-name-btn"
          >
            <span class="quantity">{instant.quantity || 1}</span>
            <span class="card-name">{formatMainName(instant.name)}</span>
          </button>

          {#if instant.name.includes('//') && instant.faces.length > 1}
            <button
              type="button"
              class="rotate-card"
              onclick={() => rotateCard()}
            >
              <Fa icon={faArrowsRotate} />
            </button>
          {/if}
        </div>
      {/each}
    </div>
  {/if}

  {#if sorceries != null && sorceries.length > 0}
    <div class="category-block">
      <h3>Sorceries</h3>
      <hr>
      {#each sorceries as sorcery}
        <div 
          class="card-row"
          role="button"
          tabindex="-1"
          onmouseenter={() => showCardPreview(sorcery)}
          onclick={() => handleCardClick(sorcery)}
          onkeydown={(e) => e.key === 'Enter' && handleCardClick(sorcery)}
        >
          <button 
            type="button"
            class="card-name-btn"
          >
            <span class="quantity">{sorcery.quantity || 1}</span>
            <span class="card-name">{formatMainName(sorcery.name)}</span>
          </button>

          {#if sorcery.name.includes('//') && sorcery.faces.length > 1}
            <button
              type="button"
              class="rotate-card"
              onclick={() => rotateCard()}
            >
              <Fa icon={faArrowsRotate} />
            </button>
          {/if}
        </div>
      {/each}
    </div>
  {/if}

  {#if artifacts != null && artifacts.length > 0}
    <div class="category-block">
      <h3>Artifacts</h3>
      <hr>
      {#each artifacts as artifact}
        <div 
          class="card-row"
          role="button"
          tabindex="-1"
          onmouseenter={() => showCardPreview(artifact)}
          onclick={() => handleCardClick(artifact)}
          onkeydown={(e) => e.key === 'Enter' && handleCardClick(artifact)}
        >
          <button 
            type="button"
            class="card-name-btn"
          >
            <span class="quantity">{artifact.quantity || 1}</span>
            <span class="card-name">{formatMainName(artifact.name)}</span>
          </button>

          {#if artifact.name.includes('//') && artifact.faces.length > 1}
            <button
              type="button"
              class="rotate-card"
              onclick={() => rotateCard()}
            >
              <Fa icon={faArrowsRotate} />
            </button>
          {/if}
        </div>
      {/each}
    </div>
  {/if}

  {#if enchantments != null && enchantments.length > 0}
    <div class="category-block">
      <h3>Enchantments</h3>
      <hr>
      {#each enchantments as enchantment}
        <div 
          class="card-row"
          role="button"
          tabindex="-1"
          onmouseenter={() => showCardPreview(enchantment)}
          onclick={() => handleCardClick(enchantment)}
          onkeydown={(e) => e.key === 'Enter' && handleCardClick(enchantment)}
        >
          <button 
            type="button"
            class="card-name-btn"
          >
            <span class="quantity">{enchantment.quantity || 1}</span>
            <span class="card-name">{formatMainName(enchantment.name)}</span>
          </button>

          {#if enchantment.name.includes('//') && enchantment.faces.length > 1}
            <button
              type="button"
              class="rotate-card"
              onclick={() => rotateCard()}
            >
              <Fa icon={faArrowsRotate} />
            </button>
          {/if}
        </div>
      {/each}
    </div>
  {/if}

  {#if planeswalkers != null && planeswalkers.length > 0}
    <div class="category-block">
      <h3>Planeswalkers</h3>
      <hr>
      {#each planeswalkers as planeswalker}
        <div 
          class="card-row"
          role="button"
          tabindex="-1"
          onmouseenter={() => showCardPreview(planeswalker)}
          onclick={() => handleCardClick(planeswalker)}
          onkeydown={(e) => e.key === 'Enter' && handleCardClick(planeswalker)}
        >
          <button 
            type="button"
            class="card-name-btn"
          >
            <span class="quantity">{planeswalker.quantity || 1}</span>
            <span class="card-name">{formatMainName(planeswalker.name)}</span>
          </button>

          {#if planeswalker.name.includes('//') && planeswalker.faces.length > 1}
            <button
              type="button"
              class="rotate-card"
              onclick={() => rotateCard()}
            >
              <Fa icon={faArrowsRotate} />
            </button>
          {/if}
        </div>
      {/each}
    </div>
  {/if}

  {#if battles != null && battles.length > 0}
    <div class="category-block">
      <h3>Battles</h3>
      <hr>
      {#each battles as battle}
        <div 
          class="card-row"
          role="button"
          tabindex="-1"
          onmouseenter={() => showCardPreview(battle)}
          onclick={() => handleCardClick(battle)}
          onkeydown={(e) => e.key === 'Enter' && handleCardClick(battle)}
        >
          <button 
            type="button"
            class="card-name-btn"
          >
            <span class="quantity">{battle.quantity || 1}</span>
            <span class="card-name">{formatMainName(battle.name)}</span>
          </button>

          {#if battle.name.includes('//') && battle.faces.length > 1}
            <button
              type="button"
              class="rotate-card"
              onclick={() => rotateCard()}
            >
              <Fa icon={faArrowsRotate} />
            </button>
          {/if}
        </div>
      {/each}
    </div>
  {/if}

  {#if lands != null && lands.length > 0}
    <div class="category-block">
      <h3>Lands</h3>
      <hr>
      {#each lands as land}
        <div 
          class="card-row"
          role="button"
          tabindex="-1"
          onmouseenter={() => showCardPreview(land)}
          onclick={() => handleCardClick(land)}
          onkeydown={(e) => e.key === 'Enter' && handleCardClick(land)}
        >
          <button 
            type="button"
            class="card-name-btn"
          >
            <span class="quantity">{land.quantity || 1}</span>
            <span class="card-name">{formatMainName(land.name)}</span>
          </button>

          {#if land.name.includes('//') && land.faces.length > 1}
            <button
              type="button"
              class="rotate-card"
              onclick={() => rotateCard()}
            >
              <Fa icon={faArrowsRotate} />
            </button>
          {/if}
        </div>
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  #decklist {
    border: 3px solid #660033;
    box-shadow: #000000 6px 2px 8px 0px;
    background-color: #121212; /* Gives contrast to the light text rows */
    color: #ffffff;
    
    column-count: 3;
    column-gap: 24px;
    padding: 2rem;
    margin-right: 20px;
  }

  .category-block {
    break-inside: avoid-column;
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
  }

  h3 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 700;
    color: #e0e0e0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  hr {
    width: 100%;
    border: 0;
    border-top: 1px solid #660033;
    margin: 6px 0 10px 0;
  }

  .card-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 2px 8px;
    margin-bottom: 2px;
    border-radius: 4px;
    transition: all 0.15s ease-in-out;

    &:hover {
      background-color: rgba(255, 255, 255, 0.07);
      color: #ffffff;
      
      .card-name-btn {
        padding-left: 4px;
      }

      .rotate-card {
        opacity: 0.7;
      }
    }
  }

  .card-name-btn {
    flex-grow: 1;
    background: none;
    border: none;
    padding: 4px 0;
    margin: 0;
    font: inherit;
    color: inherit;
    cursor: pointer;
    text-align: left;
    overflow: hidden;
    transition: padding 0.15s ease-in-out;
    display: flex;
    flex-direction: row;

    .quantity {
      font-weight: 700;
      color: #888888;
      min-width: 28px;
      font-size: 0.95rem;
      line-height: 1.4;
    }

    .card-name {
      font-size: 0.95rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: block;
    }
  }

  .rotate-card {
    background: none;
    border: none;
    padding: 6px;
    margin: 0 0 0 8px;
    font: inherit;
    color: inherit;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    opacity: 0.3;
    border-radius: 4px;
    transition: all 0.15s ease-in-out;

    &:hover {
      opacity: 1 !important;
      background-color: rgba(255, 255, 255, 0.15);
      color: #ff0066;
    }
  }

  .premium-banner {
    height: 45px;
    margin-top: 4px;
    margin-bottom: 8px;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    
    background-image: 
      linear-gradient(90deg, rgba(15, 15, 15, 0.9) 35%, rgba(15, 15, 15, 0.3) 100%),
      var(--art-url);
    background-size: cover;
    background-position: center 25%;

    .card-name {
      font-weight: 700;
      color: #ffffff;
      text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
    }

    &:hover {
      padding-left: 16px;
      background-image: 
        linear-gradient(90deg, rgba(102, 0, 51, 0.95) 40%, rgba(15, 15, 15, 0.2) 100%),
        var(--art-url);
    }
  }

  @media only screen and (max-width: 800px) {
    #decklist {      
      column-count: 1;
      width: 100%;
      margin-right: 0px;
      padding: 1.25rem;
    }
  }
</style>