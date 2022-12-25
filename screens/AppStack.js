import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TransitionPresets } from '@react-navigation/stack'
import React from 'react'
import StackNames from '../constants/stacks'
import SplashScreen from './HomeScreen'
import DetailedVenueScreen from './registered-screens/detailed-venue-screen/DetailedVenueScreen'
import SiteCreationScreen from './registered-screens/site-creation-screen/SiteCreationScreen'
import VenueMapScreen from './registered-screens/venue-map-screen/VenueMapScreen'

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
        name={StackNames.VenueMapScreen}
        component={VenueMapScreen}
      />
      <Stack.Screen
        name={StackNames.DetailedSiteScreen}
        component={DetailedVenueScreen}
      /> 
      <Stack.Screen 
        name={StackNames.SiteCreationScreen}
        component={SiteCreationScreen}
      />
    </Stack.Navigator>
  )
}

export default AppStack