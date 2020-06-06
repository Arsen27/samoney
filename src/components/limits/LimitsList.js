import React from 'react'
import { View, StyleSheet } from 'react-native'

import { SaTitle } from '../sa'
import { Limit } from './'
import { upperCaseFirstFilter } from '../../utils/filters'
 
export default ({ style, type, data }) => {
  
  const items = data.map(item => (
    <Limit
      key={ item.id }
      type={ item.type }
      sum={ item.sum }
      period={ item.period }
      subject={ item.subject }
    />
  ))

  return (
    <View style={ style }>
      <SaTitle style={{ marginBottom: 20 }}>
        { upperCaseFirstFilter(type) }
      </SaTitle>
      <View>
        { items }
      </View>
    </View>
  )
}