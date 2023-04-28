import Divider from "../../../components/Divider"
import StackNames from "../../../constants/stacks"
import Input from "../../../ui/input/Input"
import SubmitButton from "../../../ui/input/SubmitButton"
import ScreenWrapper from "../../../ui/layout/ScreenWrapper"

const BasicInfoScreen = ({ navigation }) => {
  return (
    <ScreenWrapper text={"Hello!"} navigation={navigation} contentOnTheBottom>
      <Input labelText={"What's your name?"}/>
      <Divider custom={15}/>
      <SubmitButton onPress={() => navigation.push(StackNames.BasicDescriptionScreen)}/>
    </ScreenWrapper>
  )
}

export default BasicInfoScreen