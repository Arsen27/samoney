import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { SaTitle, SaViewMode } from '../sa'
import { BillsListItem, BillsRectItem } from '.'

const DATA = [
  {
    id: '0',
    type: 'simple',
    name: 'Card (Mastercard)',
    balance: 3750,
    currency: 'usd', 
  },
  {
    id: '1',
    type: 'simple',
    name: 'Cash',
    balance: 1750,
    currency: 'usd', 
  },
  {
    id: '2',
    type: 'credit',
    name: 'House',
    balance: -10750,
    currency: 'usd', 
  },
  {
    id: '3',
    type: 'goal',
    name: 'MacBook Pro 16',
    balance: 2750,
    from: 3700,
    currency: 'usd', 
  },
]

function dataSort(data, types) {
  let obj = {}
  
  types.forEach(type => {
    let typeElements = data.filter(item => item.type === type)
    let typeObject = {} 
    
    typeObject.rect = typeElements.map(item => (
      <BillsRectItem 
        key={ item.id } 
        name={ item.name } 
        balance={ item.balance } 
        type={ item.type } 
      />
    ))

    typeObject.list = typeElements.map(item => (
      <BillsListItem 
        key={ item.id } 
        name={ item.name } 
        balance={ item.balance } 
        type={ item.type } 
      />
    ))

    obj[type] = typeObject
  })

  return obj
} 

const items = dataSort(DATA, ['simple', 'credit', 'goal'])

export default ({ style }) => {

  const [ viewMode, setViewMode ] = useState('rect')

  const viewToggle = (type) => {
    setViewMode(type)
  }

  return (
    <View style={ style }>
      <View>
        <View style={ styles.header }>
          <SaTitle>Simple</SaTitle>

          <SaViewMode currentView={ viewMode } handler={ viewToggle } />
        </View>

        <View>
          { viewMode === 'list' ? items.simple.list : items.simple.rect }
        </View>
      </View>

      <View>
        <View style={ styles.header }>
          <SaTitle>Credits</SaTitle>
        </View>

        <View>
          { viewMode === 'list' ? items.credit.list : items.credit.rect }
        </View>
      </View>

      <View>
        <View style={ styles.header }>
          <SaTitle>Goals</SaTitle>
        </View>

        <View>
          { viewMode === 'list' ? items.goal.list : items.goal.rect }
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
    marginBottom: 20,
    marginTop: 30,
  },
})
