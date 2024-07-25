<script>
  import { Popover } from "@sveltestrap/sveltestrap";

  export let commander
  export let creatures
  export let artifacts
  export let instants
  export let sorceries
  export let planeswalkers
  export let lands
  export let enchantments
  export let battles
</script>

<div id="decklist">
  {#if commander}
    <strong>
      Commander:
    </strong>
    <hr>
      <span id="{commander.id}">
        {commander.name}
      </span>
      <Popover
        trigger="hover"
        placement="right"
        target="{commander.id}"
      >
        <img 
          src="{commander.source}"
          alt="{commander.name}"
        >
      </Popover>
    <br>
    <br>
  {/if}
  {#if creatures}
    <strong>
      Creatures:
    </strong>
    <hr>
    {#each creatures as creature}
      <span id="{creature.id}">
        {creature.qty} {creature.name}
      </span>
      <Popover
        trigger="hover"
        placement="right"
        target="{creature.id}"
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
  {#if instants}
    <strong>
      Instants:
    </strong>
    <hr>
    {#each instants as instant}
      <span id="{instant.id}">
        {instant.qty} {instant.name}
      </span>
      <Popover
        trigger="hover"
        placement="right"
        target="{instant.id}"
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
  {#if sorceries}
    <strong>
      Sorceries:
    </strong>
    <hr>
    {#each sorceries as sorcery}
      <span id="{sorcery.id}">
        {sorcery.qty} {sorcery.name}
      </span>
      <Popover
        trigger="hover"
        placement="right"
        target="{sorcery.id}"
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
  {#if artifacts}
    <strong>
      Artifacts:
    </strong>
    <hr>
    {#each artifacts as artifact}
      <span id="{artifact.id}">
        {artifact.qty} {artifact.name}
      </span>
      <Popover
        trigger="hover"
        placement="right"
        target="{artifact.id}"
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
  {#if enchantments}
    <strong>
      Enchantments:
    </strong>
    <hr>
    {#each enchantments as enchantment}
      <span id="{enchantment.id}">
        {enchantment.qty} {enchantment.name}
      </span>
      <Popover
        trigger="hover"
        placement="right"
        target="{enchantment.id}"
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
  {#if planeswalkers}
    <strong>
      Planeswalkers:
    </strong>
    <hr>
    {#each planeswalkers as planeswalker}
      <span id="{planeswalker.id}">
        {planeswalker.qty} {planeswalker.name}
      </span>
      <Popover
        trigger="hover"
        placement="right"
        target="{planeswalker.id}"
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
  {#if battles}
    <strong>
      Battles:
    </strong>
    <hr>
    {#each battles as battle}
      <span id="{battle.id}">
        {battle.qty} {battle.name}
      </span>
      <Popover
        trigger="hover"
        placement="right"
        target="{battle.id}"
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
  {#if lands}
    <strong>
      Lands:
    </strong>
    <hr>
    {#each lands as land}
      <span id="{land.id}">
        {land.qty} {land.name}
      </span>
      <Popover
        trigger="hover"
        placement="right"
        target="{land.id}"
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