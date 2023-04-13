import 'react-native-gesture-handler'
import React from 'react'
import AppStack from './screens/AppStack'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import store from './store/store'
import * as SplashScreen from 'expo-splash-screen';
import useSplashScreen from './logic/useSplashScreen'
import UnregisteredStack from './screens/not-registered-screens/UnregisteredStack'
import { DEV_UNREGISTERED } from './config/devconfiguration'

SplashScreen.preventAutoHideAsync()

export default function App() {
  // console.log(AppState.currentState)
  const {
    appIsReady,
    onLayoutRootView
  } = useSplashScreen()

  if (!appIsReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer onReady={onLayoutRootView}>
        {DEV_UNREGISTERED 
        ? <UnregisteredStack />
        : <AppStack />}
      </NavigationContainer>
    </Provider>
  )
}
