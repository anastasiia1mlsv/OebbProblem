import React, {useState} from 'react';
import {
    ScrollView,
    Image, View, Text, SafeAreaView, TextInput,
} from 'react-native';
import SearchBar from "../../components/SearchBar";
import GeoCode from "./GeoCode";
import Button from "../../components/Button";



const currentDate = new Date();

const BookTimeSlot = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] =  useState('');
    const [loading, setLoading] =  useState('');
    return (
        <SafeAreaView style={{width: "100%", height: "100%" , flexDirection: "column"}}>
            <ScrollView>
                <TextInput
                    value={username}
                    onChangeText={setUsername}
                    style={{
                    fontWeight: 'bold',
                    fontSize: 19,
                    paddingHorizontal: 30,
                    paddingTop: 20}}>{"1. Find your end train station 🚇"}</TextInput>
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

                <View style={{paddingTop: 20, borderRadius: 50}}>
                    <Button
                        //textColor={'black'}
                        //color={'rgba(180,1,96,0.87)'}
                        innerText={"Book a ride" }
                        bgColor={'#d9415c'}
                        //title={"Book a ride"}
                    />
                </View>
                <View style={{width: 400, height: 400}}>
                    <GeoCode  />
                </View>
                <Image
                    source={require("../../../assets/jcr-content.png")}
                    style={{
                        justifyContent: "flex-end",
                        alignSelf: "center",
                        marginLeft: 40,
                        marginTop: 100
                    }}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default BookTimeSlot;



