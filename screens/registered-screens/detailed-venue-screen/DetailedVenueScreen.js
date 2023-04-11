import React, { useEffect } from 'react'
import { URLS, useHttp } from '../../../api/axios'
import ScreenWrapper from '../../../ui/layout/ScreenWrapper'
import EventScreen from './EventScreen'
import SpotScreen from './SpotScreen'

const DetailedVenueScreen = ({navigation, route}) => {
  
  // const { get } = useHttp()

  useEffect(() => {
    // const interests = get(URLS.interestApi.getAll)
    // console.log("calling", URLS.interestApi.getAll)
    console.log("calling", URLS.interestApi.getAll)
    const interests = fetch(URLS.interestApi.getAll, {
      method: 'GET',
      headers: {
        Accept: '*',
        'Content-Type': 'application/json',
      },
    })
      .then(x => console.log(JSON.stringify(x)))
      .catch(err => console.log("Error calling " + JSON.stringify(err)))
  }, [])
  
  return (
    <ScreenWrapper navigation={navigation}>
      {/* <SpotScreen /> */}
      <EventScreen />
    </ScreenWrapper>
    )
}

export default DetailedVenueScreen