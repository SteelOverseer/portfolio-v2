<script>
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
  <strong>
    <a href="{url}" target="_blank">
      {title}
    </a>
  </strong> - {technologies}
  <hr>
  <div class="card-contents">
    <div class="image-container">
      <img class="image" src="{imagePath}" alt="{alternate}" >
    </div>
    <div>
      {@render children?.()}
    </div>
  </div>
</div>

<style lang="scss">
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