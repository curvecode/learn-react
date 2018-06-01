import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';
import Product from '../../model/Product';
import ProductService from '../../service/productService';
import commonStyles from '../../styles/common';

export default class ProductDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false,
            product: new Product()
        }
        this.fetchData('5b0fe797d86adc060cf05720');
    }
    fetchData(id) {
        ProductService.fetchProductDetail(id).then((data) => {
            this.setState({
                product: data[0],
                done: true
            })
        }).catch((error) => {
            this.setState({
                done: true,
                product: new Product()
            });
        })
    }
    render() {
        return (
            <View style={{ backgroundColor: '#eee', flex: 1 }}>
                {
                    this.state.done &&
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 3, alignContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={{ uri: 'https://picsum.photos/300' }}
                                resizeMode={'contain'}
                                style={{ width: 300, height: 300 }}
                            />
                        </View>
                        <View style={{flex: 1, alignContent: 'center', marginTop: 10}}>
                            <Text>Product name: {this.state.product.productName}</Text>
                            <Text>Price: {this.state.product.price}</Text>
                        </View>
                    </View>
                    ||
                    <View style={{ flex: 1 }}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                }
            </View>
        );
    }
}
