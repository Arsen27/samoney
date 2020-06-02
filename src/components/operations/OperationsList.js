import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { SaTitle, SaText, SaViewMode, SaColoredIcon } from '../sa'

import { OperationsRectItem, OperationsListItem } from './'

const DATA = [
  {
    id: 0,
    sum: 1755,
    type: 'income',
    title: 'Salary which can be larger',
    currency: 'usd',
    billType: 'wallet',
  },
  {
    id: 1,
    sum: 1155,
    type: 'waste',
    title: 'Credit',
    currency: 'usd',
    billType: 'wallet',
  },
  { 
    id: 2,
    sum: 3,
    type: 'waste',
    title: 'Bread',
    currency: 'usd',
    billType: 'wallet',
  },
]

export default ({ headerType, style }) => {

  const [ viewMode, setViewMode ] = useState('rect')

  const viewToggle = (type) => {
    setViewMode(type)
  }

  const listItems = DATA.map(item => 
    <OperationsListItem 
      key={ item.id } 
      type={ item.type } 
      title={ item.title } 
      sum={ item.sum } 
      billType={ item.billType } 
      currency={ item.currency }
    />
  )

  const rectItems = DATA.map(item => 
    <OperationsRectItem 
      key={ item.id } 
      type={ item.type } 
      title={ item.title } 
      sum={ item.sum } 
      billType={ item.billType } 
      currency={ item.currency }
    />
  )

  return (
    <View style={ style }>
      <View style={ styles.header }>
        { headerType === 'title' ?
          (
            <SaTitle>Operations</SaTitle>
          )
          :
          (
            <View style={ styles.filters }>
              <SaColoredIcon name='filter' size={11} />
              <SaText style={{ marginLeft: 7 }} size={16}>Filters</SaText>
            </View>
          )
        }

        <SaViewMode currentView={ viewMode } handler={ viewToggle } />
      </View>

      <View style={ 
        viewMode === 'list' ? styles.listMode : styles.rectMode
      }>
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
  rectMode: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  filters: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})