<script>
let count = 0;

function increment () {
  count++;
}

function decrement () {
  count--;
}
</script>

<button on:click={decrement}>Minus en</button>

{#if count < 10}
  <button on:click={increment}>Pluss en</button>
{/if}

<p>Tall: {count}</p>

{#if count > 5}
  <p>Tallet begynner å bli farlig høyt ... </p>
{/if}
