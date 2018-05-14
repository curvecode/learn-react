import React, { Component } from 'react';
import { View, Text, } from 'react-native';

export default class TabScreen1 extends Component {
    render() {
        return (
            <View>
                <Text> Home page </Text>
                <Button onPress={() => { this.props.navigation.toggleDrawer(); }} title={"Open menu"} />

            </View>
        );
    }
}
