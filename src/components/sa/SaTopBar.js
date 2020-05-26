import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SaText } from './'

import Constants from "expo-constants"

import * as colors from './SaColors'

export default ({ title }) => {
  return (
    <View style={ styles.container }>
      <SaText 
        align='center'
        size={24}
        weight="semibold"
    >{ title }</SaText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: Constants.statusBarHeight + 20,
    paddingBottom: 10,
    backgroundColor: colors.bgMain,
  },
})
