<script>
let name = 'mix';
let image = 'success.png';
</script>

<h1>Hei, {name.toUpperCase()}!</h1>
<img src={image} />

<input type="text" bind:value={name} />
