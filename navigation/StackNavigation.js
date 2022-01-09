import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import Stories from "../screens/Story.js";

const StackNavigation = createStackNavigator();

const StackNavigator = () => {
    return (
        <StackNavigation.Navigator
            initialRouteName="Home"
            screenOptions = {{
                headerShown:false
            }}
        >
            <StackNavigation.Screen name="Home" component={TabNavigator}/>
            <StackNavigation.Screen name="Stories" component={Stories}/>
        </StackNavigation.Navigator>
    );
};

export default StackNavigator;