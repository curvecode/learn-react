import React, { Component } from 'react';
import { View, Picker, Text, Image } from 'react-native';
import MyImgBackground from './MyImgBackground';
import styles from './styles';

export default class MyPicker extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.inputContainer}>
                <View style={styles.subInputContainer}>
                    <Image source={this.props.icons} style={styles.inputIcon} />
                    <Picker
                        style={{ flex: 1, color: '#fff'}}
                        mode={'dropdown'}
                        selectedValue={this.props.selectedValue}
                        onValueChange={this.props.onValueChange}
                    >
                        { this.props.items &&
                            this.props.items.map((item, i) => <Picker.Item key={i} label={item.label} value={item.value} /> )
                        }
                    </Picker>
                </View>
            </View>

        );
    }
}
