import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Divider from '../../../components/Divider'
import { selectSignupJWT, updateJWT } from '../../../store/reducers/authSlice'
import WelcomeUserComponent from '../../../ui/avatar/WelcomeUserComponent'
import SubmitButton from '../../../ui/input/SubmitButton'
import ScreenWrapper from '../../../ui/layout/ScreenWrapper'
import Wording from '../../../ui/typography/Wording'

const AllSetScreen = ({ navigation }) => {

  const dispatch = useDispatch()
  const signupToken = useSelector(selectSignupJWT)
  
  const onSubmit = () => {
    console.log(signupToken)
    dispatch(updateJWT(signupToken))
  } 

  return (
    <ScreenWrapper contentOnTheBottom navigation={navigation}>
      <View style={{ alignItems: 'center' }}>
        <WelcomeUserComponent />
        <Divider custom={3}/>
        <Wording>
          You're all set.
        </Wording>
        <Divider custom={4}/>
      </View>
      <SubmitButton onPress={onSubmit}/>
    </ScreenWrapper>
  )
}

export default AllSetScreen