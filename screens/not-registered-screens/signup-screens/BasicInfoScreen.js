import StackNames from "../../../constants/stacks"
import Input from "../../../ui/input/Input"
import SubmitButton from "../../../ui/input/SubmitButton"
import ScreenWrapper from "../../../ui/layout/ScreenWrapper"

const BasicInfoScreen = ({ navigation }) => {
  return (
    <ScreenWrapper text={"Hello!"} navigation={navigation}>
      <Input labelText={"What's your name?"}/>
      <SubmitButton onPress={() => navigation.push(StackNames.BasicDescriptionScreen)}/>
    </ScreenWrapper>
  )
}

export default BasicInfoScreen