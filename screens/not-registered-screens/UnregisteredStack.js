import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { STACK_STYLES } from '../../utils/stack_config';
import AuthScreen from './AuthScreen';
import StackNames from '../../constants/stacks';
import SignupScreen from './SignupScreen';


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
      <Stack.Screen 
        name={StackNames.SignupScreen}
        component={SignupScreen}
      />
    </Stack.Navigator>
    </>
  )
}

export default UnregisteredStack