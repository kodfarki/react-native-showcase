/**
 * Created with IntelliJ IDEA.
 * User: halil
 * Date: 06/08/2017 14:35
 */
import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

export default class SecondScreen extends React.Component{

    static navigationOptions = {
        drawerLabel: "Image Component",
        drawerIcon: ({tintColor}) => {
            return (
                <MaterialIcons name="schedule" size={24} style={{color: tintColor}} />
            );
        }
    }

    render(){
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                <Text>This image is displayed from local storage</Text>
                <Image style={{width: 50, height: 50}} source={require('./img/kodfarki-logo-512.png')} />

                <Text>This image is downloaded from internet</Text>
                <Image style={{width: 50, height: 50}}
                       source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />

                <Text>This is a stretched image</Text>
                <Image style={styles.stretch} resizeMode={'stretch'} source={require('./img/kodfarki-logo-512.png')} />

                <Text>This is a scaled image that fits the size</Text>
                <Image style={styles.resize} resizeMode={'contain'}
                       source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />

                <Text>This is a scaled image that overflows the size</Text>
                <Image style={styles.resize} resizeMode={'cover'}
                       source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />

                <Button title="Open DrawNavigator" onPress={() => this.props.navigation.navigate("DrawerOpen")} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    stretch: {
        width: 200, height: 50
    },

    resize: {
        width: 200, height: 72
    }
})