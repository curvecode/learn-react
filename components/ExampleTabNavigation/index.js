import React, { Component } from 'react';
import { View, Text, Icon } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';
import TabScreen1 from './tabScreen1';
import TabScreen2 from './tabScreen2';
import StackScreenProfile from './tabScreen3';
import LoginStack from '../LoginStackNavigation';

export default createBottomTabNavigator({
    Splash: {
        screen: TabScreen1,
        navigationOptions: {
            title: 'Home Screen',
            tabBarIcon: ({ focused, tintColor }) => {
                return <Ionicons name={focused ? 'ios-home' : 'ios-home-outline'} size={25} color={tintColor} />;
            }
        }
    },
    Search: {
        screen: TabScreen2,
        navigationOptions: {
            title: 'Search Screen',
            tabBarIcon: ({ focused, tintColor }) => {
                return <Ionicons name={focused ? 'ios-search' : 'ios-search-outline'} size={25} color={tintColor} />;
            }
        }
    },
    Profile: {
        screen: LoginStack,
        navigationOptions: {
            title: 'Profile Screen',
            tabBarIcon: ({ focused, tintColor}) => {
                return <Ionicons name={focused ? 'ios-information-circle' : 'ios-information-circle-outline'} size={25} color={tintColor} />
            }
        }
    }
},
    {
        tabBarOptions: {
            showIcon: true,
            showLabel: true,
            labelStyle: {
                color: '#000000',
            },
            swipeEnabled: true
        }
    }
);