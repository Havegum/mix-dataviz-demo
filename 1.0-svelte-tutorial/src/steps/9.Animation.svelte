<script>
import { fade } from 'svelte/transition';
import Post from './components/Post.svelte';

let messages = [
  { text: 'Dette er en tekst',       color: 'teal',       points:  4 },
  { text: 'Her kommer en tekst til', color: 'salmon',     points: -3 },
  { text: 'Siste tekst i listen!',   color: 'lightgreen', points:  1 },
];

let visible = true;
</script>

<input type="checkbox" bind:checked={visible}/>

{#if visible}
  <div transition:fade={{ duration: 2000 }}>
    {#each messages as message}
      <Post {...message} />
    {/each}
  </div>
{/if}
