import { useDispatch } from "react-redux"
import useApi from "../../../api/api"
import Divider from "../../../components/Divider"
import StackNames from "../../../constants/stacks"
import { updateBasics } from "../../../store/reducers/profileSlice"
import Form from "../../../ui/form/Form"
import DatePicker from "../../../ui/input/DatePicker"
import Input from "../../../ui/input/Input"
import ScreenWrapper from "../../../ui/layout/ScreenWrapper"

const BasicInfoScreen = ({ navigation }) => {

  const { api } = useApi()
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    api.authApi.registerBasics(() => {
      dispatch(updateBasics({ firstName: data.firstName, secondName: data.secondName }))
      navigation.push(StackNames.BasicDescriptionScreen)
    }, {
      firstname: data.firstName, 
      secondname: data.secondName, 
      birthday: data.birthday
    })
  }
  
  return (
    <ScreenWrapper text={"Hello!"} navigation={navigation} contentOnTheBottom>
      <Form onSubmit={onSubmit} >
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