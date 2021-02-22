<script>
import Slot from './components/Slot.svelte';

import HelloWorld from './steps/0.HelloWorld.svelte';
import CurlyBraces from './steps/1.CurlyBraces.svelte';
import Attributes from './steps/2.Attributes.svelte';
</script>


<main>
  <Slot>
    <HelloWorld/>
  </Slot>

  <Slot>
    <CurlyBraces/>
  </Slot>

  <Slot>
    <Attributes/>
  </Slot>
</main>


<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');

:global(html) {
  min-height: 100vh;
  background-color: ghostwhite;
}

:global(*) {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

main {
  margin: 2em 0;
  font-family: Inter, sans-serif;
  color: #333;
  display: grid;
  grid-template-columns: 1fr min(612px, calc(100% - 1em)) 1fr;
  grid-gap: 4em .5em;
}

main > :global(*) {
  grid-column: 2 / 3;
}

:global(img) {
  display: block;
  width: 100%;
}
</style>
