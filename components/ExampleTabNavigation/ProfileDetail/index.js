import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import MyInputText from '../../../component/MyInputText'

export default class ProfileDetail extends Component {

    constructor(props) {
        super(props);
    }
    _onPressButton() {
        this.props.navigation.navigate('InviteScreen');
    }
    render() {
        return (
            <View>
                <Text> This is profile page </Text>
                <StatusBar
                    backgroundColor="green"
                    barStyle="light-content"
                    hidden={false}
                />
                <TouchableOpacity onPress={() => this._onPressButton()}>
                    <Text>Click here to go to invite page</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
