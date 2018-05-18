import React, { Component } from 'react';
import {  View, Button, Alert } from 'react-native';
import STYLES from './indexStyle';

export default class IndexComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: ''
        }
    }
    render() {
        return (
            <View style={STYLES.container}>
                <Button
                    title="Native button"
                    onPress={this.handleOnPress(e)}
                />
            </View>
        );
    }

    handleOnPress = (e) => {
        this.setState({'status': 'clicked'}, () => {
            Alert.alert('Status changed', 'You have just updated status state');
        })
        Alert.alert('This is title', 'This is message content');
    }
}
