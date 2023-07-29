import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import * as Location from 'expo-location';

const LocationScreen = () => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Location permission not granted.');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    return (
        <View>
            {location ? (
                <Text>
                    Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}
                </Text>
            ) : (
                <Text>Loading location...</Text>
            )}
        </View>
    );
};

export default LocationScreen;
