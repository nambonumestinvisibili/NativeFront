import { useEffect } from 'react';
import ScreenWrapper from '../../../ui/layout/ScreenWrapper';
import EventScreen from './EventScreen';

const DetailedVenueScreen = ({navigation, route}) => {
  const { venueDetails } = route.params
  console.log(venueDetails)
  useEffect(() => {
    
  }, [])
  
  return (
    <ScreenWrapper navigation={navigation}>
      {/* <SpotScreen /> */}
      <EventScreen details={venueDetails} />
    </ScreenWrapper>
    )
}

export default DetailedVenueScreen