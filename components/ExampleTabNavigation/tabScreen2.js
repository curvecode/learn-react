import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { DrawerActions } from 'react-navigation';

export default class TabScreen2 extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            // tabBarOnPress: ({ previousScene, scene, jumpToIndex }) => {
            //     navigation.dispatch(DrawerActions.toggleDrawer());
            // }
        };
    };
    render() {
        return (
            <View>
                <Text> Search page </Text>
            </View>
        );
    }
}
