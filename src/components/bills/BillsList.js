import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { SaTitle, SaViewMode } from '../sa'
import { BillsListItem, BillsRectItem } from './'

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
]

export default ({ style }) => {

  const [ viewMode, setViewMode ] = useState('rect')

  const viewToggle = (type) => {
    setViewMode(type)
  }

  const listItems = DATA.map(item => 
    <BillsListItem key={ item.id } name={ item.name } balance={ item.balance } type={ item.type } />
  )

  const rectItems = DATA.map(item => 
    <BillsRectItem key={ item.id } name={ item.name } balance={ item.balance } type={ item.type } />
  )
  
  return (
    <View style={ style }>
      <View style={ styles.header }>
        <SaTitle>Bills</SaTitle>

        <SaViewMode currentView={ viewMode } handler={ viewToggle } />
      </View>

      <View>
        { viewMode === 'list' ? listItems : rectItems }
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
  },
})
