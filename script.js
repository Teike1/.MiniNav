var map = L.map('map').setView([52.37, 4.89], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap-bijdragers'
}).addTo(map);

navigator.geolocation.getCurrentPosition(function(location) {
    var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
    var marker = L.marker(latlng).addTo(map).bindPopup("Je bent hier").openPopup();
    map.setView(latlng, 14);
});