import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StackNames from '../constants/stacks'
import { STACK_STYLES } from '../utils/stack_config'
import DetailedVenueScreen from './registered-screens/detailed-venue-screen/DetailedVenueScreen'
import SiteCreationScreen from './registered-screens/site-creation-screen/SiteCreationScreen'
import VenueMapScreen from './registered-screens/venue-map-screen/VenueMapScreen'

const RegisteredStackNavigator = createNativeStackNavigator()

const RegisteredStack = () => {

  return (
    <RegisteredStackNavigator.Navigator
      screenOptions={({ navigation }) => (STACK_STYLES)}
    >
      <RegisteredStackNavigator.Screen 
        name={StackNames.VenueMapScreen}
        component={VenueMapScreen}
      />
      <RegisteredStackNavigator.Screen
        name={StackNames.DetailedSiteScreen}
        component={DetailedVenueScreen}
      /> 
      <RegisteredStackNavigator.Screen 
        name={StackNames.SiteCreationScreen}
        component={SiteCreationScreen}
      />
    </RegisteredStackNavigator.Navigator>
  )
}

export default RegisteredStack