import React, { Component } from 'react';
import {Router, Scene, Tabs } from 'react-native-router-flux'

import Home from './components/Home'
import Explore from './components/Explore';
import Likes from './components/Likes';
import Profile from './components/Profile';

import TabIcon from './components/global/TabBarIcons'


export default class componentName extends Component {
  render() {
    return (
      <Router>
          <Tabs>
              <Scene key = "home"
                    iconName = "home"
                    icon = {TabIcon}
                    component = {Home}
                    title = "Home"
                    initial
              />
              <Scene key = "explore"
                    iconName = "search"
                    icon = {TabIcon}
                    component = {Explore}
                    title = "Explore"
              />
              <Scene key = "likes"
                    iconName = "heart"
                    icon = {TabIcon}
                    component = {Likes}
                    title = "Likes"
              />

              <Scene key = "profile"
                    iconName = "user"
                    icon = {TabIcon}
                    component = {Profile}
                    title = "Profile"
              />

          </Tabs>
      </Router>
    );
  }
}