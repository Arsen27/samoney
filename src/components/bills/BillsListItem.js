import React from 'react'
import { StyleSheet, View } from 'react-native'

import { SaText, SaNumericBalance, SaColors, SaColoredIcon } from '../sa'

export default ({ name, balance, type, gap }) => {
  const types = {
    simple: 'wallet',
    credit: 'percentage',
    goal: 'goal',
  }

  return (
    <View style={[ styles.mainContainer, { marginBottom: gap !== 0 && (gap || 16) } ]}>
      <View style={ styles.leftContainer }>
        <SaColoredIcon name={ types[type] } style={{ marginRight: 10 }} />
        <SaText size={16}>{ name }</SaText>
      </View>
      <View style={ styles.rightContainer }>
        <View style={ styles.balanceContainer }>
          <SaNumericBalance balance={ balance } />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: SaColors.bgPrimary,
    flexDirection: 'row',
    justifyContent: "space-between",
    borderRadius: 100,
    flex: 1,
  },
  leftContainer: {
    paddingVertical: 21,
    paddingHorizontal: 23,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    paddingVertical: 3,
    paddingHorizontal: 3,
  },
  balanceContainer: {
    borderRadius: 100,
    paddingHorizontal: 29,
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    backgroundColor: SaColors.billBalance,
  },
})