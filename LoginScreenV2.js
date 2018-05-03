import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import MyImgBackground from './component/MyImgBackground';
import MyInputText from './component/MyInputText';
import MyButton from './component/MyButton';
import MyText from './component/MyText';
import MyPicker from './component/MyPicker';

export default class LoginScreenV2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: true,
            selectedLang: ''
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {/** Comment inside JSX */}
                <MyImgBackground source={require('./assets/background-2.jpg')} resizeMode={'cover'} style={styles.backgroundImg} />
                <View style={styles.logoContainer}>
                    <MyImgBackground source={require('./assets/react-native-logo.png')} resizeMode={'contain'} style={{ width: 150, height: 150 }} />
                </View>
                <View style={styles.inputContainer}>
                    {
                        !this.state.isLogin && (
                            <View>
                                <MyInputText style={styles.inputText} placeholder="Full Name" keyboardType="default" />
                                <MyImgBackground source={require('./assets/icons/lock_icon.png')} resizeMode={'contain'} style={styles.mailIcon} />
                            </View>
                        )
                    }
                    <View style={styles.relativeContainer}>
                        <MyInputText style={styles.inputText} placeholder="User name" keyboardType="email-address" />
                        <MyImgBackground source={require('./assets/icons/mail_icon.png')} resizeMode={'contain'} style={styles.mailIcon} />
                    </View>
                    <View>
                        <MyInputText style={styles.inputText} placeholder="Password" keyboardType="default" secureTextEntry={true} />
                        <MyImgBackground source={require('./assets/icons/lock_icon.png')} resizeMode={'contain'} style={styles.mailIcon} />
                    </View>
                    {
                        !this.state.isLogin && (
                            <View>
                                <MyInputText style={styles.inputText} placeholder="Re-type password" keyboardType="default" />
                                <MyImgBackground source={require('./assets/icons/lock_icon.png')} resizeMode={'contain'} style={styles.mailIcon} />
                            </View>
                        )
                    }
                    <View>
                        <MyPicker
                            style={{
                                height: 52,
                                backgroundColor: '#435464',
                                color: '#fff',
                                paddingLeft: 50,
                                marginBottom: 8,
                                borderRadius: 10,
                            }}
                            isIOS={false}
                            selectedValue={this.state.selectedLang}
                            data={[
                                { name: 'Java', value: 'java' },
                                { name: 'JavaScript', value: 'js' },
                                { name: 'HTML', value: 'html' },
                                { name: 'CSS', value: 'css' }
                            ]}
                            onValueChange={(value, item) => this.onSelectedItem(value, item)} />
                    </View>
                    <MyButton styleBtn={styles.btnLogin} styleText={styles.btnLoginText} btnText={this.state.isLogin ? "Login" : "Sign up"} />
                    <View style={styles.footerContainer}>
                        <MyText style={styles.footerLeft} text={this.state.isLogin ? "Create account" : "Sign in"} onPress={() => { this.setState({ isLogin: !this.state.isLogin }) }} />
                        <MyText style={styles.footerRight} text="Forgot password?" />
                    </View>
                </View>
            </View>
        );
    }

    onSelectedItem(value, index) {
        this.setState({ selectedLang: value })
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
        flex: 1,
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    inputContainer: {
        width: '100%',
        flex: 1.5,
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
        fontFamily: 'PoiretOne-Regular'
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
        // backgroundColor: 'pink',
        flexDirection: 'row',
        padding: 10
    },
    footerLeft: {
        flex: 1,
        textAlign: 'left',
        color: '#fff'
    },
    footerRight: {
        flex: 1,
        textAlign: 'right',
        color: '#fff',
        textDecorationLine: 'underline'
    }
});