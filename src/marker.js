const mapboxgl = require('mapbox-gl');

module.exports = (type, coords) => {
  let markerDomEl = document.createElement('div');
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  let urlOfMarkerImage = '';
  switch(type) {
    case "activity": 
    urlOfMarkerImage = "http://i.imgur.com/WbMOfMl.png";
    break;
    case "hotel":
    urlOfMarkerImage = "http://i.imgur.com/D9574Cu.png";
    break;
    case "restaurant":
    urlOfMarkerImage = "http://i.imgur.com/cqR6pUI.png"
    break;
    default:
    urlOfMarkerImage = "http://i.imgur.com/WbMOfMl.png";
  }
  markerDomEl.style.backgroundImage = `url(${urlOfMarkerImage})`;
  return new mapboxgl.Marker(markerDomEl).setLngLat(coords);
}
