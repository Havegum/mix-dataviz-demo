<script>
import Post from './Post.svelte';
</script>


<main>
  <Post points="42" color="cadetblue">Dette er et innlegg. Supert!</Post>
  <Post points="7" color="steelblue">Dette er et nytt innlegg ... wow!</Post>
  <Post points="-12" color="goldenrod">Dette er et innlegg med minuspoeng :(</Post>
</main>


<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');

main {
  font-family: 'Inter', sans-serif;
  display: grid;
  grid-gap: 2px;

  grid-auto-rows: auto;

  grid-template-columns:
    1fr
    min(100%, 612px)
    1fr;
}

main > :global(*) {
  grid-column: 2 / 3;
}
</style>
