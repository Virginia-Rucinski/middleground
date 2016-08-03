var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function initialize() {
    directionsDisplay = new google.maps.DirectionsRenderer();
    var philly = new google.maps.LatLng(39.9525839, -75.1652215); //initialize the first value
    var mapOptions = {
        zoom: 9,
        center: philly
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions); //mapOptions call from above //displays the map
    directionsDisplay.setMap(map); //shows the directions
}

function calcRoute() {

    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;
    var request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.TRANSIT 

    };
    directionsService.route(request, function (response, status) {

        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
            var numberofWaypoints = response.routes[0].overview_path.length;
            
            var midPoint=response.routes[0].overview_path[parseInt( numberofWaypoints / 2)];
            var marker = new google.maps.Marker({
                map: map,
                position:new google.maps.LatLng(midPoint.lat(),midPoint.lng()),
                title :'Mid Point'
            });
            google.maps.event.addListener(marker,'click',function() { //zooms in
              map.setZoom(9);
              map.setCenter(marker.getPosition());
            });
        }
    });
}

google.maps.event.addDomListener(window, 'load', initialize); //load
