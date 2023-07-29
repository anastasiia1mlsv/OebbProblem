import React from 'react';
import {TextInput, View, Text} from "react-native";
import {Ionicons} from "@expo/vector-icons";


const SearchBar = ({onChangeText, containerStyle, searchBarStyle, innerText}) => {
    return (
        <View style={{ width: "100%", height: 60, paddingTop: 10, paddingHorizontal: 20, ...containerStyle}}>
            <View style={{ flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: "gray",
                borderWidth: 1,
                borderRadius: 15,
                width: "100%",
                ...searchBarStyle
            }}>
                <Ionicons style={{padding: 10}} name="ios-search" size={20} color={"gray"}/>
                <TextInput
                    style={{flex: 1,
                        padding: 5,
                        color: "gray",
                        width: "100%",
                    }}
                    placeholder={innerText}
                    onChangeText={onChangeText}
                    underlineColorAndroid="transparent"
                />
                {/*<Text style={{fontSize: 12, color: "gray"}}>{innerText}</Text>*/}
            </View>
        </View>
    );
};

export default SearchBar;
