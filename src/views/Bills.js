import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'

import { SaTopBar } from '../components/sa'

import { BillsListByCategories } from '../components/bills'

export default ({ route, navigation }) => {
  return (
    <View style={ styles.container }>
      <ScrollView style={ styles.content }>
        <SaTopBar navigation={ navigation } route={ route } />
        
        <BillsListByCategories />
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
