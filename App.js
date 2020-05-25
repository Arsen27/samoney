import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SaText } from './src/components/sa' 

import Dashboard from './src/views/Dashboard'

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
  });
}

const Stack = createStackNavigator();

export default function App() {

  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={(err) => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="dashboard" component={ Dashboard } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

