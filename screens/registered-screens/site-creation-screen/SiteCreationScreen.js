import { useState } from 'react';
import useApi from '../../../api/api';
import Divider from '../../../components/Divider';
import Interests from '../../../components/Interests';
import Form from '../../../ui/form/Form';
import DatePicker from '../../../ui/input/DatePicker';
import HiddenInput from '../../../ui/input/HiddenField';
import Input from '../../../ui/input/Input';
import ScreenWrapper from "../../../ui/layout/ScreenWrapper";

const SiteCreationScreen = ({ navigation, route }) => {
  const { coordinates } = route.params
  const [chosenInterests, setChosenInterests] = useState([])
  const { api } = useApi()

  const onSubmit = (data) => {
    console.log(data)
    api.venueApi.createNewVenue(() => {
      navigation.goBack()
    }, data)
  }

  return (
    <ScreenWrapper text="Show others a new venue!" navigation={navigation}>
      <Form onSubmit={onSubmit}>
        <Input name="name" labelText={"Name of the venue"} />
        <Divider />
        <Input name="description" labelText={"Describe the venue in a few words"} />
        <Divider />
        <DatePicker name="openingTime" labelText={"Opening time"} mode="time" /> 
        <Divider />
        <DatePicker name="closingTime" labelText={"Closing time"} mode="time" /> 
        <Divider />
        <Interests setChosenInterests={setChosenInterests} />
        <Divider />
        <HiddenInput name="interestGuids" defaultValue={chosenInterests} />
        <HiddenInput name="longitude" defaultValue={coordinates.longitude} />
        <HiddenInput name="latitude" defaultValue={coordinates.latitude} />
      </Form>
    </ScreenWrapper>
  )
}

export default SiteCreationScreen