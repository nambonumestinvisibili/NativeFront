import Form from '../../../ui/form/Form';
import Input from '../../../ui/input/Input';
import ScreenWrapper from "../../../ui/layout/ScreenWrapper";

const SiteCreationScreen = ({navigation, route}) => {
  const { coordinates } = route.params

  return (
    <ScreenWrapper navigation={navigation}>
      <Form onSubmit={() => {}}>
        <Input name="name" labelText={"Name of the venue"} />
        <Input name="description" labelText={"Describe the venue in a few words"} />
      </Form>
    </ScreenWrapper>
  )
}

export default SiteCreationScreen