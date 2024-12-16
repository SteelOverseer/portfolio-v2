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

  import '../style.css'
  import { Icon } from '@sveltestrap/sveltestrap'
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();
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

<div id="layout">
  <div id="header">
    <h1>
      Douglas Schultz
    </h1>
    <div id="links">
      <a href="mailto:doug@dougschultz.dev" target="_blank">
        <Icon
          name="envelope"
          style="{
            "font-size:30px; color: #660033;"
          }"
        />
      </a>
      <a href="https://github.com/SteelOverseer" target="_blank">
        <Icon
          name="github"
          style="{
            "font-size:30px; color: #660033;"
          }"
        />
      </a>
      <a href="https://www.linkedin.com/in/douglas-schultz-7a9819a7/" target="_blank">
        <Icon
          name="linkedin"
          style="{
            "font-size:30px; color: #660033;"
          }"
        />
      </a>
    </div>
    
    <div id="subtext">
      Full stack software engineer with a passion for learning.
    </div>
  
    <nav>
      <a href="/">About</a>
      <a href="/projects">Projects</a>
      <a href="/uses">Uses</a>
      <a href="/magic">Library</a>
    </nav>
  </div>

  <div id="content">
    {@render children?.()}
  </div>
</div>


<style lang="scss">
  #layout {
    font-family: Sentient;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    #header {
      border-bottom: 5px solid #660033;
      width: 100%;
      height: 14rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      #links {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 8rem;
      }

      #subtext {
        padding: 1rem;
      }

      h1 {
        margin-bottom: 5px;
      }

      nav {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        
        a {
          font-size: x-large;
        }
      }
    }

    #content {
      width: 90%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 5rem;
    }
  }
</style>