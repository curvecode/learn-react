import React, { Component } from 'react';
import { Picker, Text } from 'react-native';

export default class MyPicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            language: 'js'
        }
    }
    render() {
        return (
            this.props.isIOS ?
                <Text>IOS</Text>
                : <Picker
                    style={this.props.style}
                    selectedValue={this.props.selectedValue}
                    mode={'dropdown'}
                    onValueChange={this.props.onValueChange}
                >
                    {
                        this.props.data.map((itemValue, index) => <Picker.Item label={itemValue.name} value={itemValue.value} /> )
                    }
                </Picker>
        );
    }
}
