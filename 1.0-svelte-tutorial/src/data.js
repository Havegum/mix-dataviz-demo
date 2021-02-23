import timeseries from './timeseries.json';

function parseDateISOString (str) {
  if (!str) return new Date(NaN);
  // https://stackoverflow.com/a/42626876
  const date = str.split(/\D+/).map(digit => parseInt(digit)).slice(0, 6);
  date[1] = date[1] - 1; // adjust month
  return new Date(...date);
}

function parse (ts) {
  return ts.map(d => {
    d.date = parseDateISOString(d.date);
    return d;
  });
}

const data = parse(timeseries);

export function getAsyncData (ms=800) {
  return new Promise(resolve => {
    setTimeout(resolve(data), ms + Math.random() * 200)
  });
}

export default data;
