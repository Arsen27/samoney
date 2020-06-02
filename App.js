import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SaNavigation } from './src/components/sa' 

import { Dashboard, Operations, Statistics, Bills } from './src/views'

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

  return (
    <NavigationContainer 
      ref={ SaNavigation.ref }
      onStateChange={() => {
        updateRouteName()
      }}
    > 
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={ Dashboard } />
        <Tab.Screen name="Operations" component={ Operations } />
        <Tab.Screen name="Statistics" component={ Statistics } />
        <Tab.Screen name="Bills" component={ Bills } />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});

