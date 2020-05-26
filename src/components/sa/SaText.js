import React from 'react'
import { Text } from 'react-native'

export default ({ children, color, size, weight, align, font, style, padding }) => {
  return (
    <Text style={[{
      color: color || '#FFFFFF',
      fontSize: size || 14,
      textAlign: align || 'left',
      fontFamily: font || 'muli-' + (weight || 'regular'),
      paddingVertical: padding && padding[0] || 0,
      paddingHorizontal: padding && padding[1] || 0,
    }, style]}>
      { children }
    </Text>
  )
}