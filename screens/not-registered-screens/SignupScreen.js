import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import useApi from "../../api/api"
import Divider from "../../components/Divider"
import StackNames from "../../constants/stacks"
import { selectJWT } from "../../store/reducers/authSlice"
import Input from "../../ui/input/Input"
import SubmitButton from "../../ui/input/SubmitButton"
import ScreenWrapper from "../../ui/layout/ScreenWrapper"

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  
  const { api } = useApi()
  const dispatch = useDispatch()
  const token = useSelector(selectJWT)
  const setToken = token => dispatch(updateJWT(token))
  
  const submitSignup = () => {
    // api.authApi.signUp(setToken, {
    //   email, password
    // })
    navigation.navigate(StackNames.BasicIntoScreen)
  }

  useEffect(() => {
    token && navigation.navigate(StackNames.HomeScreen)
  }, [token])

  return (
    <ScreenWrapper
      text={'Sign up!'} 
      navigation={navigation} 
      contentOnTheBottom
    >
      <Input labelText={"What's your email?"} onChangeText={(email) => setEmail(email)} />
      <Divider custom={5}/>
      <Input labelText={"Password?"} onChangeText={(password) => setPassword(password)}/>
      <Divider custom={15}/>
      <SubmitButton onPress={submitSignup}/>
    </ScreenWrapper>
  )
}

export default SignupScreen