import React, { Component } from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

export default class MyInputText extends Component {
    render() {
        return (
            <TextInput
                style={this.props.style}
                secureTextEntry={this.props.secureTextEntry ? this.props.secureTextEntry: false}
                placeholder={this.props.placeholder}
                keyboardType={this.props.keyboardType}
                placeholderTextColor="#fff"
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyLabel={"next"}
                returnKeyType="next"
                underlineColorAndroid={"transparent"}
                onBlur={this.props.onBlur}
            ></TextInput>
        );
    }
}

MyInputText.propTypes = {
    style: PropTypes.any.isRequired,
    placeholder: PropTypes.string.isRequired,
    keyboardType: PropTypes.string.isRequired,
    secureTextEntry: PropTypes.bool
}