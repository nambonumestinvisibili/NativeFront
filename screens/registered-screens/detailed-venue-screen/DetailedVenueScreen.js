import React from 'react'
import ScreenWrapper from '../../../ui/layout/ScreenWrapper'
import EventScreen from './EventScreen'
import SpotScreen from './SpotScreen'

const DetailedVenueScreen = ({navigation, route}) => {
  return (
    <ScreenWrapper navigation={navigation}>
      {/* <SpotScreen /> */}
      <EventScreen />
    </ScreenWrapper>
    )
}

export default DetailedVenueScreen