import React from 'react'
import { Text } from 'react-native'

export default ({ children, color, size, weight, align, font }) => {
  return (
    <Text style={{
      color: color || '#FFFFFF',
      fontSize: size || 14,
      textAlign: align || 'left',
      fontFamily: font || 'muli-' + (weight || 'regular'),
    }}>
      { children }
    </Text>
  )
}