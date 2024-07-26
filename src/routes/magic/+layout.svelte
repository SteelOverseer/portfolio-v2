<script>
  import narset from '$lib/images/Narset-MtG-Art.jpg'
  import neheb from '$lib/images/Neheb-the-Eternal-Hour-of-Devastation-MtG-Art.jpg'
  import urdragon from '$lib/images/The_Ur-Dragon.jpg'
  import arcades from '$lib/images/Arcades-the-Strategist-Core-Set-2019-MtG-Art.jpg'
  import grandarbiter from '$lib/images/grandarbiter.jpg'
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

  @media only screen and (max-width: 800px) {
    #magic-view {     
      flex-direction: column-reverse;
    }
  }
</style>