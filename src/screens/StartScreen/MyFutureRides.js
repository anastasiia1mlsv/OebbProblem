import React from 'react';
import {SafeAreaView, ScrollView, Image, View, Text} from 'react-native';

const MyFutureRides = () => {
    return (
        <SafeAreaView style={{width: "100%", height: "100%", flexDirection: "column"}}>
            <ScrollView>
                <View style={{flex: 1, flexDirection: "column", paddingHorizontal: 16}}>
                    <View>
                        <Text>{"Monday"}</Text>
                    </View>
                    <View>
                        <Text>{"Tuesday"}</Text>
                    </View>
                    <View>
                        <Text>{"Wednesday"}</Text>
                    </View>
                    <View>
                        <Text>{"Thursday"}</Text>
                    </View>
                    <View>
                        <Text>{"Friday"}</Text>
                    </View>
                    <View>
                        <Text>{"Saturday"}</Text>
                    </View>
                    <View>
                        <Text>{"Sunday"}</Text>
                    </View>
                </View>
                <View>
                    <Image
                        source={require("../../../assets/jcr-content.png")}
                        style={{position: "absolute", alignSelf: "center", bottom: 20}}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


export default MyFutureRides;



