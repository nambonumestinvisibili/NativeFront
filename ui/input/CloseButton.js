import { View } from 'react-native'
import CloseIcon from '../icons/CloseIcon'

const CloseButton = ({ onPress, right, top }) => {
  return (
    <View style={{position: 'absolute', zIndex: 999999999, right, top }}>
      <CloseIcon onPress={onPress} />
    </View>
  )
}

export default CloseButton