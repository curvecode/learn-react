import React, { Component } from 'react';
import { TouchableOpacity, Text, } from 'react-native';
import PropTypes from 'prop-types';
export default class MyButton extends Component {
    render() {
        return (
            <TouchableOpacity style={this.props.styleBtn}>
                <Text style={this.props.styleText}>{this.props.btnText}</Text>
            </TouchableOpacity>
        );
    }
}

MyButton.propTypes = {
    styleBtn: PropTypes.any,
    styleText: PropTypes.any,
    btnText: PropTypes.string.isRequired
}
