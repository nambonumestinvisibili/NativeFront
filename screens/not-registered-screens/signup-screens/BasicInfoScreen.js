import useApi from "../../../api/api"
import Divider from "../../../components/Divider"
import Form from "../../../ui/form/Form"
import DatePicker from "../../../ui/input/DatePicker"
import Input from "../../../ui/input/Input"
import ScreenWrapper from "../../../ui/layout/ScreenWrapper"

const BasicInfoScreen = ({ navigation }) => {

  const { api } = useApi()

  // const onSubmit = () => {
  //   api.authApi.registerBasics(() => {}, {
  //     firstname, secondname, birthday
  //   })
  // }
  const onPress = (data) => {
    console.log(data)
    //() => navigation.push(StackNames.BasicDescriptionScreen)
  }
  
  return (
    <ScreenWrapper text={"Hello!"} navigation={navigation} contentOnTheBottom>
      <Form onSubmit={onPress} >
        <Input name='firstName' labelText={"What's your name?"} />
        <Divider custom={5}/>
        <Input name='secondName' labelText={"What's your family name?"}  />
        <Divider custom={5}/>
        <DatePicker name="birthday" labelText={"When's your birthday?"} />
        <Divider custom={15}/>
      </Form>
    </ScreenWrapper>
  )
}

export default BasicInfoScreen