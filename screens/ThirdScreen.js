/**
 * Created with IntelliJ IDEA.
 * User: halil
 * Date: 06/08/2017 14:35
 */
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class ThirdScreen extends React.Component{

    static navigationOptions = {
        drawerLabel: "Screen 3",
    }

    render(){
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{paddingTop: 20, fontSize: 24, color: '#828484'}}>Screen 3</Text>
            </View>
        )
    }
}