import { useState } from 'react';
import ScreenWrapper from '../../ui/layout/ScreenWrapper';
import Input from '../../ui/input/Input';
import SubmitButton from '../../ui/input/SubmitButton';
import useApi from '../../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { selectJWT, updateJWT } from '../../store/reducers/authSlice';

const AuthScreen = () => {
  
  const { api } = useApi()
  const dispatch = useDispatch()
  
  const [email, setEmail] = useState("dawid1@native.pl")
  const [password, setPassword] = useState("Password1!")
  
  const setToken = token => dispatch(updateJWT(token))
  const token = useSelector(selectJWT)

  const submitLogin = () => {
    api.authApi.login(setToken, {
      email, password
    })
  }

  return (
    <ScreenWrapper>
      <Input labelText={"What's your email?"} onChangeText={(email) => setEmail(email)} />
      <Input labelText={"Password?"} onChangeText={(password) => setPassword(password)}/>
      <SubmitButton onPress={submitLogin}/>
    </ScreenWrapper>
  )
}

export default AuthScreen