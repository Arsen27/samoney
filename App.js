import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { SaNavigation, SaTopBar } from './src/components/sa' 

import { Dashboard, Operations, Statistics, Bills, Limits } from './src/views'
import SaTabBar from './src/components/sa/SaTabBar';

async function loadApplication() {
  await Font.loadAsync({
    'muli-regular': require('./assets/fonts/Muli-Regular.ttf'),
    'muli-medium': require('./assets/fonts/Muli-Medium.ttf'),
    'muli-semibold': require('./assets/fonts/Muli-SemiBold.ttf'),
    'muli-bold': require('./assets/fonts/Muli-Bold.ttf'),
    'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'montserrat-medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'montserrat-semibold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'sa-icons': require('./assets/icon-fonts/sa-icons.ttf'),
  });
}


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {

  const [ isReady, setIsReady ] = useState(false);
  const [ currentRouteName, setCurrentRouteName ] = useState('')

  const updateRouteName = () => {
    setCurrentRouteName(SaNavigation.getCurrentRouteName())
  }

  useEffect(() => {
    updateRouteName()
  })

  if ( !isReady ) {
    return (
      <AppLoading
        startAsync={ loadApplication } 
        onError={ (err) => console.log(err) }
        onFinish={ () => setIsReady(true) }
      />
    );
  }

  const Home = () => {
    return (
      <Tab.Navigator
        tabBar={ props => <SaTabBar {...props}/> }
        // screenOptions={({ route }) => ({
        //   tabBarIcon: ({ focused, color, size }) => {
        //     let iconName;
        //     if (route.name === 'TabA') {
        //       iconName = focused
        //       ? 'ios-information-circle'
        //       : 'ios-information-circle-outline';
        //     } else if (route.name === 'TabB') {
        //       iconName = focused
        //       ? 'ios-list-box'
        //       : 'ios-list';
        //     }
        //   return <View><Text>1</Text></View>;
        //   },
        // })}
        // tabBarOptions={{
        //   activeTintColor: 'tomato',
        //   inactiveTintColor: 'gray',
        // }}
      >
        <Tab.Screen name="Dashboard" component={ Dashboard } />
        <Tab.Screen name="Operations" component={ Operations } />
        <Tab.Screen name="Statistics" component={ Statistics } />
        <Tab.Screen name="Bills" component={ Bills } />
      </Tab.Navigator>
    );
  }
  
  return (
    <NavigationContainer 
      ref={ SaNavigation.ref }
      onStateChange={() => {
        updateRouteName()
      }}
    > 
      <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen name="Home" component={ Home } />

        {/* <Drawer.Screen name="Dashborad" component={ Dashboard } /> */}
        <Drawer.Screen name="Limits" component={ Limits } />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});

