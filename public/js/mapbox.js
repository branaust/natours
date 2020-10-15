/* eslint-disable */
const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoiYnJhbmF1c3QiLCJhIjoiY2tnOHVibGllMDVuYjJ5cHFmbmpucndwZSJ9.KBzYV-QSHSChEb6QJpNpdg';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/branaust/ckgac0pdn0j3e19nq9uy9he0m',
  scrollZoom: false,
  // center: [-118.113491, 34.111745],
  // zoom: 4,
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach((loc) => {
  // Create marker
  const el = document.createElement('div');
  el.className = 'marker';

  // Add marker
  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom',
  })
    .setLngLat(loc.coordinates)
    .addTo(map);

  // Add Popup
  new mapboxgl.Popup({
    offset: 40,
  })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
    .addTo(map);

  // Extend map bounds to include current location
  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: {
    top: 200,
    bottom: 150,
    left: 100,
    right: 100,
  },
});
