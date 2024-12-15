<script>
  import destiny from '$lib/images/destiny.webp'
  import factorio from '$lib/images/factorio.webp'
  import valheim from '$lib/images/valheim.webp'
</script>

<div id="about">
  <body>
    <div>
      <h2>Hi, I'm Doug</h2>
    </div>
    <div>
      <p>
        I'm a software engineer that enjoys building cool things.
        <br><br>
        By day, I work full time as a full stack software engineer for a local billing company.
        <br>
        By night, I contract on the side for a friend who is starting his own tech company, <a href="https://roctechworks.com/#/" target="_blank">roctechworks</a>.
        <br>
      </p>

      <h3>The Fun Stuff</h3>
      I've been an avid gamer my entire life, a hobby that started while I was young playing the Super Nintendo with my family and has evolved into playing 
      a variety of games on my custom built gaming pc. Steam is my game store of choice, with my top 3 games being:
      <br>
      <div id="steam-games">
        <img src="{destiny}" alt="Destiny 2 - 1,136.7 hours">
        <img src="{factorio}" alt="Factorio - 357.1 hours">
        <img src="{valheim}" alt="Valheim - 234.3 hours">
      </div>
      
      Lately I've been playing Elden Ring, wish me luck!
      <br>
      And, although I play on PC nowadays, Nintendo still holds my favorite titles in Legend of Zelda, Metroid Prime, and Super Smash Bros.
      <br>
      <br>
      If it's not video games, its magic cards. I enjoy collecting and playing Magic: the Gathering and meet with my friends weekly to terrorize them with a new brew.
      <br>
      <br>
    </div>
  </body>
</div>

<style lang="scss">
  #steam-games {
    display: flex;
    justify-content: space-evenly;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 800px) {
    #steam-games {
      flex-direction: column;
      align-items: center;
      height: 41rem;
      img {
        width: 100px;
        height: 130px;
      }
    }
  }
</style>