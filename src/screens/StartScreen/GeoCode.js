import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';



const App = () => {
    const [address, setAddress] = useState('');
    const [coordinates, setCoordinates] = useState(null);
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


    const handleSearchAddress = async () => {
        try {
            const apiKey = 'AIzaSyDEiMCq9ONuTeXk-KQQP5DaucIX6ll8xho'; // Replace with your actual API key
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
                    address
                )}&key=${apiKey}`
            );

            const data = await response.json();
            if (data.status === 'OK' && data.results.length > 0) {
                const { location } = data.results[0].geometry; // Fix variable name conflict
                setCoordinates({
                    latitude: address.lat, // Correct assignment
                    longitude:address.lng, // Correct assignment
                });
            }
        } catch (error) {
            console.error('Error searching address:', error);
        }
    };

    const handleSearchInputChange = (text) => {
        setAddress(text);
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', padding: 10 , borderRadius: 50}}>
                {/*<TextInput*/}
                {/*    style={{ flex: 1, borderRadius: 20, marginRight: 20, borderColor: 'gray', borderWidth: 1 }}*/}
                {/*    value={address}*/}
                {/*    onChangeText={handleSearchInputChange} // Update input change handler*/}
                {/*    placeholder="Enter an address"*/}
                {/*    onSubmitEditing={handleSearchAddress} // Trigger search on submit*/}
                {/*/>*/}
                {/*<Button title="Search" onPress={handleSearchAddress} />*/}
            </View>
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {coordinates && (
                    <Marker
                        coordinate={{ latitude: coordinates.latitude, longitude: coordinates.longitude }}
                        title="Searched Location"
                        description={address}
                    />
                )}
            </MapView>
        </View>
    );
};

export default App;
