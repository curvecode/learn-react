import React, { Component } from 'react';
import {  View, Text, TouchableHighlight, Alert, Button} from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptionss = {
    title: 'AAAAAAAAA',
    headerBackTitle: null, // iOS
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  };
  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={() => {
            // Alert.alert('Chao', 'Em');
            this.props.navigation.navigate('LoginScreen', {data: {}});
          }}
        >
          <Text> Tap to me </Text>
        </TouchableHighlight>
        <Text> Home screen </Text>
      </View>
    );
  }
}
