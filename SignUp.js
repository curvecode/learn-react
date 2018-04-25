import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import InputNumberComp from './components/InputNumber';

var { width, height } = Dimensions.get('window');
export default class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            phone: '',
            birthday: '',
            age: 0,
            sex: false
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./assets/image/bg.jpg')} resizeMode={'cover'} style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.9
                }}></Image>

                <View>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Enter your email"
                        placeholderTextColor="#6a89cc"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        returnKeyType="next"
                        underlineColorAndroid={"transparent"}
                        onChangeText={(text) => this.setState({ username: text })}
                        onSubmitEditing={() => this.passwordInput.focus()}
                    />
                    <TextInput
                        style={styles.inputText}
                        placeholder="Enter your phone number"
                        placeholderTextColor="#6a89cc"
                        keyboardType="phone-pad"
                        autoCapitalize="none"
                        autoCorrect={false}
                        returnKeyType="next"
                        underlineColorAndroid={"transparent"}
                    />
                    <TextInput
                        style={styles.inputText}
                        placeholder="Birthday"
                        placeholderTextColor="#6a89cc"
                        autoCapitalize="none"
                        autoCorrect={false}
                        returnKeyType="next"
                        underlineColorAndroid={"transparent"}
                    />
                    <InputNumberComp hintText={"Enter your age"}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    inputText: {
        width: width - 60,
        height: 52,
        backgroundColor: '#fff',
        color: '#0c2461',
        padding: 12,
        marginBottom: 8,
        borderRadius: 10,
        borderColor: '#f1f2f6'
    }
});