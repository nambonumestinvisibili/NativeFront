import { useState } from 'react';
import { Text } from 'react-native';
import ScreenWrapper from '../../ui/layout/ScreenWrapper';
import Input from '../../ui/input/Input';
import SubmitButton from '../../ui/input/SubmitButton';
import useApi from '../../api/api';

const AuthScreen = () => {

  const [email, setEmail] = useState("dawid1@native.pl")
  const [password, setPassword] = useState("Password1!")
  const [token, setToken] = useState("x")

  const { api } = useApi()

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
      <Text>{email}</Text>
      <Text>{token}</Text>
    </ScreenWrapper>
  )
}

export default AuthScreen