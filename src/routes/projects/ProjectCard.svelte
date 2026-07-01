<script>
  import Fa from 'svelte-fa';
  import { faTypescript, faReact, faRust, faVuejs } from '@fortawesome/free-brands-svg-icons';
  import wasmIconPath from '$lib/images/WebAssembly.png'
  let {
    title,
    url,
    technologies,
    imagePath,
    alternate,
    children
  } = $props();

</script>

<div class="project-card">
  <div class="title-bar">
    <h2 style="margin: 0px;">
      <a href="{url}" target="_blank">
        {title}
      </a>
    </h2> 
    &nbsp;-
    <div class="tech-icons">
      {#each technologies as tech}
        {#if tech.toLowerCase() == 'typescript'}
          <span class="tech-icon">
            <Fa 
              icon={faTypescript}
              size="lg"
              color="#3178C6"
            />
          </span>
        {:else if tech.toLowerCase() == 'react'}
          <span class="tech-icon">
            <Fa 
              icon={faReact}
              size="lg"
              color="#61DBFB"
            />
          </span>
        {:else if tech.toLowerCase() == 'rust'}
          <span class="tech-icon">
            <Fa 
              icon={faRust}
              size="lg"
              color="#D34516"
            />
          </span>
        {:else if tech.toLowerCase() == 'vue'}
          <span class="tech-icon">
            <Fa 
              icon={faVuejs}
              size="lg"
              primaryColor="#42B883"
            />
          </span>
        {:else if tech.toLowerCase() == 'wasm'}
          <span class="tech-icon" style="width: 21px; height: 21px">
            <img
              src="{wasmIconPath}"
              alt="WASM"
              width="21px"
              height="21px"
            />
          </span>
        {:else}
          {tech}
        {/if}
      {/each}
    </div>
  </div>
  <hr>
  <div class="card-contents">
    <div class="image-container">
      <enhanced:img class="image" src="{imagePath}" alt="{alternate}" >
    </div>
    <div>
      {@render children?.()}
    </div>
  </div>
</div>

<style lang="scss">
  .title-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .tech-icons {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tech-icon {
    margin-left: 5px;
  }

  .project-card {
    border: 3px solid #660033;
    padding: 1rem;
    margin: 1rem;
    border-radius: 1rem;
    width: 75%;
    box-shadow: #000000 6px 2px 8px 0px;
  }
  .card-contents {
    display: flex;
    flex-direction: row;
  }
  .image-container {
    margin-right: 5px;
  }
  .image {
    width: 300px;
    height: 200px;
  }

  @media only screen and (max-width: 650px) {
    .card-contents {
      flex-direction: column;
    }

    .image {
      width: 280px;
      height: 200px;
    }
  }

  @media only screen and (max-width: 400px) {
    .card-contents {
      flex-direction: column;
    }

    .image {
      width: 260px;
      height: 200px;
    }
  }
</style>