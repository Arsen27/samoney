import React from 'react'
import { View, StyleSheet } from 'react-native'

import { SaText, SaColors, SaColoredIcon, SaNumericChange } from '../sa'

export default ({ title, sum, type, currency, billType }) => {
  const billIcon = {
    wallet: 'wallet',
    credit: 'precentage',
    goal: 'goal',
  }

  return (
    <View style={ styles.mainContainer }>
      <View style={ styles.topContainer }>
        <View style={ styles.sum }>
          <SaNumericChange 
            type={ type } 
            sum={ sum } 
            currency={ currency } 
            weight='semibold'
          />
        </View>
        <SaColoredIcon style={ styles.bill } name={ billIcon[billType] } />
      </View>
      <View style={ styles.bottomContainer }>
        <SaText>{ title }</SaText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '48%',
    backgroundColor: SaColors.bgPrimary,
    paddingVertical: 19,
    paddingHorizontal: 21,
    borderRadius: 29,
    marginBottom: 16,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },  
  bottomContainer: {

  },
  sum: {
    flexDirection: 'row',
    alignItems: 'center',
  } 
})