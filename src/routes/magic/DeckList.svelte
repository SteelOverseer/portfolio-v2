<script>
  import { Popover } from "@sveltestrap/sveltestrap";

  /**
   * @typedef {Object} Props
   * @property {any} [commander]
   * @property {any} [creatures]
   * @property {any} [artifacts]
   * @property {any} [instants]
   * @property {any} [sorceries]
   * @property {any} [planeswalkers]
   * @property {any} [lands]
   * @property {any} [enchantments]
   * @property {any} [battles]
   */

  /** @type {Props} */
  let {
    commander = null,
    creatures = null,
    artifacts = null,
    instants = null,
    sorceries = null,
    planeswalkers = null,
    lands = null,
    enchantments = null,
    battles = null,
    showCardPreview
  } = $props();

</script>

<div id="decklist">
  {#if commander != null}
    <strong>
      Commander:
    </strong>
    <hr>
      <button 
        type="button"
        class="unstyled-preview-trigger"
        onmouseenter={() => showCardPreview(commander)}
      >
        {commander.name}
      </button>
    <br>
    <br>
  {/if}
  {#if creatures != null && creatures.length > 0}
    <strong>
      Creatures:
    </strong>
    <hr>
    {#each creatures as creature}
      <button 
        type="button"
        class="unstyled-preview-trigger"
        onmouseenter={() => showCardPreview(creature)}
      >
        {creature.name}
      </button>
      <br>
    {/each}
    <br>
  {/if}
  {#if instants != null && instants.length > 0}
    <strong>
      Instants:
    </strong>
    <hr>
    {#each instants as instant}
      <button 
        type="button"
        class="unstyled-preview-trigger"
        onmouseenter={() => showCardPreview(instant)}
      >
        {instant.name}
      </button>
      <br>
    {/each}
    <br>
  {/if}
  {#if sorceries != null && sorceries.length > 0}
    <strong>
      Sorceries:
    </strong>
    <hr>
    {#each sorceries as sorcery}
      <button 
        type="button"
        class="unstyled-preview-trigger"
        onmouseenter={() => showCardPreview(sorcery)}
      >
        {sorcery.name}
      </button>
      <br>
    {/each}
    <br>
  {/if}
  {#if artifacts != null && artifacts.length > 0}
    <strong>
      Artifacts:
    </strong>
    <hr>
    {#each artifacts as artifact}
      <button 
        type="button"
        class="unstyled-preview-trigger"
        onmouseenter={() => showCardPreview(artifact)}
      >
        {artifact.name}
      </button>
      <br>
    {/each}
    <br>
  {/if}
  {#if enchantments != null && enchantments.length > 0}
    <strong>
      Enchantments:
    </strong>
    <hr>
    {#each enchantments as enchantment}
      <button 
        type="button"
        class="unstyled-preview-trigger"
        onmouseenter={() => showCardPreview(enchantment)}
      >
        {enchantment.name}
      </button>
      <br>
    {/each}
    <br>
  {/if}
  {#if planeswalkers != null && planeswalkers.length > 0}
    <strong>
      Planeswalkers:
    </strong>
    <hr>
    {#each planeswalkers as planeswalker}
      <button 
        type="button"
        class="unstyled-preview-trigger"
        onmouseenter={() => showCardPreview(planeswalker)}
      >
        {planeswalker.name}
      </button>
      <br>
    {/each}
    <br>
  {/if}
  {#if battles != null && battles.length > 0}
    <strong>
      Battles:
    </strong>
    <hr>
    {#each battles as battle}
      <button 
        type="button"
        class="unstyled-preview-trigger"
        onmouseenter={() => showCardPreview(battle)}
      >
        {battle.name}
      </button>
      <br>
    {/each}
    <br>
  {/if}
  {#if lands != null && lands.length > 0}
    <strong>
      Lands:
    </strong>
    <hr>
    {#each lands as land}
      <button 
        type="button"
        class="unstyled-preview-trigger"
        onmouseenter={() => showCardPreview(land)}
      >
        {land.name}
      </button>
      <br>
    {/each}
  {/if}
</div>

<style lang="scss">
  #decklist {
    border: 3px solid #660033;
    box-shadow: #000000 6px 2px 8px 0px;
    
    column-count: 3;
    column-gap: 10px;
    padding: 2rem;
    margin-right: 20px;
  }

  span {
    cursor: pointer;
  }

  hr {
    width: 50%;
    margin-left: 0px;
    margin-right: 0px;
  }

  .unstyled-preview-trigger {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    font: inherit;
    color: inherit;
    cursor: pointer;
    text-align: inherit;
  }

  @media only screen and (max-width: 800px) {
    #decklist {      
      column-count: 1;
      width: 80%;
      margin-right: 0px;
    }
  }
</style>