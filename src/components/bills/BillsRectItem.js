import React from 'react'
import { View, StyleSheet } from 'react-native'

import { SaText } from '../sa'

export default () => {
  return (
    <View style={ styles.mainContainer }>
      <SaText>Test</SaText>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  }
})