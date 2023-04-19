import { TransitionPresets } from '@react-navigation/stack'
import StackNames from '../constants/stacks'

export const STACK_STYLES = {
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
  initialRouteName: StackNames.BasicIntoScreen
}