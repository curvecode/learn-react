import React, { Component } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import Contact from '../model/Contact';
import commonStyles from '../styles/common';


export default class HistoryTabScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            historyList: this.mockData()
        }

    }

    mockData = () => {
        let arrData = [];
        for (let i = 0; i < 10; i++) {
            let contact = new Contact();
            contact.id = i;
            contact.firstName = 'Le ' + i;
            contact.lastName = 'Thanh ' + i;
            contact.photo = '';
            contact.gender = 0;

            arrData.push(contact);
        }
        this.setState({
            historyList: arrData
        })
        return arrData;
    }

    renderHistoryList = (contact) => {
        console.log(contact.firstName);
        return (
            <View style={commonStyles.card}>
                {/* Picture */}
                <View style={{alignItems: 'center', flex: 1, flexDirection: 'row', alignContent: 'center', alignSelf: 'center'}}>
                    <Image
                        source={require('../resources/icon/gender_icon.png')}
                        resizeMode={'contain'}
                        style={{ width: 50, height: 50 }}
                    />
                </View>
                {/* Name and Time */}
                <View style={{paddingLeft: 5, flex: 3}}>
                    <Text>{contact.firstName}</Text>
                    <Text>{contact.lastName}</Text>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={{ backgroundColor: '#eee', flex: 1 }}>
                <FlatList
                    style={{}}
                    data={this.state.historyList}
                    renderItem={(contact) => { return this.renderHistoryList(contact.item) }}
                    keyExtractor={(item, index) => String(item.id)}
                />
            </View>
        );
    }
}
