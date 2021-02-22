<script>
import Slot from './Slot.svelte';

import HelloWorld from './steps/0.HelloWorld.svelte';
import CurlyBraces from './steps/1.CurlyBraces.svelte';
import Attributes from './steps/2.Attributes.svelte';
import Components from './steps/3.Components.svelte';
import Events from './steps/4.Events.svelte';
import Bindings from './steps/5.Bindings.svelte';
import Graph from './steps/-1.Graph.svelte';
</script>


<main>
  <Slot visible={true}>
    <HelloWorld/>
  </Slot>

  <Slot>
    <CurlyBraces/>
  </Slot>

  <Slot>
    <Attributes/>
  </Slot>

  <Slot>
    <Components/>
  </Slot>

  <Slot>
    <Events/>
  </Slot>

  <Slot>
    <Bindings/>
  </Slot>

  <Slot>
    <Graph/>
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
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
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
