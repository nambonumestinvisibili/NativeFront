import { useEffect } from 'react';
import ScreenWrapper from '../../../ui/layout/ScreenWrapper';
import SiteScreen from './EventScreen';

const DetailedVenueScreen = ({navigation, route}) => {
  const { chosenVenue } = route.params
  console.log("detailed")

  console.log(chosenVenue)
  useEffect(() => {
    
  }, [])
  
  return (
    <ScreenWrapper navigation={navigation} text={chosenVenue?.venue.name}>
      { chosenVenue && <SiteScreen details={chosenVenue} /> }
    </ScreenWrapper>
    )
}

export default DetailedVenueScreen