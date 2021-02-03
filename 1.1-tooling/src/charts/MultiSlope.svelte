<script>
import { scaleLinear } from 'd3-scale';
import { draw, fade } from 'svelte/transition';

const data = [
  {
    year: 2019,
    unemployment: {
      '15-29': 2.9,
      '30-74': 2.2,
    }
  },
  {
    year: 2020,
    unemployment: {
      '15-29': 18.0,
      '30-74': 9.3,
    }
  }
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

function y (field) {
  return function y (dataPoint) {
    return yScale(dataPoint.unemployment[field]);
  }
}

let visible = true;
const fields = ['15-29', '30-74'];
</script>

<button on:click={() => visible = !visible}>Vis / skjul</button>

{#if visible}
  <svg width="500px" height="300px" out:fade>
    <text class="axis-y" y={yScale(0)}>0 %</text>
    <text class="axis-y" y={yScale(10)}>10</text>
    <text class="axis-y" y={yScale(20)}>20 %</text>

    <text x={xScale(2019)} y={yScale(0) + 15}>2019</text>
    <text x={xScale(2020)} y={yScale(0) + 15}>2020</text>

    {#each fields as field}
      <line
        in:draw
        x1={x(data[0])}
        x2={x(data[1])}
        y1={y(field)(data[0])}
        y2={y(field)(data[1])}
      />
      <text x={xScale(2020)} y={y(field)(data[1])} style="text-anchor: end">
        {field}: {data[1].unemployment[field]} %
      </text>
    {/each}
  </svg>
{/if}

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
