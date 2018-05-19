import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class NotificationsScreen extends Component {
    // static navigationOptions = {
    //     drawerLabel: 'Notifications',
    //     drawerIcon: ({ tintColor }) => (
    //         // <Image
    //         //     source={require('../../assets/icons/gift_icon.png')}
    //         //     style={[styles.icon, { tintColor: tintColor }]}
    //         // />
    //         <Icon name="bars" size={26} color="#00a4db" />
    //     ),
    // };
    render() {
        return (
            <View>
                <Button
                    onPress={() => this.props.navigation.navigate('Notifications')}
                    title="Go to notifications"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});