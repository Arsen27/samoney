import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'

import { SaText } from '../components/sa'

import { Balance } from '../components/dashboard'

export default ({ navigation }) => {
  setTimeout(() => {
    console.log(navigation)
  }, 2000)

  return (
    <View style={ styles.container }>
      <ScrollView style={ styles.content }>
        <Balance />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01031E',
  },
  content: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  }
})