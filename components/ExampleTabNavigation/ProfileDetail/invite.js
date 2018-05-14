import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import MyInputText from '../../../component/MyInputText';

export default class InviteScreen extends Component {
  render() {
    return (
      <View>
        <Text> This is invite screen </Text>
        <MyInputText style={{}} placeholder="Enter your email" keyboardType="default" />
      </View>
    );
  }
}
