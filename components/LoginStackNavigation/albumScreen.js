import React, { Component } from 'react';
import { View, Text, Alert, TouchableOpacity, FlatList, Image } from 'react-native';
import randomdata from './randomdata';
import data from './data';

export default class AlbumScreen extends Component {
    static navigationOptions = {
        title: 'Album'
    };

    constructor(props) {
        super(props);
        this.state = {
            albums: randomdata.albums
        }
    }

    renderItem(item) {
        return (<View style={{ flexDirection: 'row', marginBottom: 1, backgroundColor: '#ccc' }}>
            {/* <Text>{item.title}</Text> */}
            <TouchableOpacity onPress={() => { this.navigateToDetail(item) }} style={{}}>
                <Image source={{ uri: item.coverUrl }} style={{ height: 120, width: 120 }} />
            </TouchableOpacity>
            <View>
                <View style={{ padding: 4 }}>
                    <Text style={{ padding: 2, fontSize: 18, color: '#000' }}>{item.title}</Text>
                </View>
            </View>
        </View>)
    }

    navigateToDetail(albumData) {
        this.props.navigation.navigate('PhotoScreen', { album: albumData });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    style={{ flex: 1, backgroundColor: '#fff', width: '100%' }}
                    data={this.state.albums}
                    renderItem={({ item }) => { return this.renderItem(item) }}
                    keyExtractor={(item, index) => String(item.id)}
                />
            </View>
        );
    }
}
