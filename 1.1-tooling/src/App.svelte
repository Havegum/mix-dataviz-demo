<script>
import Basic from './charts/Basic.svelte';
import Slope from './charts/Slope.svelte';
import MultiSlope from './charts/MultiSlope.svelte';
</script>


<article>
  <h1>Interaktive grafer med Svelte og D3</h1>

  <section>
    <h2>Interaktivitet i Svelte</h2>
    <Basic />
  </section>

  <section>
  <h2>Arbeidsledighet 2019–2020</h2>
  <Slope />
  </section>

  <section>
    <h2>Arbeidsledighet 2019–2020, pr. aldersgruppe</h2>
    <MultiSlope />
  </section>
</article>


<style>
article {
  display: grid;
  grid-template-columns: 1fr min(100%, 65ch) 1fr;
}

article > * {
  grid-column: 2 / 3;
}

section {
  width: 100%;
  max-width: 65ch;
  min-height: 12em;
  background-color: white;
  box-shadow: 0 2px 1em #0002;
  border-radius: 5px;
  border: 1px solid lightgray;
  margin: 1em auto;
  padding: .5em;
  resize: both;
  overflow: auto;
}
</style>
