import React, { Component } from 'react';
import { View, DatePickerAndroid } from 'react-native';
import MyInputText from '../../component/MyInputText';

export default class AndroidDatePicker extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <MyInputText style={styles.textInput} placeholder="Birthday" keyboardType="default" onBlur={this.openDatePicker}/>
            </View>
        );
    }

    // openDatePicker = async () => {
    //     try {
    //         const { action, year, month, day } = await DatePickerAndroid.open({
    //             // Use `new Date()` for current date.
    //             // May 25 2020. Month 0 is January.
    //             date: new Date(2020, 4, 25)
    //         });
    //         if (action !== DatePickerAndroid.dismissedAction) {
    //             // Selected year, month (0-11), day
    //         }
    //     } catch ({ code, message }) {
    //         console.warn('Cannot open date picker', message);
    //     }
    // }
}
