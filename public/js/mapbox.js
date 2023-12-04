const locations = JSON.parse(document.getElementById("map").dataset.locations);
console.log(locations);

mapboxgl.accessToken =
    "pk.eyJ1IjoibWVsb2R5eG8iLCJhIjoiY2xvenJteXlmMDByNTJpbGd2azZ6dGo4OSJ9.qpE-s4RaupFQH2qtZr_fGA";
  
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
});
