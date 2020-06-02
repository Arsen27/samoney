import React from 'react'
import { StyleSheet, View } from 'react-native'

import { SaNumeric, SaColoredIcon } from './' 

export default ({ sum, currency, type, color, weight, font, size }) => {

  let num = sum
  if ( num > 1000 ) {
    num = num.toString().slice(0, -3) + ' ' + num.toString().slice(-3)
  } 
  
  const typeIcon = {
    income: 'increase',
    waste: 'decrease',
  }

  const currencySym = {
    'usd': '$',  
  }

  return (
    <View style={ styles.container }>
      <SaColoredIcon 
        name={ typeIcon[type] } 
        size={10} 
        style={ styles.icon }
      />

      <SaNumeric
        style={ styles.sum }
        color={color}
        weight={weight}
        font={font}
        size={size}
      >{ num + currencySym[currency] }</SaNumeric>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 11, 
    height: 11,
    marginRight: 8,
  }
})