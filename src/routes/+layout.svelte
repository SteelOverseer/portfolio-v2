<script>
  import '../style.css'
</script>

<div id="layout">
  <div id="header">
    <h1>
      Douglas Schultz
    </h1>
    <div id="subtext">
      Full stack software engineer with attention to detail and a passion for learning.
    </div>
  
    <nav>
      <a href="/">About</a>
      <a href="/projects">Projects</a>
      <a href="/uses">Uses</a>
    </nav>
  </div>

  <div id="content">
    <slot></slot>
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
      border-bottom: 2px solid #660033;
      width: 100%;
      height: 11rem;
      display: flex;
      flex-direction: column;
      align-items: center;

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
        padding-bottom: 1rem;
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