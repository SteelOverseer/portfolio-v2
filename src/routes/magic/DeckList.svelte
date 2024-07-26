<script>
  import { Popover } from "@sveltestrap/sveltestrap";

  export let commander = null
  export let creatures = null
  export let artifacts = null
  export let instants = null
  export let sorceries = null
  export let planeswalkers = null
  export let lands = null
  export let enchantments = null
  export let battles = null
</script>

<div id="decklist">
  {#if commander != null}
    <strong>
      Commander:
    </strong>
    <hr>
      <span id="{commander.name.toLowerCase().replaceAll("'", "").replaceAll(",", "").replaceAll("/","").replaceAll(" ", "-")}">
        {commander.name}
      </span>
      <Popover
        trigger="hover"
        placement="right"
        target="{commander.name.toLowerCase().replaceAll("'", "").replaceAll(",", "").replaceAll("/","").replaceAll(" ", "-")}"
      >
        <img 
          src="{commander.source}"
          alt="{commander.name}"
        >
      </Popover>
    <br>
    <br>
  {/if}
  {#if creatures != null}
    <strong>
      Creatures:
    </strong>
    <hr>
    {#each creatures as creature}
      <span id="{creature.name.toLowerCase().replaceAll("'", "").replaceAll(",", "").replaceAll("/","").replaceAll(" ", "-")}">
        {creature.qty} {creature.name}
      </span>
      <Popover
        trigger="hover"
        placement="right"
        target="{creature.name.toLowerCase().replaceAll("'", "").replaceAll(",", "").replaceAll("/","").replaceAll(" ", "-")}"
      >
        <img 
          src="{creature.source}"
          alt="{creature.name}"
        >
      </Popover>
      <br>
    {/each}
    <br>
  {/if}
  {#if instants != null}
    <strong>
      Instants:
    </strong>
    <hr>
    {#each instants as instant}
      <span id="{instant.name.toLowerCase().replaceAll("'", "").replaceAll(",", "").replaceAll("/","").replaceAll(" ", "-")}">
        {instant.qty} {instant.name}
      </span>
      <Popover
        trigger="hover"
        placement="right"
        target="{instant.name.toLowerCase().replaceAll("'", "").replaceAll(",", "").replaceAll("/","").replaceAll(" ", "-")}"
      >
        <img 
          src="{instant.source}"
          alt="{instant.name}"
        >
      </Popover>
      <br>
    {/each}
    <br>
  {/if}
  {#if sorceries != null}
    <strong>
      Sorceries:
    </strong>
    <hr>
    {#each sorceries as sorcery}
      <span id="{sorcery.name.toLowerCase().replaceAll("'", "").replaceAll(",", "").replaceAll("/","").replaceAll(" ", "-")}">
        {sorcery.qty} {sorcery.name}
      </span>
      <Popover
        trigger="hover"
        placement="right"
        target="{sorcery.name.toLowerCase().replaceAll("'", "").replaceAll(",", "").replaceAll("/","").replaceAll(" ", "-")}"
      >
        <img 
          src="{sorcery.source}"
          alt="{sorcery.name}"
        >
      </Popover>
      <br>
    {/each}
    <br>
  {/if}
  {#if artifacts != null}
    <strong>
      Artifacts:
    </strong>
    <hr>
    {#each artifacts as artifact}
      <span id="{artifact.name.toLowerCase().replaceAll("'", "").replaceAll(",", "").replaceAll("/","").replaceAll(" ", "-")}">
        {artifact.qty} {artifact.name}
      </span>
      <Popover
        trigger="hover"
        placement="right"
        target="{artifact.name.toLowerCase().replaceAll("'", "").replaceAll(",", "").replaceAll("/","").replaceAll(" ", "-")}"
      >
        <img 
          src="{artifact.source}"
          alt="{artifact.name}"
        >
      </Popover>
      <br>
    {/each}
    <br>
  {/if}
  {#if enchantments != null}
    <strong>
      Enchantments:
    </strong>
    <hr>
    {#each enchantments as enchantment}
      <span id="{enchantment.name.toLowerCase().replaceAll("'", "").replaceAll(",", "").replaceAll("/","").replaceAll(" ", "-")}">
        {enchantment.qty} {enchantment.name}
      </span>
      <Popover
        trigger="hover"
        placement="right"
        target="{enchantment.name.toLowerCase().replaceAll("'", "").replaceAll(",", "").replaceAll("/","").replaceAll(" ", "-")}"
      >
        <img 
          src="{enchantment.source}"
          alt="{enchantment.name}"
        >
      </Popover>
      <br>
    {/each}
    <br>
  {/if}
  {#if planeswalkers != null}
    <strong>
      Planeswalkers:
    </strong>
    <hr>
    {#each planeswalkers as planeswalker}
      <span id="{planeswalker.name.toLowerCase().replaceAll("'", "").replaceAll(",", "").replaceAll("/","").replaceAll(" ", "-")}">
        {planeswalker.qty} {planeswalker.name}
      </span>
      <Popover
        trigger="hover"
        placement="right"
        target="{planeswalker.name.toLowerCase().replaceAll("'", "").replaceAll(",", "").replaceAll("/","").replaceAll(" ", "-")}"
      >
        <img 
          src="{planeswalker.source}"
          alt="{planeswalker.name}"
        >
      </Popover>
      <br>
    {/each}
    <br>
  {/if}
  {#if battles != null}
    <strong>
      Battles:
    </strong>
    <hr>
    {#each battles as battle}
      <span id="{battle.name.toLowerCase().replaceAll("'", "").replaceAll(",", "").replaceAll("/","").replaceAll(" ", "-")}">
        {battle.qty} {battle.name}
      </span>
      <Popover
        trigger="hover"
        placement="right"
        target="{battle.name.toLowerCase().replaceAll("'", "").replaceAll(",", "").replaceAll("/","").replaceAll(" ", "-")}"
      >
        <img 
          src="{battle.source}"
          alt="{battle.name}"
        >
      </Popover>
      <br>
    {/each}
    <br>
  {/if}
  {#if lands != null}
    <strong>
      Lands:
    </strong>
    <hr>
    {#each lands as land}
      <span id="{land.name.toLowerCase().replaceAll("'", "").replaceAll(",", "").replaceAll("/","").replaceAll(" ", "-")}">
        {land.qty} {land.name}
      </span>
      <Popover
        trigger="hover"
        placement="right"
        target="{land.name.toLowerCase().replaceAll("'", "").replaceAll(",", "").replaceAll("/","").replaceAll(" ", "-")}"
      >
        <img 
          src="{land.source}"
          alt="{land.name}"
        >
      </Popover>
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

  @media only screen and (max-width: 800px) {
    #decklist {      
      column-count: 1;
      width: 80%;
      margin-right: 0px;
    }
  }
</style>