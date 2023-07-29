import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StartScreen} from "./src/screens/StartScreen/StartScreen";



const Tab = createBottomTabNavigator();

export default function App() {
    return (

        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                headerShadowVisible: false,
            }}>
                <Tab.Screen name="ÖBB Taxi Application" options={{headerShown: true, headerTitleAlign: 'center'}} component={StartScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
