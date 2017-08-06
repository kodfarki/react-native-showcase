/**
 * Created with IntelliJ IDEA.
 * User: halil
 * Date: 06/08/2017 14:35
 */
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

export default class FirstScreen extends React.Component{

    static navigationOptions = {
        drawerLabel: "Text Component",
        drawerIcon: ({tintColor}) => {
            return (
                // documentation: https://material.io/icons/
                <MaterialIcons name="change-history" size={24} style={{color: tintColor}} />
            );
        }
    }

    render(){
        return (
            <View style={{marginTop: 40}}>
                <Text style={{backgroundColor: "aliceblue", margin: 10}}>
                    This is a text component.</Text>
                <Text numberOfLines={2} style={{backgroundColor: "azure", margin: 10}}>
                    This text component shows only 2 lines of a long text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat a odio sed mollis. In sed ex sed felis pharetra viverra dapibus sed dolor. Sed id arcu nibh. Nunc feugiat at velit ut molestie. In et commodo velit. Curabitur id ex augue. Donec tristique, nisl vel tempus rutrum, ipsum mauris euismod mi, mattis dignissim odio tellus in ligula. Integer laoreet sem non ultricies accumsan.</Text>
                <Text selectable={true} style={{backgroundColor: "aliceblue", margin: 10}}>
                    This text component lets you select/copy text inside. You may use this feature when you want to let user copy text. http://github.com/kodfarki
                </Text>
                <Text style={{backgroundColor: "azure", margin: 10}}>
                    There is a <Text style={{fontSize: 20}}>nested text component</Text> inside this text component
                </Text>

                <Button title="Open DrawNavigator" onPress={() => this.props.navigation.navigate("DrawerOpen")} />

            </View>
        )
    }
}