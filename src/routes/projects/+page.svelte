<script lang="ts">
  import ProjectCard from "./ProjectCard.svelte";
  import timetracker from '$lib/images/timetracker.webp?enhanced';
  import digitalcookbook from '$lib/images/digitalcookbook_v1.webp?enhanced';
  import cardfinderoutput from '$lib/images/cardfinderoutput.webp?enhanced';
  import gameoflife from '$lib/images/gameoflife.webp?enhanced';
  import gameoflifetui from '$lib/images/gameoflifetui.webp?enhanced';
</script>

<div id="projects">
  <div class="cards-container">
    <ProjectCard
      title="Time Tracker"
      url="https://github.com/SteelOverseer/time-tracker"
      technologies={["Typescript", "React"]}
      imagePath={timetracker}
      alternate="Image of time tracker app"
    >
      <p>A project I worked on to familiarize myself with React.</p>
      <p>I have a need to track my time for contracting work which gave me the idea.</p>
    </ProjectCard>

    <ProjectCard 
      title="Missing Card Finder" 
      url="https://github.com/SteelOverseer/missing-card-finder"
      technologies={["Rust"]}
      imagePath={cardfinderoutput}
      alternate="Example output of missing card finder application"
    >
      <p>A project I worked on to help manage my Magic: the Gathering decks.</p>
      <p>The program iterates over my decklists and my collection file and outputs a list of cards I need to finish my decks. It parses and loads a collection file into a hash map, then loops over the cards in each deck file and compares those cards to a running count of what's left in the collection.</p>
      <p>There is a configuration file that enables the prioritization of specific decks, formats, and even mark decks as foil-only.</p>
    </ProjectCard>

    <ProjectCard 
      title="Digital Cookbook"
      url="https://github.com/SteelOverseer/digital-cookbook"
      technologies={["Typescript", "Vue", "Rust"]}
      imagePath={digitalcookbook}
      alternate="Image of digital cookbook app"
    >
      <p>I've never liked having to rifle through loose paper to find a recipe, so this is my attempt to digitize them completely.</p>
      <p>The API backend is written in Rust to further my learning in systems languages. Vue is my favorite frontend framework, so I paired it with TypeScript to build out the UI interface. Recipe information is fully stored in a PostgreSQL database containerized via Docker.</p>
    </ProjectCard>

    <ProjectCard
      title="TUI Game of Life"
      url="https://github.com/SteelOverseer/rust_tui_game_of_life"
      technologies={["Rust"]}
      imagePath={gameoflifetui}
      alternate="Game of life TUI interface loop"
    >
      <p>I wanted to explore building modern Terminal User Interfaces (TUIs) and had a recent interest in Conway's Game of Life.</p>
      <p>This implementation runs safely inside standard terminal emulators and runs an animated preview using basic blinker pattern.</p>
    </ProjectCard>

    <ProjectCard
      title="Game of Life"
      url="https://github.com/SteelOverseer/game_of_life"
      technologies={["Rust", "WASM"]}
      imagePath={gameoflife}
      alternate="Game of life browser layout"
    >
      <p>Using Rust and the Leptos web framework to build a high-performance Game of Life execution engine targeting WebAssembly directly in the browser.</p>
    </ProjectCard>
  </div>
</div>

<style lang="scss">
  #projects {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 1rem;
    color: #ffffff;
  }

  .projects-header {
    margin-bottom: 3rem;
    
    h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      color: #ffffff;
    }
    
    p {
      color: #b3b3b3;
      font-size: 1.1rem;
      margin: 0;
    }
  }

  .cards-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
</style>