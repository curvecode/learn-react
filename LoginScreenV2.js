import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

export default class LoginScreenV2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/** Comment inside JSX */}
                <Image
                    source={require('./assets/background-2.jpg')}
                    resizeMode={'cover'}
                    style={styles.backgroundImg}
                />
                <View style={styles.logoContainer}>
                    <Image
                        source={require('./assets/react-native-logo.png')}
                        resizeMode={'contain'}
                        style={{
                            width: 150,
                            height: 150
                        }}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.relativeContainer}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="User name"
                            placeholderTextColor="#fff"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            returnKeyType="next"
                            underlineColorAndroid={"transparent"}
                        />
                        <Image 
                            source={require('./assets/icons/mail_icon.png')}
                            resizeMode={'contain'}
                            style={styles.mailIcon}
                        />
                    </View>
                    <View>
                        <TextInput
                            ref={(input) => this.passwordInput = input}
                            secureTextEntry={true}
                            style={styles.inputText}
                            placeholder="Password"
                            placeholderTextColor="#fff"
                            returnKeyType="go"
                            underlineColorAndroid={"transparent"}
                        />
                        <Image 
                            source={require('./assets/icons/lock_icon.png')}
                            resizeMode={'contain'}
                            style={styles.mailIcon}
                        />
                    </View>
                    <TouchableOpacity style={styles.btnLogin}>
                        <Text style={styles.btnLoginText}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footerContainer}>
                    <Text style={styles.footerLeft}>Create account</Text>
                    <Text style={styles.footerRight}>Forgot password?</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    backgroundImg: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%'
    },
    logoContainer: {
        width: '100%',
        flex: 2,
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    inputContainer: {
        width: '100%',
        flex: 1,
        // backgroundColor: 'green',
        padding: 30
    },
    inputText: {
        height: 52,
        backgroundColor: '#435464',
        color: '#fff',
        paddingLeft: 50,
        marginBottom: 8,
        borderRadius: 10,
        fontSize: 16,
    },
    relativeContainer: {
        position: 'relative'
    },
    mailIcon: {
        position: 'absolute',
        left: 10,
        top: 11,
        width: 30,
        height: 30
    },
    btnLogin: {
        backgroundColor: '#56aaee',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: 52,
        marginTop: 10
    },
    btnLoginText: {
        color: '#fff',
        fontSize: 16
    },
    footerContainer: {
        width: '100%',
        flex: 1,
        // backgroundColor: 'pink',
        flexDirection: 'row',
        padding: 40,
    },
    footerLeft: {
        flex: 1,
        textAlign: 'left',
        color: '#fff'
    },
    footerRight: {
        flex: 1,
        textAlign: 'right',
        color: '#fff'
    }
});