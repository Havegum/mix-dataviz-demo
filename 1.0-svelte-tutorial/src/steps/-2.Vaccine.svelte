<script>
import data from '../vaccines.vestland.json';
import { scaleLinear } from 'd3-scale';

let xScale = scaleLinear()
  .domain([0, 12])
  .range([0, 100]);

console.log(data);
</script>


{#each data as kommune}
  <div class="row">
    <p>{kommune.name} - {kommune.firstDosePercent} %</p>

    <div
      class="bar"
      style="width: {xScale(kommune.firstDosePercent)}%"
    />
  </div>
{/each}


<style>
.row {
  margin-bottom: .5em;
  border-bottom: 1px solid lightgray;
}

.bar {
  height: 1em;
  background: black;
}
</style>
