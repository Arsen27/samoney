import React from 'react'
import { SaText } from './'

export default ({ children }) => {
  return (
    <SaText
      padding={[0, 10]}
      size={22}
    >
      { children }  
    </SaText>
  )
}