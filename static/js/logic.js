//following leaflet quickstart guide
//initialize map
// var mymap = L.map('map').setView([37.80, 122.27], 13);

//create geojson layer
var geoLayer = L.geoJSON().addTo(map);
geoLayer.addData('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson')