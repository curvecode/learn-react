import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './ProfileDetail/index';
import Invite from './ProfileDetail/invite';

export default createStackNavigator({
    HomeScreen: Home, // First screen
    InviteScreen: Invite
});
