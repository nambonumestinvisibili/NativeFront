import { View } from 'react-native'
import Divider from '../../../components/Divider'
import WelcomeUserComponent from '../../../ui/avatar/WelcomeUserComponent'
import SubmitButton from '../../../ui/input/SubmitButton'
import ScreenWrapper from '../../../ui/layout/ScreenWrapper'
import Wording from '../../../ui/typography/Wording'

const AllSetScreen = ({ navigation }) => {
  return (
    <ScreenWrapper contentOnTheBottom navigation={navigation}>
      <View style={{ alignItems: 'center' }}>
        <WelcomeUserComponent />
        <Divider custom={3}/>
        <Wording>
          You're all set.
        </Wording>
        <Divider custom={4}/>
      </View>
      <SubmitButton onPress={() => navigation.push(StackNames.AllSetScreen)}/>
    </ScreenWrapper>
  )
}

export default AllSetScreen