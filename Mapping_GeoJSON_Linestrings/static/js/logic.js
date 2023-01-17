console.log("workingXYZ");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([44.0, -80.0], 2);

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/chsaporito/Mapping_Earthquakes/main/torontoRoutes.json";
// Add GeoJSON data.

// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data,{
  style: myStyle,
  onEachFeature: function(feature,layyer){
    layyer.bindPopup("<h3> airline: " + feature.properties.airline + "</h3> <r><h3> Destination: "
    + feature.properties.dst + "</h3>" );
  }
})
.addTo(map);
});



let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
light.addTo(map);