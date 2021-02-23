<script>
let texts = [
  'Dette er en tekst',
  'Her kommer en tekst til',
  'Siste tekst i LISTEN!',
  'Siste tekst i LISTEN!',
  'Siste tekst i LISTEN!',
  'Siste tekst i LISTEN!',
];
</script>


{#each texts as text}
  <p>{text}</p>
{/each}
