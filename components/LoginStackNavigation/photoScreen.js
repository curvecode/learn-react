import React, { Component } from 'react';
import { View, Text, Dimensions, FlatList, Image, Button } from 'react-native';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


const { width, height } = Dimensions.get('window');

export default class PhotoScreen extends Component {

    // static navigationOptions = {
    //     title: 'Photos',
    //     headerBackTitle: null, // iOS
    //     headerStyle: {
    //         backgroundColor: '#f4511e',
    //     },
    //     headerTintColor: '#fff',
    //     headerTitleStyle: {
    //         fontWeight: 'bold',
    //     },
    // };

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            title: params ? `Photos: ${params.album.id.toString()}` : 'Photos'
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            album: this.props.navigation.state.params.album
        }
    }

    renderItem(item) {
        return (
            <View style={{ width: '100%', height: height / 3, marginBottom: 2, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={{ uri: item }} style={{ height: 320, width: 320 }} />
            </View>
        );
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ justifyContent: 'center' }}>
                    <Button
                        onPress={() => { this.props.navigation.goBack() }}
                        title={"Back"}
                        color="#841584"
                    />
                    <Button
                        onPress={() => { this.props.navigation.navigate('LoginScreen') }}
                        title={"Home / Logout"}
                        color="#bf6518"
                    />
                </View>
                <FlatList
                    style={{ flex: 1, backgroundColor: '#fff', width: '100%' }}
                    data={this.state.album.photos}
                    renderItem={({ item }) => { return this.renderItem(item) }}
                    keyExtractor={(item, index) => Math.random().toString()}
                />
            </View>
        );
    }
}
