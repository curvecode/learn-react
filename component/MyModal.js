import React, { Component } from 'react';
import { View, Text, Modal, Image } from 'react-native';
import PropTypes from 'prop-types';

export default class MyModalComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            internalData: {},
            loaded: false
        }
        // this.renderModalContent();
    }

    renderModalContent() {
        let idPhoto = this.props.idPhoto || null;
        let data = this.fetchPhotoInfo(id);
    }

    fetchPhotoInfo(id) {
        const LINK = 'https://jsonplaceholder.typicode.com/photos/';
        return fetch(LINK + id).then((response) => response.json()).then((data) => {
            // Set data state
            this.setState({ internalData: data });
            this.setState({ loaded: true });
            return data;
        }).catch((error) => {
            console.log(err);
            return null;
        });
    }
    render() {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent
                    onRequestClose={() => { this.props.onRequestClose }}
                    visible={this.props.visible}
                    onDismiss={() => { this.props.onRequestClose }}
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

                        <Text>Header of modal</Text>
                        <View>
                            <Text>Title : 1</Text>
                            <Text>Album Id : </Text>
                            <Text>Image</Text>
                            <Image source={{ uri: 'http://placehold.it/150/92c952' }} style={{ height: 120, width: 120 }}></Image>
                        </View>

                    </View>

                </Modal>
            </View>
        );
    }
}


MyModalComponent.propTypes = {
    visible: PropTypes.any.isRequired,
    idPhoto: PropTypes.any.isRequired
}