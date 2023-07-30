const apiKey = 'AIzaSyDEiMCq9ONuTeXk-KQQP5DaucIX6ll8xho';
const locationToSearch = 'Eiffel Tower, Paris, France'; // Replace this with the location you want to search for

const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(locationToSearch)}&key=${apiKey}`;

// Make the API request
fetch(geocodeUrl)
    .then((response) => response.json())
    .then((data) => {
        // Parse the response and extract relevant data
        if (data.results.length > 0) {
            const locationInfo = data.results[0];
            const formattedAddress = locationInfo.formatted_address;
            const latitude = locationInfo.geometry.location.lat;
            const longitude = locationInfo.geometry.location.lng;

            console.log('Formatted Address:', formattedAddress);
            console.log('Latitude:', latitude);
            console.log('Longitude:', longitude);
        } else {
            console.log('Location not found.');
        }
    })
    .catch((error) => {
        console.error('Error fetching geolocation:', error);
    });
