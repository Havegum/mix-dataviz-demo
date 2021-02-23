<script>
// først: console.log(data)
// Så, #each row
// style rows

// import scaleLinear from d3-scale

import { scaleLinear } from 'd3-scale';
import data from '../vaccines.vestland.json';


let xScale = scaleLinear()
  .domain([0, 12])
  .range([0, 100]);
</script>


{#each data as kommune}
  <div class="row">
    <p>{kommune.name}: {kommune.firstDosePercent} %<p>
    <div class="bar" style="width: {xScale(kommune.firstDosePercent)}%"></div>
  </div>
{/each}


<style>
.row {
  margin-bottom: 0.5em;
  border-bottom: 1px solid lightgray;
}

.bar {
  height: 1em;
  background: black;
}
</style>
