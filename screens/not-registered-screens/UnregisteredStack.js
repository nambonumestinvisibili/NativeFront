import React from 'react'
import { Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { STACK_STYLES } from '../../utils/stack_config';
import AuthScreen from './AuthScreen';
import StackNames from '../../constants/stacks';


const Stack = createNativeStackNavigator()

const UnregisteredStack = () => {
  return (
    <>
    <Stack.Navigator
      screenOptions={({ navigation }) => (STACK_STYLES)}
    >
      <Stack.Screen
        name={StackNames.AuthScreen}
        component={AuthScreen} 
      />
    </Stack.Navigator>
    </>
  )
}

export default UnregisteredStack