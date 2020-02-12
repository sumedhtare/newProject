/**
 * Sample React Native@0.61.5 Template with Navigation and Redux enabled
 * https://github.com/sumedhtare/newProject.git
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {fadeIn} from 'react-navigation-transitions';
import FirstScreen from './Components/firstscreen'
import SecondScreen from './Components/secondscreen'

const bottomScreens ={
  SecondScreen:{screen:SecondScreen}
}
const bottomScreenConfig ={
 // initialRouteName: 'Feed',
 activeColor: '#2d2d2d',
 inactiveColor: 'grey',
 barStyle: { backgroundColor: '#f8f8f8' },
 labeled:true,
 //shifting:true,
 //animationEnabled:false,

 defaultNavigationOptions: ({ navigation }) => ({

  tabBarIcon: ({ focused, horizontal, tintColor }) => {
    const { routeName } = navigation.state;
    let iconName;
    if (routeName == 'SecondScreen') {
      iconName = 'home';
    }
    // You can return any component that you like here!
    return (
      // <View style={{backgroundColor:'red'}}>
       <Icon name={"ios-"+iconName} size={20} color={focused? '#2d2d2d':'grey'} style={{ alignSelf: 'center' }} />
      //  </View>
    )

  },

 })
}
const BottomNavigator = createMaterialBottomTabNavigator(
  bottomScreens,
  bottomScreenConfig
  );



 const stackScreens ={
  SecondScreen:BottomNavigator,
  FirstScreen:{screen:FirstScreen},
  
 }

 const stackScreensConfig = {
  transitionConfig: () => fadeIn(),
  // cardStyle:{backgroundColor:'#f8f8f8'},
  defaultNavigationOptions: {
    header: null,
    gesturesEnabled: false,
  }
 }

const AppNavigator = createStackNavigator(
  stackScreens,
  stackScreensConfig
  );

export default createAppContainer(AppNavigator);