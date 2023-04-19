import StackNames from '../../../constants/stacks';
import Input from '../../../ui/input/Input';
import SubmitButton from '../../../ui/input/SubmitButton';
import ScreenWrapper from '../../../ui/layout/ScreenWrapper';

const BasicDescriptionScreen = ({ navigation }) => {
  return (
    <ScreenWrapper text={"Tell us more about yourself"} navigation={navigation}>
      <Input labelText={"What's your bio?"}/>
      <Input labelText={"Describe yourself in a few words"}/>
      <SubmitButton onPress={() => navigation.push(StackNames.InterestScreen)}/>
    </ScreenWrapper>
  )
}

export default BasicDescriptionScreen