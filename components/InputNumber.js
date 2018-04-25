import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default class InputNumberComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hintText: props.hintText
        }
    }
    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.inputNumber} 
                    placeholder={this.state.hintText}
                    placeholderTextColor="#6a89cc"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        
    },
    inputNumber: {
        fontSize: 20,
    }
});
