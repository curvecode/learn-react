import React, { Component } from 'react';
import {  View, Text, } from 'react-native';

export default class LoginScreen extends Component {
    static navigationOptionss = {
        title: 'Photos',
        // header: null,
        headerBackTitle: null, // iOS
        // headerTitle: "ABC",
    };
    render() {
        return (
            <View>
            <Text> Login screen </Text>
            </View>
        );
    }
}
