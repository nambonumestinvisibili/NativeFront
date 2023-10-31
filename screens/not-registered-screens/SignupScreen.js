import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import useApi from "../../api/api"
import Divider from "../../components/Divider"
import StackNames from "../../constants/stacks"
import { selectSignupJWT, updateSignupJWT } from "../../store/reducers/authSlice"
import Form from "../../ui/form/Form"
import Input from "../../ui/input/Input"
import ScreenWrapper from "../../ui/layout/ScreenWrapper"

const SignupScreen = ({ navigation }) => {
  const { api } = useApi()
  const dispatch = useDispatch()
  const token = useSelector(selectSignupJWT)
  const setToken = token => dispatch(updateSignupJWT(token))
  
  const submitSignup = data => {
    api.authApi.signUp(token => {
      console.log(token)
      setToken(token)
    }, {
      email: data.email, password: data.password
    })
  }

  useEffect(() => {
    token && navigation.push(StackNames.BasicInfoScreen)
  }, [token])

  return (
    <ScreenWrapper
      text={'Sign up!'} 
      navigation={navigation} 
      contentOnTheBottom
    >
      <Form onSubmit={submitSignup}>
        <Input name='email' labelText={"What's your email?"} />
        <Divider custom={5}/>
        <Input name='password' labelText={"Password?"} secureTextEntry />
        <Divider custom={15}/>
      </Form>
    </ScreenWrapper>
  )
}

export default SignupScreen