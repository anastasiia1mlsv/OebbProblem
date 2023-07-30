import React, {useState} from 'react';
import {
    ScrollView,
    Image, View, Text, SafeAreaView, TextInput,
} from 'react-native';
import SearchBar from "../../components/SearchBar";
import GeoCode from "./GeoCode";
import Button from "../../components/Button";
import {postData} from "../../apiService/PostFunction";




const currentDate = new Date();

const BookTimeSlot = () => {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [timeSlot, setTimeSlot] = useState('');

    const onBookButtonPressed = async () => {
        postData(a, b, timeSlot);
    }
    return (
        <SafeAreaView style={{width: "100%", height: "100%" , flexDirection: "column"}}>
            <ScrollView>
                <TextInput
                    value={a}
                    onChangeText={setA}
                    style={{
                    fontWeight: 'bold',
                    fontSize: 19,
                    paddingHorizontal: 30,
                    paddingTop: 20}}>{"1. Find your end train station 🚇"}</TextInput>
                <SearchBar innerText={"e.g. Bruck an der Mur"} />

                <TextInput
                    value={b}
                    onChangeText={setB}
                    style={{
                    fontWeight: 'bold',
                    fontSize: 19,
                    paddingHorizontal: 30,
                    paddingTop: 20}}>{"2. Where you need to go? 🏡"}</TextInput>
                <SearchBar  innerText={"e.g. Home address"}  />
                <TextInput
                    value={timeSlot}
                    onChangeText={setTimeSlot}
                    style={{
                    fontWeight: 'bold',
                    fontSize: 19,
                    paddingHorizontal: 30,
                    paddingTop: 20}}>{"3. Pick the time slot your train is arriving to the station? ⏰"}</TextInput>
                <SearchBar innerText={"e.g. 19 : 00 - 19 : 15"} />

                <View style={{paddingTop: 20, borderRadius: 50}}>
                    <Button
                        innerText={"Book a ride" }
                        bgColor={'#d9415c'}
                        onPress={onBookButtonPressed}
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



