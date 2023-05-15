import colors from '../../constants/colors'
import Button from './Button'

const SubmitButton = ({ onPress }) => {
  return (
    <Button 
      text={"Let's go"} 
      onPress={onPress}
      color={colors.BASIC.PRIMARY}
      isPressed={true}
      centered
    />
  )
}

export default SubmitButton