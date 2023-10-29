import { AntDesign } from '@expo/vector-icons';
import { iconSizes } from '../../constants/style';

const CloseIcon = ({ onPress }) => {
  return (
    <AntDesign
      name='closecircle'
      size={iconSizes.big}
      color='black' 
      onPress={onPress}
    />
  )
}

export default CloseIcon