import ScreenWrapper from '../../../ui/layout/ScreenWrapper';
import SubmitButton from '../../../ui/input/SubmitButton';
import StackNames from '../../../constants/stacks';
import WelcomeUserComponent from '../../../ui/avatar/WelcomeUserComponent';
import Capitals from '../../../ui/typography/Capitals';
import { View } from 'react-native';
import Divider from '../../../components/Divider';
import { useState } from 'react';
import Interests from '../../../components/Interests';
import useApi from '../../../api/api';

const InterestScreen = ({ navigation }) => {

  const { api } = useApi()
  const [chosenInterests, setChosenInterests] = useState([])

  const onSubmit = () => {
    api.authApi.registerInterests(() => {
      navigation.push(StackNames.AllSetScreen)
    }, {
      interestGuids: chosenInterests
    })
  }
  
  return (
    <ScreenWrapper text={"Tell us more about yourself" } navigation={navigation}>
      <View style={{alignItems: 'flex-start', paddingLeft: 50}}>
        <WelcomeUserComponent />
        <Divider />
        <Capitals title={'Pick a few interests'}/>
      </View>
      <View>
        <Divider />
        <Interests setChosenInterests={setChosenInterests} />
      </View>
      <SubmitButton onPress={onSubmit}/>
      
    </ScreenWrapper>
  );
}

export default InterestScreen