import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {DrawerNavigator} from "react-navigation";

import FirstScreen from "./screens/FirstScreen";
import SecondScreen from "./screens/SecondScreen";
import ThirdScreen from "./screens/ThirdScreen";

// documentation: https://reactnavigation.org/docs/navigators/drawer
const DrawerConfiguration = DrawerNavigator({
        First: {path: "/", screen: FirstScreen},
        Second: {path: "/sent", screen: SecondScreen},
        Third: {path: "/settings", screen: ThirdScreen}
    },
    {
        initialRouteName: "First",
        drawerPosition: "left",
        contentOptions: {
            activeTintColor: "blue",
            inactiveTintColor: "cornflowerblue",
        }
    }
)

export default DrawerConfiguration;