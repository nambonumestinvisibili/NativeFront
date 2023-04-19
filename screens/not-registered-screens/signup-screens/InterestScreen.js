import ScreenWrapper from '../../../ui/layout/ScreenWrapper';
import SubmitButton from '../../../ui/input/SubmitButton';

const InterestScreen = ({ navigation }) => {
  return (
    <ScreenWrapper text={"Tell us more about yourself" } navigation={navigation}>
      <SubmitButton onPress={() => navigation.push()}/>
      
    </ScreenWrapper>
  )
}

export default InterestScreen