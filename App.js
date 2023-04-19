import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import store from './store/store'
import * as SplashScreen from 'expo-splash-screen'
import useSplashScreen from './logic/useSplashScreen'
import { Logs } from 'expo'
import NavigatedApp from './screens/NavigatedApp'

SplashScreen.preventAutoHideAsync()
Logs.enableExpoCliLogging()

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
        <NavigatedApp />
      </NavigationContainer>
    </Provider>
  )
}
