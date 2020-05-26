import React from 'react'
import { StackActions } from '@react-navigation/native';

export const ref = React.createRef();
export const isMountedRef = React.createRef();

// Functions
export function navigate(name, params) {
  ref.current?.navigate(name, params);
}

export function push(...args) {
  ref.current?.dispatch(StackActions.push(...args));
}

export function getCurrentRouteName() {
  return ref.current?.getCurrentRoute().name
}