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
<button on:click={increment}>Pluss en</button>


<p>Tall: {count}</p>
