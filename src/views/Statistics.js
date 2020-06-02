import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'

import { SaTopBar, SaText, SaColors, SaTitle } from '../components/sa'

import { CalendarChart } from '../components/statistics'

export default ({ route }) => {
  return (
    <View style={ styles.container }>
      <ScrollView style={ styles.content }>
        <SaTopBar route={ route } />

        <View style={ styles.limits }>
          <SaText size={18}>Limit</SaText>
          <SaText>you have 5 limits</SaText>
        </View>

        <View style={ styles.incomesContainer }>
          <View style={{ marginBottom: 20 }}>
            <SaTitle>Incomes</SaTitle>
          </View>
          <View style={ styles.incomes }>
            <CalendarChart />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01031E',
  },
  content: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  limits: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: SaColors.bgPrimary,
    paddingHorizontal: 26,
    paddingVertical: 18,
    borderRadius: 100,
  },
  incomesContainer: {
    marginTop: 35,
  },
  incomes: {

  },
})