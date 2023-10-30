import ScreenWrapper from '../../../ui/layout/ScreenWrapper';
import SiteScreen from './EventScreen';

const DetailedVenueScreen = ({navigation, route}) => {
  const { chosenVenue } = route.params
  return (
    <ScreenWrapper navigation={navigation} text={chosenVenue?.venue.name}>
      { chosenVenue && <SiteScreen details={chosenVenue} /> }
    </ScreenWrapper>
    )
}

export default DetailedVenueScreen