/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';
import Greeting from './component/Greeting';



export default class App extends Component {
    render() {
        let pic = {
            uri : '/assets/image/hello.png'
        }
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#eee'
            }}>
                <Text style={{ 
                    width: '100%',
                    fontSize: 36,
                    color: '#000',
                    textAlign: 'center',
                    padding: 10
                }}>Login page</Text>
                <Greeting name='Thanh'/>
                <Greeting name='Vi Phuong'/>
            </View>
        );
    }
    }

const styles = {

}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5,
//     },
// });
