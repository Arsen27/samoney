import React from 'react'
import { StyleSheet, View } from 'react-native'

import { SaText, SaNumericBalance, SaColors, SaColoredIcon } from '../sa'

export default ({ title, sum, type }) => {
  return (
    <View>
      <SaText>{ title }</SaText>
    </View>
  )
}

const styles = StyleSheet.create({

})