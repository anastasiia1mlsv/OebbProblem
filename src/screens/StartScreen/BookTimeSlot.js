import React from 'react';
import {
    Image,View, Text, SafeAreaView
} from 'react-native';
import SearchBar from "../../components/SearchBar";



const currentDate = new Date();

const BookTimeSlot = () => {
    return (
        <SafeAreaView style={{width: "100%", height: "100%" , flexDirection: "column"}}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 19,
                    paddingHorizontal: 30,
                    paddingTop: 20}}>{"1. Find your end train station 🚇"}</Text>
                <SearchBar innerText={"e.g. Bruck an der Mur"} />

                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 19,
                    paddingHorizontal: 30,
                    paddingTop: 20}}>{"2. Where you need to go? 🏡"}</Text>
                <SearchBar  innerText={"e.g. Home address"}  />
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 19,
                    paddingHorizontal: 30,
                    paddingTop: 20}}>{"3. Pick the time slot your train is arriving to the station? ⏰"}</Text>
                <SearchBar innerText={"e.g. 19 : 00 - 19 : 15"} />
                <Image
                    source={require("../../../assets/jcr-content.png")}
                    style={{
                        justifyContent: "flex-end",
                        alignSelf: "center",
                        marginLeft: 40,
                     marginTop: 200
                }}
                />

                <View style={{paddingBottom: 250}}></View>
        </SafeAreaView>
    );
};

export default BookTimeSlot;



