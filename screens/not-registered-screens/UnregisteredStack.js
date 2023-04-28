import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { STACK_STYLES } from '../../utils/stack_config';
import LoginScreen from './LoginScreen';
import StackNames from '../../constants/stacks';
import SignupScreen from './SignupScreen';
import BasicDescriptionScreen from './signup-screens/BasicDescriptionScreen';
import InterestScreen from './signup-screens/InterestScreen';
import BasicInfoScreen from './signup-screens/BasicInfoScreen';
import AllSetScreen from './signup-screens/AllSetScreen';


const Stack = createNativeStackNavigator()

const UnregisteredStack = () => {
  return (
    <>
    <Stack.Navigator
      screenOptions={({ navigation }) => (STACK_STYLES)}
    >
      <Stack.Screen
        name={StackNames.AuthScreen}
        component={LoginScreen} 
      />
      <Stack.Screen 
        name={StackNames.SignupScreen}
        component={SignupScreen}
      />
      <Stack.Screen 
        name={StackNames.BasicIntoScreen}
        component={BasicInfoScreen}
      />
      <Stack.Screen 
        name={StackNames.BasicDescriptionScreen}
        component={BasicDescriptionScreen}
      />
      <Stack.Screen 
        name={StackNames.InterestScreen}
        component={InterestScreen}
      />
      <Stack.Screen 
        name={StackNames.AllSetScreen}
        component={AllSetScreen}
      />
    </Stack.Navigator>
    </>
  )
}

export default UnregisteredStack