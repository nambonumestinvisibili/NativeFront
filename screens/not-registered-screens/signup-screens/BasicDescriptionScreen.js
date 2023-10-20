import Divider from '../../../components/Divider';
import StackNames from '../../../constants/stacks';
import WelcomeUserComponent from '../../../ui/avatar/WelcomeUserComponent';
import Form from '../../../ui/form/Form';
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
      <Form onSubmit={() => navigation.push(StackNames.InterestScreen)}>
        <Input name="bio" labelText={"What's your bio?"}/>
        <Divider custom={15}/>
        <Input name="intro" labelText={"Describe yourself in a few words"}/>
        <Divider custom={15}/>
      </Form>
      <SubmitButton />
      <Divider custom={5}/>
    </ScreenWrapper>
  )
}

export default BasicDescriptionScreen