import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Text } from 'react-native'
import styled from 'styled-components/native'
import { CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack'
import Bubble from '../components/Bubble'
import colors from '../constants/colors'
import React from 'react'
import AddButton from '../components/AddButton'
import StackNames from '../constants/stacks'
import GoBackHeader from '../ui/styles/GoBackHeader'

const Stack = createNativeStackNavigator()

const AppStack = () => {

  return (
    <Stack.Navigator
      initialRouteName={StackNames.DetailedSiteScreen}
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
        component={HomeScreen} 
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

const StText = styled.Text`
  font-size: 90px;
`

const HomeScreen = ({navigation}) => {
  return (
    <>
      <StText>siema</StText>
      <Bubble 
        text={'Go to detailed screen'} 
        isPressed 
        color={colors.ACCENTS.PINK}
        onPress={() => navigation.push(StackNames.DetailedSiteScreen)}
      />
      <AddButton 
        color={colors.ACCENTS.MINT}
        onPress={() => navigation.push(StackNames.SiteCreationScreen)}
      />
    </>
  )
}

const DetailedSiteScreen = ({navigation, route}) => {
  return <Text>detailed screen</Text>
}

const SiteCreationScreen = () => {
  return (
    <Text>SiteCreationScreen</Text>
  )
}

export default AppStack