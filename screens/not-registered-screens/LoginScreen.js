import { useState, useEffect } from 'react';
import ScreenWrapper from '../../ui/layout/ScreenWrapper';
import Input from '../../ui/input/Input';
import SubmitButton from '../../ui/input/SubmitButton';
import useApi from '../../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { selectJWT, updateJWT } from '../../store/reducers/authSlice';
import StackNames from '../../constants/stacks';
import Button from '../../ui/input/Button';

const devCredentials = [
  {
    email: "dawid1@native.pl",
    password: "Password1!"
  },
  {
    email: "blazejkloc@gmail.com",
    password: "Klochuj123!"
  },
  {
    email: "dummy-email@fake-domain.com",
    password: "Password1!"
  }
]

const LoginScreen = ({ navigation }) => {
  
  const { api } = useApi()
  const dispatch = useDispatch()
  
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  
  const setToken = token => dispatch(updateJWT(token))
  const token = useSelector(selectJWT)

  const submitLogin = () => {
    api.authApi.login(setToken, {
      email, password
    }) // todo: don't log password
  }

  useEffect(() => {
    token && navigation.push(StackNames.HomeScreen)
  }, [token])

  return (
    <ScreenWrapper navigation={navigation} contentOnTheBottom>
      <Input labelText={"What's your email?"} onChangeText={(email) => setEmail(email)} />
      <Input labelText={"Password?"} onChangeText={(password) => setPassword(password)}/>
      <SubmitButton onPress={submitLogin}/>
      <Button text={"Signup?"} onPress={() => navigation.push(StackNames.SignupScreen)} />
      { devCredentials.map((credential, idx) => (
        <Button
          key={idx}
          text={credential.email}
          onPress={
            () => api.authApi.login(setToken, {
              email: credential.email, password: credential.password
            })
          } 
        />
      ))}
    </ScreenWrapper>
  )
}

export default LoginScreen