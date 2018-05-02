import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class Login01 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.block1}></View>
                <View style={styles.block2}></View>
                <View style={styles.block3}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    block1: {
        flex: 1,
        height: 50,
        backgroundColor: 'powderblue'
    },
    block2: {
        flex: 1,
        height: 50,
        backgroundColor: 'skyblue'
    },
    block3: {
        flex: 1,
        height: 50,
        backgroundColor: 'steelblue'
    }
});
