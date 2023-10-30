import { useEffect } from 'react';
import ScreenWrapper from '../../ui/layout/ScreenWrapper';
import Input from '../../ui/input/Input';
import useApi from '../../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { selectJWT, updateJWT } from '../../store/reducers/authSlice';
import StackNames from '../../constants/stacks';
import Button from '../../ui/input/Button';
import Form from '../../ui/form/Form';
import colors from '../../constants/colors';
import { View } from 'react-native';

const devCredentials = [
  {
    email: "dawid.holewa@gmail.com",
    password: "Retikulum99!"
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
  
  const setToken = token => dispatch(updateJWT(token))
  const token = useSelector(selectJWT)

  const submitLogin = (data) => {
    api.authApi.login(setToken, {
      email: data.email, password: data.password
    }) // todo: don't log password
  }

  useEffect(() => {
    token && navigation.push(StackNames.HomeScreen)
  }, [token])

  return (
    <ScreenWrapper navigation={navigation} contentOnTheBottom>
      <Form onSubmit={submitLogin}>
        <Input name='email' labelText={"What's your email?"}  />
        <Input name='password' labelText={"Password?"} />
      </Form>
      <View style={{ display: 'flex', alignItems: 'center' }}>
        <Button
          key="button"
          text={"Don't have an account yet?"}
          onPress={() => navigation.push(StackNames.SignupScreen)}
          color={colors.BASIC.PRIMARY}
        />
      </View>
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