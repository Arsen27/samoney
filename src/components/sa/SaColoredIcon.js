import React from 'react'
import { SaIcon, SaColors } from './'

export default ({ name, size, style }) => {
  const colors = {
    'wallet': SaColors.accent1,
    'percentage': SaColors.accent2,
    'goal': SaColors.accent3,
    'increase': SaColors.accent1,
    'decrease': SaColors.accent2,
    'arrow-right': SaColors.contrast,
    'arrow-left': SaColors.contrast,
    'chevron': SaColors.contrast,
    'glass': SaColors.contrast,
    'filter': SaColors.contrast,
  }

  return (
    <SaIcon 
      name={ name }
      size={ size } 
      style={[{
        color: colors[name],
      }, style]}
    />
  )
}