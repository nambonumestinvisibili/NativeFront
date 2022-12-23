import 'react-native-gesture-handler'
import React from 'react'
import AppStack from './screens/AppStack'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
      {false && <UnregisteredStack />}
    </NavigationContainer>
  )
}
