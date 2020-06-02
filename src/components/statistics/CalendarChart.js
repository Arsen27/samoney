import React from 'react'
import { View, Dimensions, StyleSheet } from 'react-native'

import { SaText, SaColors, SaColoredIcon } from '../sa'

import {
  LineChart,
} from "react-native-chart-kit";

export default () => {
  return (
    <View style={ styles.block }>                                 
      <View style={ styles.periodChoice }>
        <SaColoredIcon 
          name='arrow-left' 
          size={7} 
          style={{ marginTop: 3 }}
        />
        <SaText 
          weight='bold' 
          size={20}
          style={{ marginHorizontal: 8 }}
        >APRIL 2020</SaText>
        <SaColoredIcon 
          name='arrow-right' 
          size={7} 
          style={{ marginTop: -3 }}
        />
      </View>
      <LineChart
        data={{
          labels: ['1-7', '8-15', '16-23', '23-30'],
          datasets: [
            {
              data: [
                5,
                8,
                6,
                10,
              ]
            }
          ]
        }}
        width={Dimensions.get("window").width - 50} // from react-native
        height={160}
        // yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: SaColors.bgPrimary,
          backgroundGradientFrom: SaColors.bgPrimary,
          backgroundGradientTo: SaColors.bgPrimary,
          decimalPlaces: 0, // optional, defaults to 2dp
          color: () => SaColors.statisticsIncomes,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
            fontFamily: 'muli-regular',
            transform: [{ 'translateX': -25 }],
            position: 'absolute',
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: SaColors.accent1,
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
          fontFamily: 'montserrat-medium',
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    paddingVertical: 19,
    backgroundColor: SaColors.bgPrimary,
    width: '100%',
    borderRadius: 38,
  },
  periodChoice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  }
})