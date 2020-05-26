import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import { SaTitle, SaText, SaViewMode } from '../sa'

const DATA = [
  {
    id: 0,
    type: 'simple',
    name: 'Card (Mastercard)',
    balance: 3750,
    currency: 'usd', 
  },
  {
    id: 1,
    type: 'simple',
    name: 'Cash',
    balance: 1750,
    currency: 'usd', 
  },
  {
    id: 2,
    type: 'credit',
    name: 'House',
    balance: -10750,
    currency: 'usd', 
  },
]

export default ({ style }) => {
  return (
    <View style={ style }>
      <View style={ styles.header }>
        <SaTitle>Bills</SaTitle>

        <SaViewMode />
      </View>

      <FlatList 
        data={ DATA }
        renderItem={ ({ item }) => <SaText>{ item.name }</SaText> }
        keyExtractor={ item => item.id }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
  }
})