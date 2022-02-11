function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

mapboxgl.setRTLTextPlugin("https://cdn.maptiler.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js");
if (!mapboxgl.supported()) {
    alert('Your browser does not support Mapbox GL');
} else {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWlyaGFuYWxtZW5kaSIsImEiOiJja2lucnd2aHoxNXVuMnJxaTBpMjVrYXRtIn0.k7AbqrWbOs6laf32LcO-zQ';
    var map = new mapboxgl.Map({
        container: "map",
        style: 'https://api.maptiler.com/maps/hybrid/style.json?key=tZMlb0zrjdlBAH5xMniY',
        center: [40.75054, 29.93184],
        zoom: 10,
        interactive: false,
        projection: 'equirectangular'
    });
    map.getCanvas().style.cursor = "crosshair";
    document.getElementById("map").style.display = "block";
    map.resize();
    map.on("load", function() {
        map.fitBounds([
            [29.21250, 40.95709],
            [30.66819, 40.52529]
        ]);
        new mapboxgl.Marker()
            .setLngLat([29.8286647, 40.7575925])
            .setPopup(new mapboxgl.Popup({ offset: 25 }).setText('1 Construction on the Washington Monument began in 1848.'))
            .addTo(map);

        // Create a default Marker, colored black, rotated 45 degrees.
        new mapboxgl.Marker()
            .setLngLat([29.7926928, 40.6030513])
            .setPopup(new mapboxgl.Popup({ offset: 25 }).setText('2 Construction on the Washington Monument began in 1848.'))
            .addTo(map);
    })
}

function randomString(length) {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}