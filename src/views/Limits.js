import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import { SaTopBar } from '../components/sa'

import { LimitsList } from '../components/limits'

const DATA = [
  {
    id: '0',
    type: 'waste',
    sum: 11000,
    currency: '$',
    period: 'month',
    subject: 'food',
  },
  {
    id: '1',
    type: 'waste',
    sum: 7000,
    currency: '$',
    period: 'month',
    subject: 'food',
  },
  {
    id: '2',
    type: 'goal',
    sum: 15000,
    currency: '$',
    period: 'month',
    subject: 'car',
  },
  {
    id: '3',
    type: 'goal',
    sum: 1000,
    currency: '$',
    period: 'month',
    subject: 'laptop',
  },
  {
    id: '4',
    type: 'waste',
    sum: 13000,
    currency: '$',
    period: 'month',
    subject: 'food',
  },
  {
    id: '5',
    type: 'waste',
    sum: 15000,
    currency: '$',
    period: 'month',
    subject: 'food',
  },
]

export default ({ route }) => {
  return (
    <View style={ styles.container }>
      <ScrollView style={ styles.content }>
        <SaTopBar route={ route } />
        <View>
          <LimitsList 
            type='spendings'
            data={ DATA.filter(item => item.type === 'waste') } 
            style={{ marginTop: 30 }}  
          />
          <LimitsList 
            type='goals'
            data={ DATA.filter(item => item.type === 'goal') } 
            style={{ marginTop: 30 }}  
          />
        </View>
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