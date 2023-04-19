import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import useApi from "../../api/api"
import StackNames from "../../constants/stacks"
import { selectJWT } from "../../store/reducers/authSlice"
import Input from "../../ui/input/Input"
import SubmitButton from "../../ui/input/SubmitButton"
import ScreenWrapper from "../../ui/layout/ScreenWrapper"

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [username, setUsername] = useState()
  const [givenName, setGivenName] = useState()
  const [familyName, setFamilyName] = useState()
  
  const { api } = useApi()
  const dispatch = useDispatch()
  const token = useSelector(selectJWT)
  const setToken = token => dispatch(updateJWT(token))
  
  const submitSignup = () => {
    // api.authApi.signUp(setToken, {
    //   email, password, userName: username, givenName, familyName
    // })
    navigation.navigate(StackNames.BasicIntoScreen)
  }

  useEffect(() => {
    token && navigation.navigate(StackNames.HomeScreen)
  }, [token])

  return (
    <ScreenWrapper navigation={navigation} >
      <Input labelText={"What's your email?"} onChangeText={(email) => setEmail(email)} />
      <Input labelText={"Password?"} onChangeText={(password) => setPassword(password)}/>
      <Input labelText={"username"} onChangeText={(username) => setUsername(username)}/>
      <Input labelText={"familyName"} onChangeText={(givenName) => setGivenName(givenName)}/>
      <Input labelText={"givenName"} onChangeText={(familyName) => setFamilyName(familyName)}/>

      <SubmitButton onPress={submitSignup}/>
      
    </ScreenWrapper>
  )
}

export default SignupScreen