import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {DrawerNavigator} from "react-navigation";

const DrawerConfiguration = DrawerNavigator({
       // Screens will be defined here
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