<script>
  import ProjectCard from "./ProjectCard.svelte";
  import timetracker from '$lib/images/timetracker.webp'
  import digitalcookbook from '$lib/images/digitalcookbook_v1.webp'
  import cardfinderoutput from '$lib/images/cardfinderoutput.webp'
  import gameoflife from '$lib/images/gameoflife.webp'
  import gameoflifetui from '$lib/images/gameoflifetui.webp'
</script>

<div id="projects">
  <br>
  <ProjectCard
    title={"Time Tracker"}
    url={"https://github.com/SteelOverseer/time-tracker"}
    technologies="Typescript, React"
    imagePath="{timetracker}"
    alternate={"Image of time tracker app"}
  >
    <p>
      A project I worked on to familiarize myself with React. I have a need to track my time for contracting work which gave me the idea.
    </p>
  </ProjectCard>

  <ProjectCard 
    title={"Missing Card Finder"} 
    url={"https://github.com/SteelOverseer/missing-card-finder"}
    technologies={"Rust"}
    imagePath={cardfinderoutput}
    alternate={"Example output"}
  >
    <p>
      A project I worked on to iterate over my decklists and my collection file and output a list of cards I need to finish my decks.
      <br><br>
      It parses and loads a collection file into a hash map. Then loops over the cards in each deck file and compares to a running count of what's left in the collection.
      There is a configuration file to prioritize decks, formats and mark decks as foil only.
      <br><br>
      The final output is a formatted text file with my list.
    </p>
  </ProjectCard>

  <ProjectCard 
    title={"Digital Cookbook"}
    url={"https://github.com/SteelOverseer/digital-cookbook"}
    technologies={"Typescript, Vue, Rust"}
    imagePath={digitalcookbook}
    alternate={"Image of digital cookbook app"}
  >
    <p>
      I've never liked having to rifle through loose paper to find a recipe, this is my attempt to digitize them.
      <br><br>
      The API is written in Rust, which I chose to further my learning in the language. 
      Vue is my favorite frontend framework so I chose that for the frontend to further my mastery.
      <br><br>
      Recipe information is stored in a Postgres database in a docker image.
    </p>
  </ProjectCard>

  <ProjectCard
    title={"TUI Game of Life"}
    url={"https://github.com/SteelOverseer/rust_tui_game_of_life"}
    technologies={"Rust"}
    imagePath={gameoflifetui}
    alternate={"Game of life TUI"}
  >
    <p>
      I wanted to build a TUI and had a recent interest in Conway's Game of Life.
      <br><br>
      Game of Life runs as a TUI and just plays a blinker pattern.
    </p>
  </ProjectCard>

  <ProjectCard
    title={"Game of Life"}
    url={"https://github.com/SteelOverseer/game_of_life"}
    technologies={"Rust, WASM"}
    imagePath={gameoflife}
    alternate={"Game of life"}
  >
    <p>
      Using Rust and Leptos to build a simple Game of Life implementation for the web. 
    </p>
  </ProjectCard>
</div>

<style lang="scss">
  #projects {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>