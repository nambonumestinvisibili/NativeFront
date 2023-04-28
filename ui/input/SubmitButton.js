import Button from './Button'

const SubmitButton = ({ onPress }) => {
  return (
    <Button 
      text={"Let's go"} 
      onPress={onPress}
      centered
    />
  )
}

export default SubmitButton