import React, { Component } from 'react';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import Home from './home';
import Notification from './notification';
import TabNavigator from '../ExampleTabNavigation';
import Icon from 'react-native-vector-icons/FontAwesome';

export default createDrawerNavigator({
    HomeView: {
        screen: TabNavigator,
        navigationOptions: {
            drawerLabel: 'Home',
            drawerIcon: ({ tintColor }) => (
                <Icon name="home" size={26} color="#f4511e" />
            ),
        }
    },
    NotificationView: {
        screen: Notification,
        navigationOptions: {
            drawerLabel: 'Notification',
            drawerIcon: ({ tintColor }) => (
                <Icon name="bell" size={26} color="#f4511e" />
            ),
        }
    }
});
