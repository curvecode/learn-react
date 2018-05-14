import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import Home from './home';
import Notification from './notification';

class IndexDrawerNavigator extends Component {

    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        );
    }

    ExampleDrawerNavigator = createDrawerNavigator({
        HomeView: Home,
        NotificationView: Notification
    });
}
export default ExampleDrawerNavigator;