import 'react-native-gesture-handler'
import React from 'react'
import AppStack from './screens/AppStack'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import store from './store/store'
import * as SplashScreen from 'expo-splash-screen';
import useSplashScreen from './logic/useSplashScreen'

SplashScreen.preventAutoHideAsync()

export default function App() {

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
        <AppStack />
        {false && <UnregisteredStack />}
      </NavigationContainer>
    </Provider>
  )
}
