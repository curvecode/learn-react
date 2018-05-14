import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from '../../Login';
import Album from './albumScreen'
import Photo from './photoScreen'
export default createStackNavigator({
    LoginScreen: Login,
    AlbumScreen: Album,
    PhotoScreen: Photo
},
    {
        initialRouteName: 'LoginScreen',
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
