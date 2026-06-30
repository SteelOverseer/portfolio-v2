<script>
/**
  * @typedef {Object} RecentlyPlayedGame
  * @property {string} appid
  * @property {string} name
  * @property {number} playtime_2weeks
  * @property {number} playtime_forever
  * @property {string} img_icon_url
  * @property {string} img_logo_url
*/

/**
  * @typedef {Object} OwnedGame
  * @property {string} appid
  * @property {string} name
  * @property {number} playtime_2weeks
  * @property {number} playtime_forever
  * @property {string} img_icon_url
  * @property {string} img_logo_url
  * @property {boolean} has_community_visible_stats
*/

  let { data } = $props()
  const allGames = $derived(data?.ownedGames.response.games);

  /** @type { OwnedGame[] } */
  const topFiveGames = $derived(allGames?.sort((a, b) => b.playtime_forever - a.playtime_forever).slice(0,5));

  /** @type { RecentlyPlayedGame } */
  const latestGame = $derived(data?.recentlyPlayed?.response.games[0])
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
    I've been an avid gamer my entire life, a hobby that started while I was young playing 
    titles like <em>Legend of Zelda</em>, <em>Metroid Prime</em>, and <em>Super Smash Bros.</em> on Nintendo has evolved into playing 
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
    <div id="currently-playing">
      <span id="currently-playing-blurb">
        <p>
          <em>Destiny 2</em> used to be my daily driver, but lately I've been branching out more into new titles.
        </p>
        Currently I'm playing:
      </span>
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
    </div>
    <br>
      <p>
        Beyond video games, my biggest passion is <strong>Magic: The Gathering</strong>. 
        I've been playing casually since 2007, and now I meet up with friends weekly to play Commander.
        Head on over to the library tab to check out some of my commanders!
      </p>
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

  #currently-playing {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    #currently-playing-blurb {
      padding-right: 5px;
      width: 300px;
    }
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

    #currently-playing {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      #currently-playing-blurb {
        padding-right: 5px;
        width: 100%;
      }
    }

    .steam-game {
      padding-top: 5px;
      padding-bottom: 5px;
    }
  }
</style>