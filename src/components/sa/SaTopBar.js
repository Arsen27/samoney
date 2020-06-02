import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SaText, SaColors, SaColoredIcon } from './'

import Constants from "expo-constants"

export default ({ route }) => {
  return (
    <View style={ styles.container }>
      <View style={ styles.left }>
        <View style={ styles.menuToggle }>
          <View style={ styles.topLine }></View>
          <View style={ styles.bottomLine }></View>
        </View>
      </View>
      <SaText 
        align='center'
        size={24}
        weight="semibold"
      >{ route.name.toUpperCase() }</SaText>
      <View style={ styles.right }>
        <SaColoredIcon name='glass' size={19} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: Constants.statusBarHeight + 20,
    paddingBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: SaColors.bgMain,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    width: 30,
  },
  right: {
    width: 30,
    flexDirection: 'row',
    justifyContent: "flex-end",
  },
  menuToggle: {
    transform: [{ translateX: 5 }]
  },  
  topLine: {
    height: 2,
    width: 17,
    backgroundColor: SaColors.contrast,
    marginVertical: 4,
    transform: [{ translateX: -5 }]
  },
  bottomLine: {
    height: 2,
    width: 17,
    backgroundColor: SaColors.contrast,
    marginVertical: 4,
  },
})
