import 'react-native-gesture-handler'
import React from 'react'
import AppStack from './screens/AppStack'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import store from './store/store'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack />
        {false && <UnregisteredStack />}
      </NavigationContainer>
    </Provider>
  )
}
