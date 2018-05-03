import React, { Component } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

export default class MyImgBackground extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Image
                source={this.props.source}
                resizeMode={this.props.resizeMode}
                style={this.props.style}
            />
        );
    }
}

MyImgBackground.propTypes = {
    source: PropTypes.any.isRequired,
    resizeMode: PropTypes.string.isRequired,
    style: PropTypes.any.isRequired
}