<script>
  import ProjectCard from "../ProjectCard.svelte";
</script>

<div id="projects">
  <ProjectCard 
    title={"Missing Card Finder"} 
    url={"https://github.com/SteelOverseer/missing-card-finder"}
    languages={"Rust"}
  >
    <p>
      A project I worked on to iterate over my decklists and my collection file and output a list of cards I need to finish my decks.
      <br>
      It parses and loads a collection file into a hash map. Then loops over the cards in each deck file and compares to a running count of what's left in the collection.
      There is a configuration file to prioritize decks, formats and mark decks as foil only.
      <br>
      The final output is a formatted text file with my list.
    </p>
  </ProjectCard>
  <ProjectCard 
      title={"Digital Cookbook"}
      url={"https://github.com/SteelOverseer/digital-cookbook"}
      languages={"Vue, Rust"}
  >
    <p>
      I've never liked having to rifle through loose paper to find a recipe, this is my attempt to digitize them.
      <br>
      The API is written in Rust, which I chose to further my learning in the language. 
      Vue is my favorite frontend framework so I chose that for the frontend to further my mastery.
      <br>
      Recipe information is stored in a Postgres database in a docker image.
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