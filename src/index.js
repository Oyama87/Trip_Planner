const mapboxgl = require("mapbox-gl");

<<<<<<< HEAD
mapboxgl.accessToken = require("../mapboxToken").token;
console.log(typeof mapboxgl.accessToken)
=======
mapboxgl.accessToken = 'pk.eyJ1IjoibWVsaGhlcnNoIiwiYSI6ImNqb2c4a2lnNDBjanozcHBuZ2kxOW03dWgifQ.yPWvIuGgF3V-7NvD7axhng';

>>>>>>> 75b41087f5d3497b28db0190bc0946e64591f402
const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10"
});

let markerDomEl = document.createElement('div');
markerDomEl.style.width = "32px";
markerDomEl.style.heights = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker().setLngLat([-74.009151, 40.705086]).addTo(map);