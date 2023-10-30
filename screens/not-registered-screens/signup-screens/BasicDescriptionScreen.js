import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useApi from '../../../api/api';
import Divider from '../../../components/Divider';
import StackNames from '../../../constants/stacks';
import useLocation from '../../../logic/useLocation';
import { updateDescriptions } from '../../../store/reducers/profileSlice';
import WelcomeUserComponent from '../../../ui/avatar/WelcomeUserComponent';
import Form from '../../../ui/form/Form';
import Input from '../../../ui/input/Input';
import ScreenWrapper from '../../../ui/layout/ScreenWrapper';

const BasicDescriptionScreen = ({ navigation }) => {

  const { api } = useApi()
  const dispatch = useDispatch()
  const { region } = useLocation()

  const onSubmit = (data) => {
    api.authApi.registerDescription(() => {
      dispatch(updateDescriptions({ bio: data.bio, intro: data.intro }))
      navigation.push(StackNames.InterestScreen)
    }, {
      bio: data.bio,
      intro: data.intro
    })
  }

  useEffect(() => {
    region && api.residenceApi.assignResidence(() => {}, {
      latitude: region.latitude,
      longitude: region.longitude
    })
  }, [region])
  
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