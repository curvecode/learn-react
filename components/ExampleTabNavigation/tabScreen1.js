import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Screen1 from './StackScreen/screen1';
import Screen2 from './StackScreen/screen2';

export default createStackNavigator({
    Screen1: Screen1,
    Screen2: Screen2
}, {
        initialRouteName: 'Screen1',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            
        }
    });

