import React from 'react'
import { Text, View } from 'react-native'

import { SaNumeric, SaColors } from './'

import { numericSpaceFilter } from '../../utils/filters'


export default ({ balance, size, weight }) => {
  let sym
  let symColor
  if ( balance > 0 ) {
    sym = '+'
    symColor = SaColors.accent1
  } else if ( balance < 0 ) {
    sym = '-'
    symColor = SaColors.accent2
  } else {
    sym = ''
    symColor = null
  }

  let num = balance
  if ( num < 0 ) {
    num *= -1
  } 

  return (
    <View>
      <SaNumeric
        size={ size || 18 }
        weight={ weight || 'bold' }
      >
        <Text style={ symColor && { color: symColor }}>{ sym }</Text>
        { numericSpaceFilter(num) }
      </SaNumeric>
    </View>
  )
}
