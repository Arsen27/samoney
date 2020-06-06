import React, { useState } from 'react'
import { View, StyleSheet, Switch } from 'react-native'

import { SaNumeric, SaText, SaColors } from '../sa'

import { numericSpaceFilter } from '../../utils/filters'

export default ({ type, sum, period, subject }) => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={ styles.container }>
      <View style={ styles.left }>
        <SaNumeric
          color={
            type === 'goal' ? SaColors.accent3 : SaColors.accent2
          }
          style={{ marginRight: 5 }}
        >
          {'<'}
        </SaNumeric>

        <SaNumeric 
          weight="bold"
          style={{ marginRight: 5 }}
        >
          { numericSpaceFilter(sum) }$
        </SaNumeric>

        <SaText
          style={{ marginRight: 5 }}
        >
          /{ period }
        </SaText>

        <SaText
          color={
            type === 'goal' ? SaColors.accent3 : SaColors.accent2
          }
        >for { subject }</SaText>
      </View>

      <View>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 21,
    paddingHorizontal: 23,
    backgroundColor: SaColors.bgPrimary,
    borderRadius: 50,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
  }
})