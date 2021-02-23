<script>
import { slide } from 'svelte/transition';
export let visible = false;
</script>


<section>
  <label>
    <p>{visible ? 'Skjul' : 'Vis'}
    <input type="checkbox" bind:checked={visible}/>
  </label>

  <div class="content" class:visible>
    {#if visible}
      <div transition:slide={{ duration: 400 }}>
        <slot/>
      </div>
    {/if}
  </div>
</section>


<style>
section {
  position: relative;
}

.content {
  background-color: white;
  padding: .75em;
  box-shadow: 0 2px 16px #0002;
  border-radius: 3px;
  opacity: 0.2;
  transition: opacity 400ms;
  min-height: 5em;
  overflow: hidden;
}

.visible {
  opacity: 1;
}

.content div {
  min-height: 2em;
}

input {
  display: none;
}

label {
  position: absolute;
  right: 0;
  z-index: 1;
  background-color: #f3f3f3;
  padding: 4px 1em;
  border-radius: 0 0 0 8px;
  user-select: none;
  cursor: pointer;
  font-size: .8em;
  width: 5em;
  text-align: center;
}

label:hover,
label:active,
label:focus {
  background-color: #c9c9c9;
}
</style>
