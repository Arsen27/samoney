import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

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
    <View style={styles.root}>
      <View style={styles.container}>
        <Dashboard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },  
  container: {
    paddingVertical: 100,
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: '#01031E',
  },
  text: {
    color: '#fff',
  }
});

