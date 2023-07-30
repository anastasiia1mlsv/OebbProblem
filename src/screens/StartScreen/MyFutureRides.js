import React from 'react';
import {SafeAreaView, ScrollView, Image, View, Text} from 'react-native';

const MyFutureRides = () => {
    return (
        <SafeAreaView style={{width: "100%", height: "100%", flexDirection: "column"}}>
            <ScrollView>
                <View>
                    <Image
                        source={require("../../../assets/calendar.png")}
                        style={{width: 300, height: 400,  alignSelf: "center"}}
                    />
                </View>
                <View>
                    <Image
                        source={require("../../../assets/jcr-content.png")}
                        style={{position: "absolute", alignSelf: "center", top: 110}}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


export default MyFutureRides;



