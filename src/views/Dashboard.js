import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'

import { Balance } from '../components/dashboard'
import { OperationsList } from '../components/operations'
import { BillsList } from '../components/bills'

import { SaTopBar } from '../components/sa'
  
export default ({ route, navigation }) => {
  return (
    <View style={ styles.container }>
      <ScrollView style={ styles.content }>
        <SaTopBar navigation={ navigation } route={ route } />
        <Balance />   
        <BillsList
          style={{ marginTop: 40 }}
        />
        <OperationsList 
          headerType='title' 
          style={{ marginTop: 40 }}
        />
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