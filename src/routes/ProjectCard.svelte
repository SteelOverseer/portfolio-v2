<script>
	export let title
	export let url
	export let technologies
  export let imagePath
  export let alternate
</script>

<div class="project-card">
  <strong>
    <a href="{url}" target="_blank">
      {title}
    </a>
  </strong> - {technologies}
  <hr>
    <table>
      <tr>
        <td>
          <img src="{imagePath}" alt="{alternate}" width="300" height="200">
        </td>
        <td>
          <slot></slot>
        </td>
      </tr>
    </table>
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
</style>