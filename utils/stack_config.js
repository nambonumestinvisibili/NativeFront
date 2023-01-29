import { TransitionPresets } from '@react-navigation/stack'

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
}