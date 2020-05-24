import React from 'react'
import { ScrollView } from 'react-native'

import { SaText } from '../components/sa'

import { Balance } from '../components/dashboard'

export default () => {
  return (
    <ScrollView>
      <Balance />
    </ScrollView>
  )
}