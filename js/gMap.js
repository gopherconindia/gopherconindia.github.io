function initialize() {
    var indiaAddress = '<div id="map-content">' +
        '<a target="_blank" href="https://www.google.co.in/maps/place/Qwinix+Technologies+Inc/@12.34856,76.629974,17z/data=!3m1!4b1!4m2!3m1!1s0x0:0xeec6084d16e6c367">LET US MEET HERE</a>' +
        '<p><strong>Qwinix Technologies Pvt. Ltd.</strong></p>' +
        '<p>#223, Shree Complex KRS Main Road,</p>' +
        '<p>Metagalli, Mysore – 570016' +
        '</div>';

    var LocationData = [ [12.34856, 76.629974, indiaAddress ] ];

    var mapOptions = { zoom: 14, mapTypeId: google.maps.MapTypeId.ROADMAP, scrollwheel: false, navigationControl: false, mapTypeControl: false, scaleControl: false, draggable: true, styles: [
        {"featureType": "landscape", "stylers": [
            {"saturation": -100},
            {"lightness": 65},
            {"visibility": "on"}
        ]},
        {"featureType": "poi", "stylers": [
            {"saturation": -100},
            {"lightness": 51},
            {"visibility": "simplified"}
        ]},
        {"featureType": "road.highway", "stylers": [
            {"saturation": -100},
            {"visibility": "simplified"}
        ]},
        {"featureType": "road.arterial", "stylers": [
            {"saturation": -100},
            {"lightness": 30},
            {"visibility": "on"}
        ]},
        {"featureType": "road.local", "stylers": [
            {"saturation": -100},
            {"lightness": 40},
            {"visibility": "on"}
        ]},
        {"featureType": "transit", "stylers": [
            {"saturation": -100},
            {"visibility": "simplified"}
        ]},
        {"featureType": "administrative.province", "stylers": [
            {"visibility": "off"}
        ]},
        {"featureType": "water", "elementType": "labels", "stylers": [
            {"visibility": "on"},
            {"lightness": -25},
            {"saturation": -100}
        ]},
        {"featureType": "water", "elementType": "geometry", "stylers": [
            {"hue": "#ffff00"},
            {"lightness": -25},
            {"saturation": -97}
        ]}
    ] };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var bounds = new google.maps.LatLngBounds();
    var infowindow = new google.maps.InfoWindow();

    for (var i in LocationData) {
        var p = LocationData[i];
        var latlng = new google.maps.LatLng(p[0], p[1]);
        bounds.extend(latlng);

        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: p[2]
        });

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(this.title);
            infowindow.open(map, this);
        });
    }

    map.fitBounds(bounds);
}

google.maps.event.addDomListener(window, 'load', initialize);