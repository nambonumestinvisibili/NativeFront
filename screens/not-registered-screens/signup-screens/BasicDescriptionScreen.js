import useApi from '../../../api/api';
import Divider from '../../../components/Divider';
import StackNames from '../../../constants/stacks';
import WelcomeUserComponent from '../../../ui/avatar/WelcomeUserComponent';
import Form from '../../../ui/form/Form';
import Input from '../../../ui/input/Input';
import ScreenWrapper from '../../../ui/layout/ScreenWrapper';

const BasicDescriptionScreen = ({ navigation }) => {

  const { api } = useApi()

  const onSubmit = (data) => {
    api.authApi.registerDescription(() => {
      navigation.push(StackNames.InterestScreen)
    }, {
      bio: data.bio,
      intro: data.intro
    })
  }
  return (
    <ScreenWrapper 
      text={"Tell us more about yourself"} 
      navigation={navigation}
      contentOnTheBottom
    >
      <WelcomeUserComponent />
      <Divider custom={10}/>
      <Form onSubmit={onSubmit}>
        <Input name="bio" labelText={"What's your bio?"}/>
        <Divider custom={15}/>
        <Input name="intro" labelText={"Describe yourself in a few words"}/>
        <Divider custom={15}/>
      </Form>
      <Divider custom={5}/>
    </ScreenWrapper>
  )
}

export default BasicDescriptionScreen