import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';

export default class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}</Text>
        );
    }
}