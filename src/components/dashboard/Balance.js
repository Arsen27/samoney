import React from 'react'
import { StyleSheet, View } from 'react-native'

import { SaText, SaNumeric, SaNumericChange } from '../sa'

export default () => {
  return (
    <View style={styles.bg}>

      {/* Current balance */}
      <View style={{ marginBottom: 15 }}>
        <SaText>Current balance</SaText>
        <SaNumeric size={50} weight='bold'>
          1 024.10$
        </SaNumeric>
      </View>

      {/* By period */}
      <View>
        <View style={{ marginBottom: 12 }}>
            <SaText>Last month</SaText>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: '50%' }}>
            <SaNumericChange 
              sum={5507}
              type="income"
              currency="usd"  
            />
          </View>
          <View>
            <SaNumericChange 
              sum={4790}
              type="waste"
              currency="usd"  
            />
          </View>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#1B1C2A',
    paddingVertical: 30,
    paddingHorizontal: 28,
    borderRadius: 38,
  },  
})

