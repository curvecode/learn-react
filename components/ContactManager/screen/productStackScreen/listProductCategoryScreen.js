import React, { Component } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator} from 'react-native';
import ProductService from '../../service/productService';
import commonStyles from '../../styles/common';

export default class ListProductCategoryScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listProductOfCategory: [],
            done: false
        }
        this.fetchData('5b0fe5869b69bc0da4c69a98');

    }

    fetchData = (id) => {
        ProductService.fetchListCategory(id).then((data) => {
            this.setState({
                listProductOfCategory: data
            });
            this.setState({ done: true });
            return data;
        }).catch((error) => {
            this.setState({done: true});
        });
        
    }

    renderProductList = (product) => {
        return (
            <View style={commonStyles.category}>
                {/* Picture */}
                <View style={{ alignItems: 'center', flex: 1, flexDirection: 'row', alignContent: 'center', alignSelf: 'center' }}>
                    <Image
                        source={{ uri : 'https://picsum.photos/100'}}
                        resizeMode={'contain'}
                        style={{ width: 100, height: 100 }}
                    />
                </View>
                {/* Name and Time */}
                <View style={{ paddingLeft: 5, flex: 3 }}>
                    <Text>{product.productName}</Text>
                    <Text>{product.price}</Text>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={{ backgroundColor: '#eee', flex: 1 }}>
                {
                    this.state.done &&
                    <FlatList
                        style={{}}
                        data={this.state.listProductOfCategory}
                        renderItem={(product) => { return this.renderProductList(product.item) }}
                        keyExtractor={(item, index) => String(item._id)}
                    />
                    ||
                    <View style={{ flex: 1 }}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                }
                
            </View>
        );
    }
}
