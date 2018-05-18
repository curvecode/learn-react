import React, { Component } from 'react';
import {  View, Text, Button, Alert } from 'react-native';

export default class RegisterScreen extends Component {
  static navigationOptions = ({navigation}) => {
    headerTitle: "Title",
    headerRight: (
      <Button title={"Click"} style={{borderRadius: 0,}} onPress={() => {
        // Alert.alert('Click roi');
        this.navigateToHome();
      }}/>
    )
  };

  constructor(props) {
    super(props);
  }

  navigateToHome() {
    this.props.navigation.navigate('HomeScreen', {data: {}});
  }
  render() {
    return (
      <View>
        <Text> RegisterScreen </Text>
      </View>
    );
  }
}
