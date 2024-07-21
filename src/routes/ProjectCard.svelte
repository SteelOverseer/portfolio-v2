<script>
	export let title
	export let url
	export let languages
</script>

<div class="project-card">
  <strong>
    <a href="{url}" target="_blank">
      {title}
    </a>
  </strong> - {languages}
  <hr>
    <slot></slot>
</div>

<style lang="scss">
  .project-card {
    border: 2px solid black;
    padding: 1rem;
    margin: 1rem;
    border-radius: 1rem;
    // width: 30rem;
    max-width: 75%;
  }
</style>