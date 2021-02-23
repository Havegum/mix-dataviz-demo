<script>
export let color = 'salmon';
export let text = '';
export let points = 0;
</script>


<article style="background-color: {color};">
  <p class="post">{text}</p>

  <div class="points">
    <button class="downvote">˅</button>
    <p>{points}</p>
    <button class="upvote">˄</button>
  </div>
</article>


<style>
article {
  padding: .5em;
  color: white;
  min-height: 6em;
  display: grid;
  grid-template-rows: 1fr auto;
  margin-bottom: 1px;
}

button {
  background-color: transparent;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transform: scaleX(1.666);
  opacity: 0.75;
}

.post {
  font-size: 1.2em;
  margin: 0;
  padding: 0;
  opacity: .9;
}

button:hover {
  opacity: 1;
}

button.down:active {
  transform: scaleX(1.666) translateY(1px);
}

button.up:active {
  transform: scaleX(1.666) translateY(-1px);
}

.points {
  display: flex;
  justify-self: end;
}

.points * {
  text-align: center;
  width: 2.5em;
  margin: 0;
  padding: 0;
}
</style>
