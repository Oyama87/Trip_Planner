const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = require("../mapboxToken").token;
console.log(typeof mapboxgl.accessToken)
const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10"
});
