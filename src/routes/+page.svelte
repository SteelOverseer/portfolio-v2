<script>
  let { data } = $props()
  const allGames = data?.ownedGames.response.games;
  const topFiveGames = allGames?.sort((a, b) => b.playtime_forever - a.playtime_forever).slice(0,5);
  const latestGame = data?.recentlyPlayed?.response.games[0]
</script>

<div id="about">
  <div>
    <h2>Hi, I'm Doug</h2>
  </div>
  <div>
    <p>
      I'm a full-stack software engineer that enjoys building cool things and bringing value to my end users.
      <br><br>
      Currently, I balance a full-time role engineering robust, high-performance billing software with targeted contract development, 
      helping build out the technical foundation and scalable solutions for <a href="https://roctechworks.com/#/" target="_blank" rel="noopener noreferrer">RocTechWorks</a>.
    </p>

    <h3>The Fun Stuff</h3>
    I've been an avid gamer my entire life, a hobby that started while I was young playing the Super Nintendo with my family and has evolved into playing 
    a variety of games on my custom built gaming pc. I have an ever growing library on steam, but these are my top 5 played of all time.
    <br>
    <div id="steam-games">
      {#each topFiveGames as game}
        <div class="steam-game">
          <img 
            src={`https://steamcdn-a.akamaihd.net/steam/apps/${game.appid}/library_600x900.jpg`} 
            alt={game.name}
            width="200"
            height="300"
          >
          <div>
            {game.name}
          </div>
          <div class="playtime">
            {Math.round(game.playtime_forever / 60)} Hours Played
          </div>
        </div>
      {/each}
    </div>
    
    Destiny 2 used to be my daily driver, but lately I've been branching out more into new titles.
    <br>
    Currently I'm playing:
    {#if latestGame}
      <div class="steam-game">
        <img 
          src={`https://steamcdn-a.akamaihd.net/steam/apps/${latestGame.appid}/library_600x900.jpg`} 
          alt={latestGame.name}
          width="200"
          height="300"
        >
        <div>
          {latestGame.name}
        </div>
        <div class="playtime">
          {Math.round(latestGame.playtime_forever / 60)} Hours Played
        </div>
      </div>
    {/if}
    <br>
    And, although I play on PC nowadays, Nintendo still holds my favorite titles in Legend of Zelda, Metroid Prime, and Super Smash Bros.
    <br>
    <br>
    If it's not video games, its magic cards. I enjoy collecting and playing Magic: the Gathering and meet with my friends weekly to terrorize them with a new brew.
    <br>
    <br>
  </div>
</div>

<style lang="scss">
  #steam-games {
    display: flex;
    justify-content: space-evenly;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .steam-game {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .playtime {
    font-size: small;
  }

  @media only screen and (max-width: 1100px) {
    #steam-games {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      img {
        width: 100px;
        height: 130px;
      }
    }

    .steam-game {
      padding-top: 5px;
      padding-bottom: 5px;
    }
  }
</style>