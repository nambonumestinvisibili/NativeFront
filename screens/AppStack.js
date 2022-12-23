import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TransitionPresets } from '@react-navigation/stack'
import colors from '../constants/colors'
import React from 'react'
import StackNames from '../constants/stacks'
import ScreenWrapper from '../ui/layout/ScreenWrapper'
import GoBackHeader from '../ui/layout/GoBackHeader'
import BubbleSlide from '../components/BubbleSlide'
import SplashScreen from './SplashScreen'
import DetailedSiteScreen from './registered-screens/detailed-site-screen/DetailedSiteScreen'
import SiteCreationScreen from './registered-screens/site-creation-screen/SiteCreationScreen'

const Stack = createNativeStackNavigator()

const AppStack = () => {

  return (
    <Stack.Navigator
      // initialRouteName={StackNames.DetailedSiteScreen}
      screenOptions={({ navigation }) => ({
          ...TransitionPresets.ModalSlideFromBottomIOS,
          cardOverlayEnabled: true,
          headerTitle: (props) => <GoBackHeader {...props} navigation={navigation} />,
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackVisible: false
      })}
    >
      <Stack.Screen
        name={StackNames.HomeScreen}
        component={SplashScreen} 
        options={{
          headerShown: false,
        }}
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