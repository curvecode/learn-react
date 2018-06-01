import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createTabNavigator } from 'react-navigation';


import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HistoryTab from './historyTabScreen';
import SearchTab from './searchTabScreen';
import ListCategory from './productStackScreen/listCategoryScreen';
import ListProduct from './productStackScreen/listProductCategoryScreen';
import ProductDetail from './productStackScreen/productDetailScreen';

export default createTabNavigator({
    History: {
        screen: HistoryTab,
        navigationOptions: {
            title: 'History',
            tabBarIcon: ({ focused, tintColor }) => {
                return <Ionicons name={focused ? 'ios-list' : 'ios-list-outline'} size={26} color={tintColor} />;
            }
        }
    },
    Search: {
        screen: SearchTab,
        navigationOptions: {
            title: 'Search',
            tabBarIcon: ({ focused, tintColor }) => {
                return <Ionicons name={focused ? 'ios-search' : 'ios-search-outline'} size={26} color={tintColor} />;
            }
        }
    },
    ListCategory: {
        screen: ListCategory,
        navigationOptions: {
            title: 'List category',
            tabBarIcon: ({ focused, tintColor }) => {
                return <Ionicons name={focused ? 'ios-apps' : 'ios-apps-outline'} size={26} color={tintColor} />;
            }
        }
    },
    ListProduct: {
        screen: ListProduct,
        navigationOptions: {
            title: 'List products',
            tabBarIcon: ({ focused, tintColor }) => {
                return <Ionicons name={focused ? 'ios-apps' : 'ios-apps-outline'} size={26} color={tintColor} />;
            }
        }
    },
    ProductDetail: {
        screen: ProductDetail,
        navigationOptions: {
            title: 'Product Detail',
            tabBarIcon: ({ focused, tintColor }) => {
                return <Ionicons name={focused ? 'ios-apps' : 'ios-apps-outline'} size={26} color={tintColor} />;
            }
        }
    }
}, {
        initialRouteName: 'ListCategory',
        tabBarPosition: 'bottom',
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#fff',
            labelStyle: {
                fontSize: 14,
            },
            style: {
                backgroundColor: '#f4511e',
            },
            showIcon: true,
            showLabel: false
        }
    }
);
