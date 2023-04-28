import Divider from '../../../components/Divider';
import StackNames from '../../../constants/stacks';
import WelcomeUserComponent from '../../../ui/avatar/WelcomeUserComponent';
import Input from '../../../ui/input/Input';
import SubmitButton from '../../../ui/input/SubmitButton';
import ScreenWrapper from '../../../ui/layout/ScreenWrapper';

const BasicDescriptionScreen = ({ navigation }) => {
  return (
    <ScreenWrapper 
      text={"Tell us more about yourself"} 
      navigation={navigation}
      contentOnTheBottom
    >
      <WelcomeUserComponent />
      <Divider custom={10}/>
      <Input labelText={"What's your bio?"}/>
      <Divider custom={15}/>
      <Input labelText={"Describe yourself in a few words"}/>
      <Divider custom={15}/>
      <SubmitButton onPress={() => navigation.push(StackNames.InterestScreen)}/>
      <Divider custom={5}/>
    </ScreenWrapper>
  )
}

export default BasicDescriptionScreen