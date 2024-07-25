<script>
  import narset from '$lib/images/Narset-MtG-Art.jpg'
  import neheb from '$lib/images/Neheb-the-Eternal-Hour-of-Devastation-MtG-Art.jpg'
</script>

<nav id="magic-nav">
  <a href="/magic/narset">
    <img src="{narset}" alt="Narset, Enlightened Master">
  </a>
  <a href="/magic/neheb">
    <img src="{neheb}" alt="Neheb, the Eternal">
  </a>
</nav>
<div id="magic-view">
  <slot></slot>
</div>

<style lang="scss">
  #magic-nav {
    margin-top: 2rem;
    margin-bottom: 2rem;

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