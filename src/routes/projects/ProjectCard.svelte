<script lang="ts">
  import Fa from 'svelte-fa';
  import { faTypescript, faReact, faRust, faVuejs } from '@fortawesome/free-brands-svg-icons';
  import wasmIconPath from '$lib/images/WebAssembly.png';
  import type { Snippet } from 'svelte';

  // Svelte 5 Runes with TypeScript definition
  let {
    title,
    url,
    technologies,
    imagePath,
    alternate,
    children
  }: {
    title: string;
    url: string;
    technologies: string[];
    imagePath: any;
    alternate: string;
    children?: Snippet;
  } = $props();
</script>

<div class="project-card">
  <div class="title-bar">
    <h2>
      <a class="beam-hover" href="{url}" target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </h2> 
    <span class="vertical-divider"></span>
    <div class="tech-icons">
      {#each technologies as tech}
        {#if tech.toLowerCase() === 'typescript'}
          <span class="tech-icon">
            <Fa icon={faTypescript} size="lg" color="#3178C6" />
          </span>
        {:else if tech.toLowerCase() === 'react'}
          <span class="tech-icon">
            <Fa icon={faReact} size="lg" color="#61DBFB" />
          </span>
        {:else if tech.toLowerCase() === 'rust'}
          <span class="tech-icon">
            <Fa icon={faRust} size="lg" color="#D34516" />
          </span>
        {:else if tech.toLowerCase() === 'vue'}
          <span class="tech-icon vue-icon">
            <Fa icon={faVuejs} size="lg" />
          </span>
        {:else if tech.toLowerCase() === 'wasm'}
          <span class="tech-icon wasm-icon">
            <img src="{wasmIconPath}" alt="WASM" />
          </span>
        {:else}
          <span class="tech-badge">{tech}</span>
        {/if}
      {/each}
    </div>
  </div>
  
  <hr class="card-hr">
  
  <div class="card-contents">
    <div class="image-container">
      <enhanced:img class="image" src="{imagePath}" alt="{alternate}" />
    </div>
    <div class="project-description">
      {@render children?.()}
    </div>
  </div>
</div>

<style lang="scss">
  .project-card {
    background: #1a1a1a;
    border: 1px solid #262626;
    padding: 1.5rem;
    margin-bottom: 2rem;
    width: 100%;
    max-width: 850px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    transition: border-color 0.2s ease, transform 0.2s ease;

    &:hover {
      border-color: #660033;
      transform: translateY(-2px);
    }
  }

  .title-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;

    h2 {
      margin: 0;
      font-size: 1.5rem;

      a {
        text-decoration: none;
      }
    }

    .vertical-divider {
      display: inline-block;
      width: 4px;               
      height: 1.25rem;
      background-color: #660033;
      opacity: 0.8;
      border-radius: 2px;
      margin: 0 0.25rem;
    }
  }

  .tech-icons {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .tech-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;

    &.wasm-icon img {
      width: 21px;
      height: 21px;
      object-fit: contain;
    }
  }

  :global(.vue-icon svg path:first-child) { fill: #35495E; }
  :global(.vue-icon svg path:last-child) { fill: #42B883; }

  .tech-badge {
    background: #262626;
    color: #b3b3b3;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  .card-hr {
    border: none;
    height: 1px;
    background: #262626;
    margin: 1rem 0;
  }

  .card-contents {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 1.5rem;
    align-items: start;
  }

  .image-container {
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #262626;
  }

  .image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
  }

  .project-description {
    color: #b3b3b3;
    line-height: 1.6;
    font-size: 1rem;

    :global(p) {
      margin: 0 0 1rem 0;
      &:last-child { margin-bottom: 0; }
    }
  }

  @media (max-width: 700px) {
    .card-contents {
      grid-template-columns: 1fr;
    }
    
    .image {
      height: 180px;
    }
  }
</style>