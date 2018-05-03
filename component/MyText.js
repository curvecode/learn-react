import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
export default class MyText extends Component {
    render() {
        return (
            <Text style={this.props.style} onPress={this.props.onPress}> {this.props.text} </Text>
        );
    }
}

MyText.propTypes = {
    style: PropTypes.any.isRequired,
    onPress: PropTypes.func,
    text: PropTypes.string.isRequired
}
