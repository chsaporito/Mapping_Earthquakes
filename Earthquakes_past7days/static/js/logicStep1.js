console.log("working");

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,  
    accessToken: API_KEY,
});

// We create the tile layer that will be the background of our map.
let SataliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,  
    accessToken: API_KEY,
});

let baseMaps={
  "Streets": streets,
  "Satalite Streets:": SataliteStreets
};

let map = L.map('mapid',{
    center: [39.5, -98.5],
    zoom: 3,
    layers: [SataliteStreets]
});

  L.control.layers(baseMaps).addTo(map);


// Retrieve the earthquake GeoJSON data.
var eatqukeData="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
d3.json(eatqukeData).then(function(data){
    console.log(data);
    L.geoJSON(data).addTo(map);
});