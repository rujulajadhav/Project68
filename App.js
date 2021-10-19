import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FacebookScreen from './screens/fb';
import InstagramScreen from './screens/in';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

export default class App extends React.Component{
  render(){
    return (
      <AppContainer/>
    )
    }
}
const TabNavigator = createBottomTabNavigator ({
  Facebook : {screen:FacebookScreen},
  Instagram : {screen:InstagramScreen}
})
const AppContainer = createAppContainer(TabNavigator)