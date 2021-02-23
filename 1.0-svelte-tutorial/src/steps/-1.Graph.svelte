<script>
import data from '../data.js';
import { scaleTime, scaleLinear } from 'd3-scale';
import { line } from 'd3-shape';

let startDate = new Date('2020-02-25');
let endDate =  new Date('2021-02-23');

let xScale = scaleTime()
  .domain([startDate, endDate])
  .range([0, 500]);

let yScale = scaleLinear()
  .domain([0, 130])
  .range([0, 300])

let draw = line()
  .x(d => xScale(d.date))
  .y(d => 300 - yScale(d.rollingAvg));
</script>


<svg width="500px" height="320px">
  <g class="axes">
    <g class="x-axis">
      {#each xScale.ticks(7) as tick}
        <line x1={xScale(tick)} x2={xScale(tick)} y1="299" y2="304" stroke="black"/>
        <text x="{xScale(tick)}" y="315">{tick.toLocaleString('nb-NO', { month: 'short' })}</text>
      {/each}
    </g>

    <g class="y-axis">
      {#each yScale.ticks(5) as tick}
        <line x1="-20" x2="500" y1={300 - yScale(tick)} y2={300 - yScale(tick)} stroke="black"/>
        <text x="0" y={300 - yScale(tick) - 2}>{tick}</text>
      {/each}
    </g>
  </g>


  {#each data as day}
    <rect
      width={500 / data.length}
      y={300 - yScale(day.newCases)}
      x={xScale(day.date)}
      height={yScale(day.newCases)}
    />
  {/each}

  <path d="{draw(data)}"/>

</svg>


<style>
.x-axis {
  text-anchor: middle;
  font-size: 14px;
  fill: #5b5757;
}

.y-axis {
  text-anchor: end;
  font-size: 14px;
  fill: #5b5757;
}

.y-axis line {
  stroke: lightgray;
}

path {
  fill: none;
  stroke-width: 2;
  stroke-linejoin: round;

  stroke: blue;
}

rect {
  fill: blue;
  opacity: 0.2;
}

svg {
  overflow: visible;
  margin-left: 20px;
}
</style>
