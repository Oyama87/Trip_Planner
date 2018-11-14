const mapboxgl = require("mapbox-gl");
const markerBuilder = require('./marker.js');

mapboxgl.accessToken = require('../mapboxToken.js').token;
const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10"
});

markerBuilder("restaurant", [-74.009151, 40.705086]).addTo(map);
