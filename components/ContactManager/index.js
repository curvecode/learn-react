import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import TabScreen from './screen/tabContact';

export default createStackNavigator({
    Home: {
        screen: TabScreen,
        navigationOptions: {
            title: 'Contact'
        }
    }
},
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }
);
