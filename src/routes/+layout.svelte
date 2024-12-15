<script>
  import '../style.css'
  import { Icon } from '@sveltestrap/sveltestrap'
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();
</script>

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