import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

import { SaNumeric } from './' 

export default ({ sum, currency, type, color, weight, font, size }) => {
  
  let image
  if ( type === 'income' ) {
    image = require('../../../assets/icons/income.png')
  } else if( type === 'waste' ) {
    image = require('../../../assets/icons/waste.png');
  }

  const currencySym = {
    'usd': '$',  
  }

  return (
    <View style={ styles.container }>
      <Image source={ image } style={ styles.icon } />

      <SaNumeric
        style={ styles.sum }
        color={color}
        weight={weight}
        font={font}
        size={size}
      >{ sum + currencySym[currency] }</SaNumeric>
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