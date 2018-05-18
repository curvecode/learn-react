import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import home from './homeScreen';
import login from './loginScreen';
import register from './registerScreen';

export default class StackScreen extends Component {

  Stack = createStackNavigator({
    RegisterScreen: register,
    HomeScreen : home,
    LoginScreen: login
  },
  {

  }
  );
  render() {
    return (
      <this.Stack />
    );
  }
}
