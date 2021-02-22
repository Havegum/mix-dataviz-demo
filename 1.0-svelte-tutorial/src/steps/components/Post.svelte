<!-- Todo: text, color, points -->
<article style="background-color: salmon;">
  <p class="post">Dette er et innlegg!</p>

  <div class="points">
    <button class="downvote">˅</button>
    <p>0</p>
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
