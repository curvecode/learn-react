import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Alert, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import MyText from './MyText';
export default class MyScrollView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            arr: [
                { title: 'ABC' },
                { title: 'XYS' }
            ],
            done: false,
        }
        this.fetchData();
    }
    showDetailItem = (id) => {
        Alert.alert('Show detail item', id.toString());
        // console.log('Hello ' + id);
    }
    renderItemForList = (item) => {
        return (
            <View style={{ flexDirection: 'row', marginBottom: 1 }}>
                <TouchableOpacity onPress={() => {this.showDetailItem(item.id)}}>
                    <Image source={{ uri: item.thumbnailUrl }} style={{ height: 120, width: 120 }} />
                </TouchableOpacity>
                <Text style={{ padding: 5, fontSize: 14, color: '#fff' }}>{item.title}</Text>
            </View>
        );
    }

    fetchData = () => {
        // https://facebook.github.io/react-native/movies.json
        // https://jsonplaceholder.typicode.com/posts
        return fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({ movies: responseJson });
                this.setState({ done: true });
                return responseJson;
            }).catch((error) => {
                console.error(error);
            });
    }
    render() {
        let arrObject = [];
        for (let i = 0; i < 200; i++) {
            arrObject.push(<View key={i}><Text key={i}> <MyText style={{}} text="This is an item in scroll view" /> </Text></View>);
        }
        return (
            <View style={{ flex: 1, justifyContent: 'center' }} >
                <ScrollView style={{ flex: 1, width: '100%', backgroundColor: 'yellow' }}>
                    {
                        arrObject
                    }
                </ScrollView>
                {
                    this.state.done &&
                    <FlatList
                        style={{ flex: 1, backgroundColor: 'green', width: '100%' }}
                        data={this.state.movies}
                        renderItem={({ item }) => { return this.renderItemForList(item); }}
                        keyExtractor={(item, index) => item.url}
                    />
                    ||
                    <View style={{ flex: 1 }}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                }
            </View >
        );
    }
}
