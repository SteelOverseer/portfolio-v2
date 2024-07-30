<script>
  import narset from '$lib/images/Narset-MtG-Art.jpg'
  import neheb from '$lib/images/Neheb-the-Eternal-Hour-of-Devastation-MtG-Art.jpg'
  import urdragon from '$lib/images/The_Ur-Dragon.jpg'
  import arcades from '$lib/images/Arcades-the-Strategist-Core-Set-2019-MtG-Art.jpg'
  import grandarbiter from '$lib/images/grandarbiter.jpg'
  import kwain from '$lib/images/Kwain-Itinerant-Meddler-Commander-Legends-MtG-Art.jpg'
  import chatterfang from '$lib/images/Chatterfang-Squirrel-General-Modern-Horizons-2-MtG-Art.jpg'
  import tasha from '$lib/images/Tasha-the-Witch-Queen-Battle-for-Baldurs-Gate-MtG-Art.jpg'
  import jhoira from '$lib/images/Jhoira-of-the-Ghitu-Duel-Decks-Mind-vs.-Might-MtG-Art.jpg'
  import linsivvi from '$lib/images/Sivvi.jpg'
  import urza from '$lib/images/Urza-Lord-High-Artificer-2-Modern-Horizons-MtG-Art.jpg'
</script>

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
      width: 7rem;
      height: 6rem;
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