import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TransitionPresets } from '@react-navigation/stack'
import React from 'react'
import StackNames from '../constants/stacks'
import SplashScreen from './SplashScreen'
import DetailedSiteScreen from './registered-screens/detailed-site-screen/DetailedSiteScreen'
import SiteCreationScreen from './registered-screens/site-creation-screen/SiteCreationScreen'

const Stack = createNativeStackNavigator()

const AppStack = () => {

  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
          ...TransitionPresets.ModalSlideFromBottomIOS,
          headerShown: false,
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackVisible: false,
          contentStyle: {
            backgroundColor: '#fff'
          },
          cardOverlayEnabled: true,
      })}
    >
      <Stack.Screen
        name={StackNames.HomeScreen}
        component={SplashScreen} 
      />
      <Stack.Screen
        name={StackNames.DetailedSiteScreen}
        component={DetailedSiteScreen}
      /> 
      <Stack.Screen 
        name={StackNames.SiteCreationScreen}
        component={SiteCreationScreen}
      />
    </Stack.Navigator>
  )
}

export default AppStack