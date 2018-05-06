import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Alert, FlatList, ActivityIndicator, TouchableOpacity, Modal } from 'react-native';
import MyText from './MyText';
import MyModalComponent from './MyModal';
export default class MyScrollView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            done: false,
            isShow: false,
            idPhoto: 0
        }
        this.fetchData();
    }
    showDetailItem = (id) => {
        // Alert.alert('Show detail item', id.toString());
        this.setState({ idPhoto: id });
        this.setState({ isShow: true });
        // console.log('Hello ' + id);
    }
    renderItemForList = (item) => {
        return (
            <View style={{ flexDirection: 'row', marginBottom: 1 }}>
                <TouchableOpacity onPress={() => { this.showDetailItem(item.id) }}>
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

    handleHideModal() {
        Alert.alert('Chao', 'Close nhe ?');
        this.setState({ isShow: !isShow });
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
                {
                    this.state.isShow &&
                    <View>
                        <Modal
                            animationType="slide"
                            transparent
                            onRequestClose={() => { this.setState({ isShow: false }) }}
                            visible={this.state.isShow}
                            onDismiss={() => { this.setState({ isShow: false }) }}
                        >
                            <View style={{
                                paddingTop: 12,
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 250,
                                backgroundColor: '#dfe6e9',
                                position: 'absolute',
                                bottom: 0
                            }}>
                                <View style={{}}>
                                    <ActivityIndicator size="large" color="#0000ff" />
                                </View>
                                <Text>Header of modal</Text>
                                <View>
                                    <Text>Title : {this.state.idPhoto}</Text>
                                    <Text>Album Id : 1</Text>
                                    <Text>Image</Text>
                                    <Image source={{ uri: 'http://placehold.it/150/92c952' }} style={{ height: 120, width: 120 }}></Image>
                                </View>

                            </View>

                        </Modal>
                    </View>
                }
                {/* <View style={{position: 'absolute', right: 0, width: '100%', justifyContent: 'center', zIndex: 9}}>
                    <TouchableOpacity onPress={() => { 
                        Alert.alert('Chao', 'Chao');
                     }}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View> */}
            </View >
        );
    }
}
