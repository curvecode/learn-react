import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import styles from './styles';
import AndroidDatePicker from './androidDatePicker'

export default class DropDownComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                {
                    Platform.OS === 'android' ? <AndroidDatePicker /> : 'Hello'
                }
            </View>
        );
    }
}
