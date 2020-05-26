import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import { SaTitle, SaText, SaViewMode } from '../sa'

const DATA = [
  {
    id: 0,
    sum: 1755,
    type: 'income',
    title: 'Salary which can be larger',
    currency: 'usd',
  },
  {
    id: 1,
    sum: 1155,
    type: 'waste',
    title: 'Credit',
    currency: 'usd',
  },
  { 
    id: 2,
    sum: 3,
    type: 'waste',
    title: 'Bread',
    currency: 'usd',
  },
]

export default ({ headerType, style }) => {
  return (
    <View style={ style }>
      <View style={ styles.header }>
        { headerType === 'title' ?
          (
            <SaTitle>Operations</SaTitle>
          )
          :
          (
            <View>
              <Text>Filters</Text>
            </View>
          )
        }

        <SaViewMode />
      </View>

      <FlatList
        data={ DATA }
        renderItem={ ({ item }) => <SaText>{item.title}</SaText> }
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
  },
  list:{
    // flex: 1,
  },  
})