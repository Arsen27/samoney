import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

import { SaColors } from './'

export default ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options

  if (focusedOptions.tabBarVisible === false) {
    return null
  }

  const leftRoutes = state.routes.slice(0, 2)
  const rightRoutes = state.routes.slice(2, 4)

  const buttonRender = (route, index) => {
    const { options } = descriptors[route.key];
    const label =
      options.tabBarLabel !== undefined
        ? options.tabBarLabel
        : options.title !== undefined
        ? options.title
        : route.name;

    const isFocused = state.index === index

    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      })
  
      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name)
      }
    }
  
    const onLongPress = () => {
      navigation.emit({
        type: 'tabLongPress',
        target: route.key,
      });
    };

    return (
      <TouchableOpacity
        key={index}
        accessibilityRole="button"
        accessibilityRole="button"
        accessibilityStates={isFocused ? ['selected'] : []}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={ onPress }
        onLongPress={ onLongPress }
        style={{ flex: 1 }}
      >
        <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
          { label }
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={ styles.container }>
      <View style={ styles.left }>
        { 
          leftRoutes.map((route, index) => {
            return buttonRender(route, index)
          }) 
        }
      </View>

      <TouchableOpacity style={ styles.addButton }>
        <View style={ styles.addButtonIcon }>
          <View style={ styles.horizontalLine }></View>
          <View style={ styles.verticalLine }></View>
        </View>
      </TouchableOpacity>

      <View style={ styles.right }>
        { 
          rightRoutes.map((route, index) => {
            return buttonRender(route, index)
          }) 
        }
      </View>
    </View>
  )  
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    height: 60,
    backgroundColor: SaColors.bgPrimary,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
  },
  left: {
    flexDirection: 'row',
    position: 'absolute',
  },
  right: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
  },
  addButton: {
    height: 76,
    width: 76,
    backgroundColor: SaColors.accent1,
    borderRadius: 60,
    position: 'absolute',
    bottom: 20,
    left: Dimensions.get('window').width / 100 * 50,
    transform: [{ 'translateX': -32 }]
  },  
  addButtonIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  horizontalLine: {
    height: 4,
    width: 34,
    borderRadius: 10,
    backgroundColor: SaColors.contrast,
    // position: 'absolute',
    // top: '50%',
    // transform: [{ 'translateY': -2 }],
  },
  verticalLine: {
    width: 4,
    height: 34,
    borderRadius: 10,
    backgroundColor: SaColors.contrast,
    position: 'absolute',
    top: 21,
    left: '50%',
    transform: [{ 'translateX': -2 }],
  }
})