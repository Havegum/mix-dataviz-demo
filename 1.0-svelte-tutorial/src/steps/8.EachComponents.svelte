<script>
import Post from './components/Post.svelte';

let messages = [
  { text: 'Dette er en tekst',       color: 'teal',       points:  4 },
  { text: 'Her kommer en tekst til', color: 'salmon',     points: -3 },
  { text: 'Siste tekst i listen!',   color: 'lightgreen', points:  1 },
];
</script>


<Post text="Dette er en tekst" color="teal" points="2"/>
