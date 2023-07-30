import React from 'react';
import {View, Text, TouchableOpacity} from "react-native";

const Button = ({innerText, bgColor}) => {
    return (
        <TouchableOpacity>
            <View style={{
                height: 42,
                width: 190,
                backgroundColor: bgColor,
                borderRadius: 20,
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
                alignContent: "center"
            }}>
                <Text style={{fontSize: 20, fontWeight: "bold", color: "white"}}>{innerText}{"  "}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Button;
