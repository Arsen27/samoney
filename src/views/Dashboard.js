import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'

import { SaText } from '../components/sa'

import { Balance } from '../components/dashboard'

export default () => {
  return (
    <ScrollView style={ styles.container }>
      <Balance />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#01031E',
  }
})