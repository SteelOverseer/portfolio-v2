<script>
  import '../style.css'
</script>

<div id="layout">
  <div id="header">
    <h1>
      Douglas Schultz
    </h1>
  
    <nav>
      <a href="/">About</a>
      <a href="/uses">Uses</a>
      <a href="/projects">Projects</a>
    </nav>
  </div>

  <div id="content">
    <slot></slot>
  </div>
</div>


<style lang="scss">
  #layout {
    font-family: Sentient;

    display: flex;
    flex-direction: column;
    align-items: center;
    #header {
      width: 100%;
      height: 8rem;
      background-color: navy;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;

      nav {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        a {
          color: white;
          font-size: x-large;
        }
      }

      
    }

    #content {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 5rem;

      body {
        width: 100%;
      }
    }
  }
</style>