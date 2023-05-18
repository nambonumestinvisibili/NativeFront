import { FormProvider, useForm } from "react-hook-form"
import useApi from "../../../api/api"
import Divider from "../../../components/Divider"
import StackNames from "../../../constants/stacks"
import DatePicker from "../../../ui/input/DatePicker"
import Input from "../../../ui/input/Input"
import SubmitButton from "../../../ui/input/SubmitButton"
import ScreenWrapper from "../../../ui/layout/ScreenWrapper"

const BasicInfoScreen = ({ navigation }) => {

  const { api } = useApi()
  const {...methods} = useForm()
  
  // const [firstname, setFirstName] = useEffect()
  // const [secondname, setSecondname] = useEffect()
  // const [birthday, setBirthday] = useEffect()

  // const onSubmit = () => {
  //   api.authApi.registerBasics(() => {}, {
  //     firstname, secondname, birthday
  //   })
  // }

  return (
    <ScreenWrapper text={"Hello!"} navigation={navigation} contentOnTheBottom>
      <FormProvider {...methods} >
        <Input name='firstName' labelText={"What's your name?"} />
        <Divider custom={5}/>
        <Input name='secondName' labelText={"What's your family name?"}  />
        <Divider custom={5}/>
        <DatePicker labelText={"When's your birthday?"} />
        <Divider custom={15}/>
        <SubmitButton onPress={() => navigation.push(StackNames.BasicDescriptionScreen)}/>
      </FormProvider>
    </ScreenWrapper>
  )
}

export default BasicInfoScreen