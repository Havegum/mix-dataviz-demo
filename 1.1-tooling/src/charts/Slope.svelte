<script>
import { scaleLinear } from 'd3-scale';

const data = [
  { year: 2019, unemployment:  2.4 },
  { year: 2020, unemployment: 11.3 }
];

const xScale = scaleLinear()
  .range([0, 500])
  .domain([2019, 2020]);

const yScale = scaleLinear()
  .range([300, 0])
  .domain([0, 20]);

function x (dataPoint) {
  return xScale(dataPoint.year);
}

function y (dataPoint) {
  return yScale(dataPoint.unemployment);
}
</script>


<svg width="500px" height="300px">
  <text class="axis-y" y={yScale(0)}>0 %</text>
  <text class="axis-y" y={yScale(10)}>10</text>
  <text class="axis-y" y={yScale(20)}>20 %</text>

  <text x={xScale(2019)} y={yScale(0) + 15}>2019</text>
  <text x={xScale(2020)} y={yScale(0) + 15}>2020</text>

  <line
    x1={x(data[0])}
    x2={x(data[1])}
    y1={y(data[0])}
    y2={y(data[1])}
  />
</svg>


<style>
svg {
  display: block;
  background-color: ghostwhite;
  border: 1px solid lightgray;
  margin: 1em auto;
  overflow: visible;
}

text {
  text-anchor: middle;
}
</style>
