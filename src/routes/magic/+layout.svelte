<script>
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();
</script>

<nav id="magic-nav">
  <a href="/magic/narset">
    <enhanced:img src="$lib/images/Narset-MtG-Art.webp?w=100" alt="Narset, Enlightened Master">
  </a>
  <a href="/magic/neheb">
    <enhanced:img src="$lib/images/Neheb-the-Eternal-Hour-of-Devastation-MtG-Art.webp?w=100" alt="Neheb, the Eternal">
  </a>
  <a href="/magic/dragons">
    <enhanced:img src="$lib/images/The_Ur-Dragon.webp?w=100" alt="The Ur-Dragon">
  </a>
  <a href="/magic/arcades">
    <enhanced:img src="$lib/images/Arcades-the-Strategist-Core-Set-2019-MtG-Art.webp?w=100" alt="Arcades, the Strategist">
  </a>
  <a href="/magic/taxes">
    <enhanced:img src="$lib/images/grandarbiter.webp?w=100" alt="Grand Arbiter Augustin IV">
  </a>
  <a href="/magic/grouphug">
    <enhanced:img src="$lib/images/Kwain-Itinerant-Meddler-Commander-Legends-MtG-Art.webp?w=100" alt="Kwain, Itinerant Meddler">
  </a>
  <a href="/magic/squirrels">
    <enhanced:img src="$lib/images/Chatterfang-Squirrel-General-Modern-Horizons-2-MtG-Art.webp?w=100" alt="Chatterfang, Squirrel General">
  </a>
  <a href="/magic/tasha">
    <enhanced:img src="$lib/images/Tasha-the-Witch-Queen-Battle-for-Baldurs-Gate-MtG-Art.webp?w=100" alt="Tasha, the Witch Queen">
  </a>
  <a href="/magic/jhoira">
    <enhanced:img src="$lib/images/Jhoira-of-the-Ghitu-Duel-Decks-Mind-vs.-Might-MtG-Art.webp?w=100" alt="Jhoira of the Ghitu">
  </a>
  <a href="/magic/rebels">
    <enhanced:img src="$lib/images/Sivvi.webp?w=100" alt="Lin Sivvi, Defiant Hero">
  </a>
  <a href="/magic/urza">
    <enhanced:img src="$lib/images/Urza-Lord-High-Artificer-2-Modern-Horizons-MtG-Art.webp?w=100" alt="Urza, Lord High Artificer">
  </a>
  <a href="/magic/zur">
    <enhanced:img src="$lib/images/Zur-the-Enchanter-Promo-MtG-Art.webp?w=100" alt="Zur, the Enchanter">
  </a>
  <a href="/magic/lord-windgrace">
    <enhanced:img src="$lib/images/Lord_Windgrace.webp?w=100" alt="Lord Windgrace">
  </a>
  <a href="/magic/vorinclex">
    <enhanced:img src="$lib/images/Vorinclex-Monstrous-Raider-Kaldheim-MtG-Art.webp?w=100" alt="Vorinclex, Monstrous Raider">
  </a>
</nav>
<div id="magic-view">
  {@render children?.()}
</div>

<style lang="scss">
  #magic-nav {
    margin-top: 2rem;
    margin-bottom: 2rem;
   
    a:not(:last-child) {
      margin-right: 5px;
    }

    img {
      width: 110px;
      height: 110px;
    }
  }

  #magic-view {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
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