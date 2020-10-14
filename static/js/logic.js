

const API_KEY = "pk.eyJ1IjoiZXZhbi1yZWV2ZXMiLCJhIjoiY2tnOG9qNmk1MDA5dzJ5cWQyZnU1eDNraiJ9.cizxjMqYDChKKheSJSy2fA";

// Creating map object
var myMap = L.map("map", {
    center: [37.80, -122.27],
    zoom: 11
  });
  
  // create tile layer 
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);
  


  
// reading geojson data
    d3.json('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson', function(response) {
  
    var markers = L.markerClusterGroup;
  
    // for (var i = 0; i < response.length; i++) {

       var location = [response.features[0].geometry.coordinates[0], response.features[0].geometry.coordinates[1]];
        console.log(location)
    //   if (location) {
  
    //     markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]])
    //       .bindPopup(response[i].descriptor));
    //   }
  
    // }
  
    // Add our marker cluster layer to the map
    // myMap.addLayer(markers);
  
  });
  