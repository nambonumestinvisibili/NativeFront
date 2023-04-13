import { useEffect } from 'react';
import ScreenWrapper from '../../../ui/layout/ScreenWrapper';
import EventScreen from './EventScreen';

const DetailedVenueScreen = ({navigation, route}) => {
  useEffect(() => {
    
  }, [])
  
  return (
    <ScreenWrapper navigation={navigation}>
      {/* <SpotScreen /> */}
      <EventScreen />
    </ScreenWrapper>
    )
}

export default DetailedVenueScreen