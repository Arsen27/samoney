import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'

import { SaTopBar } from '../components/sa'

import { OperationsList } from '../components/operations'

export default ({ route }) => {
  return (
    <View style={ styles.container }>
      <ScrollView style={ styles.content }>
        <SaTopBar route={ route } />
        <OperationsList style={{ marginTop: 30 }} headerType='filter' />
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