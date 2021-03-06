import React from 'react'
import { Text } from 'react-native'

export default ({ children, color, size, weight, font, style }) => {
  return (   
    <Text
      style={[{
        color: color || '#FFFFFF',
        fontSize: size || 16,
        fontFamily: font || 'montserrat-' + (weight || 'medium'),
      }, style]}
    >
      { children }
    </Text>
  );
}
