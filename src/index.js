const mapboxgl = require("mapbox-gl");
const markerBuilder = require('./marker.js');

mapboxgl.accessToken = "pk.eyJ1IjoibWVsaGhlcnNoIiwiYSI6ImNqb2c4a2lnNDBjanozcHBuZ2kxOW03dWgifQ.yPWvIuGgF3V-7NvD7axhng";
const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10"
});

markerBuilder("restaurant", [-74.009151, 40.705086]).addTo(map);
