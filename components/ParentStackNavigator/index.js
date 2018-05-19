import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import TabScreen from '../ExampleTabNavigation';
import DrawerScreen from '../ExampleDrawerNavigation';
import Login from '../../LoginScreenV2';

export default createSwitchNavigator({
    LoginScreen: Login,
    TabNavigator: TabScreen,
    DrawerNavigator: DrawerScreen
}, {
    initialRouteName: 'LoginScreen'
})
