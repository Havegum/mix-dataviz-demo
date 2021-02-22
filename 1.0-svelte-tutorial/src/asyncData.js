import timeseries from './timeseries.json';


export default function getData (ms=800) {
  return new Promise(resolve => {
    setTimeout(resolve(timeseries), ms + Math.random() * 200)
  });
}
