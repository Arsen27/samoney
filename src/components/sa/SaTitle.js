import React from 'react'
import { SaText } from './'

export default ({ children, style }) => {
  return (
    <SaText
      padding={[0, 10]}
      size={22}
      style={ style }
    >
      { children }  
    </SaText>
  )
}