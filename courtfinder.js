function initializeMap() {
    //statue of liberty coordinates
    const defaultlocation = { lat: 40.6892, lng: -74.0445 };

    const map = new google.maps.Map(document.getElementById('map'), {
        center: defaultlocation,
        zoom: 13
    });

    //adds autocomplete to location search
    const input = document.getElementById('location-input');
    const autocomplete = new google.maps.places.Autocomplete(input);

    //service to search tennis courts
    const service = new google.maps.places.PlacesService(map);

    //when user selects a place, centers map there
    autocomplete.addListener('place_changed', function() {
        const place = autocomplete.getPlace();

        if (place.geometry) {
            map.setCenter(place.geometry.location);
            map.setZoom(14);

            //searches tennis courts near location
            searchTennisCourts(place.geometry.location, map, service);
        }
    });
}

function searchTennisCourts(location, map, service) {
    const request = {
        location: location,
        radius: 16000, //about 10 miles in meters
        keyword: 'tennis court'
    };

    service.nearbySearch(request, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            results.forEach(function(place) {
                createMarker(place, map);
            });

            console.log('Found ' + results.length + ' tennis courts');
        }
    });
}

function createMarker(place, map) {
    const marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        title: place.name
    });
}

window.onload = initializeMap;