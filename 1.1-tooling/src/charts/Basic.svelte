<script>
let count = 0;

function increment () {
  count = count + 1;
}

function decrement () {
  count = count - 1;
}
</script>


<p>Svelte ser ut som vanlig HTML, CSS og Javascript. En av de viktigste forskjellene er at du kan ha Javascript midt i HTML-blokker</p>
<p>For eksempel kan vi få denne telleren til å styres av Javascript:</p>

<div>
  Teller:
  <button disabled={count <= 0} on:click={decrement}>-</button>
  <p class="counter">{count}</p>
  <button on:click={increment}>+</button>
</div>

<div>
  <p>Hvis vi trenger mer kontroll kan vi også styre den med et input:</p>
  <input type="range" min="0" max="50" bind:value={count}/>
</div>

<style>
p {
  margin-block-end: .5em;
  margin-block-start: .5em;
}

button, .counter {
  display: inline-block;
  text-align: center;
  width: 2em;
  font-weight: bold;
}
</style>
