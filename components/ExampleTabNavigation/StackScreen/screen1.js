import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { DrawerActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Screen1 extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            title: "Screen 1",
            headerLeft: (
                <TouchableOpacity onPress={() => {
                    // alert('OK');
                    console.log(navigation);
                    navigation.dispatch(DrawerActions.openDrawer());
                }}>
                    <View style={{padding: 6}}>
                        <Icon name="bars" size={26} color="#fff" />
                    </View>
                </TouchableOpacity>
            )
        }
    }

    render() {
        return (
            <View>
                <Text> This is content of screen 1 </Text>
                <Button title={"Move to screen 2"} onPress={() => { this.props.navigation.navigate("Screen2"); }} />
            </View>
        );
    }
}
