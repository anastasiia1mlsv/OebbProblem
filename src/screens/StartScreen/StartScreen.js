import React, { useState } from 'react';
import {Pressable, View, Text} from 'react-native';
import { SceneMap, TabView } from "react-native-tab-view";
import BookTimeSlot from "./BookTimeSlot";
import MyFutureRides from "./MyFutureRides";


const Book = () => <BookTimeSlot />
const Calendar = () => <MyFutureRides />

const renderScene = SceneMap({
    1: Book,
    2: Calendar,
});

export const StartScreen = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 1, title: 'BOOK TIME SLOT' },
        { key: 2, title: 'MY FUTURE RIDES'}
    ]);

    const renderTabBar = props => {
        return (

                <View style={{
                    justifyContent: "center", alignItems: "center",
                    height: 60,
                    width: 180,
                    borderColor: 'black',
                    borderRadius: 30,
                    flexDirection: 'row',
                    backgroundColor: "white", //refactor
                    alignSelf: "center"
                }}>
                    {
                        props.navigationState.routes.map((route, key) => {
                            const color = index === key ? 'white' : 'black';
                            //const backgroundColor = index === key ? 'rgb(56,203,199)' : "white";
                            const backgroundColor = index === key ? "#d9415c" : "white";
                            //const borderWidth = index === key ? 2 : 0;
                            return (
                                <View style={{
                                    backgroundColor: backgroundColor,
                                    padding: "10%",
                                    borderRadius: 25 }} key={key}>
                                    <Pressable onPress={() => { setIndex(key) }}>
                                        <Text style={{ color, fontWeight: 'bold', fontSize: 16 }}>{route.title}</Text>
                                    </Pressable>
                                </View>
                            );
                        })
                    }
                </View>

        );
    };

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={{ width: 156, height: 10 }}
            style={{ backgroundColor: '#FFFFFF'}}
        />
    );
};
