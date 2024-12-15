<script>
  import narset from '$lib/images/Narset-MtG-Art.webp'
  import neheb from '$lib/images/Neheb-the-Eternal-Hour-of-Devastation-MtG-Art.webp'
  import urdragon from '$lib/images/The_Ur-Dragon.webp'
  import arcades from '$lib/images/Arcades-the-Strategist-Core-Set-2019-MtG-Art.webp'
  import grandarbiter from '$lib/images/grandarbiter.webp'
  import kwain from '$lib/images/Kwain-Itinerant-Meddler-Commander-Legends-MtG-Art.webp'
  import chatterfang from '$lib/images/Chatterfang-Squirrel-General-Modern-Horizons-2-MtG-Art.webp'
  import tasha from '$lib/images/Tasha-the-Witch-Queen-Battle-for-Baldurs-Gate-MtG-Art.webp'
  import jhoira from '$lib/images/Jhoira-of-the-Ghitu-Duel-Decks-Mind-vs.-Might-MtG-Art.webp'
  import linsivvi from '$lib/images/Sivvi.webp'
  import urza from '$lib/images/Urza-Lord-High-Artificer-2-Modern-Horizons-MtG-Art.webp'
  import zur from '$lib/images/Zur-the-Enchanter-Promo-MtG-Art.webp'
  import lordwindgrace from '$lib/images/Lord_Windgrace.webp'
  import vorinclex from '$lib/images/Vorinclex-Monstrous-Raider-Kaldheim-MtG-Art.webp'
</script>

<svelte:head>
  <link rel="preload" as="image" href="{narset}">
  <link rel="preload" as="image" href="{neheb}">
  <link rel="preload" as="image" href="{urdragon}">
  <link rel="preload" as="image" href="{arcades}">
  <link rel="preload" as="image" href="{grandarbiter}">
  <link rel="preload" as="image" href="{kwain}">
  <link rel="preload" as="image" href="{chatterfang}">
  <link rel="preload" as="image" href="{tasha}">
  <link rel="preload" as="image" href="{jhoira}">
  <link rel="preload" as="image" href="{linsivvi}">
  <link rel="preload" as="image" href="{urza}">
  <link rel="preload" as="image" href="{zur}">
  <link rel="preload" as="image" href="{lordwindgrace}">
  <link rel="preload" as="image" href="{vorinclex}">
</svelte:head>

<nav id="magic-nav">
  <a href="/magic/narset">
    <img src="{narset}" alt="Narset, Enlightened Master">
  </a>
  <a href="/magic/neheb">
    <img src="{neheb}" alt="Neheb, the Eternal">
  </a>
  <a href="/magic/dragons">
    <img src="{urdragon}" alt="The Ur-Dragon">
  </a>
  <a href="/magic/arcades">
    <img src="{arcades}" alt="Arcades, the Strategist">
  </a>
  <a href="/magic/taxes">
    <img src="{grandarbiter}" alt="Grand Arbiter Augustin IV">
  </a>
  <a href="/magic/grouphug">
    <img src="{kwain}" alt="Kwain, Itinerant Meddler">
  </a>
  <a href="/magic/squirrels">
    <img src="{chatterfang}" alt="Chatterfang, Squirrel General">
  </a>
  <a href="/magic/tasha">
    <img src="{tasha}" alt="Tasha, the Witch Queen">
  </a>
  <a href="/magic/jhoira">
    <img src="{jhoira}" alt="Jhoira of the Ghitu">
  </a>
  <a href="/magic/rebels">
    <img src="{linsivvi}" alt="Lin Sivvi, Defiant Hero">
  </a>
  <a href="/magic/urza">
    <img src="{urza}" alt="Urza, Lord High Artificer">
  </a>
  <a href="/magic/zur">
    <img src="{zur}" alt="Zur, the Enchanter">
  </a>
  <a href="/magic/lord-windgrace">
    <img src="{lordwindgrace}" alt="Lord Windgrace">
  </a>
  <a href="/magic/vorinclex">
    <img src="{vorinclex}" alt="Vorinclex, Monstrous Raider">
  </a>
</nav>
<div id="magic-view">
  <slot></slot>
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