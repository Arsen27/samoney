import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

import { SaText, SaNumeric, SaNumericChange } from '../sa'

export default () => {
  return (
    <View style={ styles.bg }>
      {/* Current balance */}
      <View style={{ marginBottom: 15 }}>
        <SaText>Current balance</SaText>
        <SaNumeric size={50} weight='bold'>
          1 024.10$
      </SaNumeric>
      </View>

      {/* By period */}
      <View>
        <View style={{ marginBottom: 12, flexDirection: 'row', alignItems: 'center' }}>
          <SaText>Last month</SaText>
          <Image style={ styles.chevron } source={ require('../../../assets/icons/chevron-light.png') } />
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
  container: {
    display: 'flex',
    justifyContent: 'center',
  },  
  bg: {
    backgroundColor: '#1B1C2A',
    paddingVertical: 30,
    paddingHorizontal: 28,
    borderRadius: 38,
    width: '100%',
  },
  chevron: {
    width: 8,
    height: 4,
    marginLeft: 8,
  },  
})

