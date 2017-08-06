/**
 * Created with IntelliJ IDEA.
 * User: halil
 * Date: 06/08/2017 14:35
 */
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class FirstScreen extends React.Component{

    static navigationOptions = {
        drawerLabel: "Screen 1",
    }

    render(){
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{paddingTop: 20, fontSize: 24, color: '#424282'}}>Screen 1</Text>
            </View>
        )
    }
}