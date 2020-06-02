import React from 'react'
import { View, StyleSheet } from 'react-native'

import { SaIcon, SaColors } from './'

export default ({ currentView, handler }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <SaIcon 
        name='rect-view' 
        size={17}
        onPress={() => handler('rect')} 
        style={[
          styles.rect,
          currentView === 'rect' && { color: SaColors.contrast }
        ]} 
      />
      <SaIcon 
        name='list-view' 
        size={17}
        onPress={() => handler('list')} 
        style={[
          styles.list,
          currentView === 'list' && { color: SaColors.contrast }
        ]} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  rect: {
    color: SaColors.contrastLight,
    marginRight: 13,
  },
  list: {
    color: SaColors.contrastLight,
  }
})
