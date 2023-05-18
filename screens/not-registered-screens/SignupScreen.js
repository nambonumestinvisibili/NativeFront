import { useState, useEffect } from "react"
import { FormProvider, useForm } from "react-hook-form"
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
  const {...methods} = useForm()
  
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
      <FormProvider {...methods}>
        <Input name='email' labelText={"What's your email?"} onChangeText={(email) => setEmail(email)} />
        <Divider custom={5}/>
        <Input name='password' labelText={"Password?"} onChangeText={(password) => setPassword(password)}/>
        <Divider custom={15}/>
        <SubmitButton onPress={submitSignup}/>
      </FormProvider>
    </ScreenWrapper>
  )
}

export default SignupScreen