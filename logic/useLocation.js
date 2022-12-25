import React, { useEffect, useReducer, useState } from 'react'
import * as Location from 'expo-location'

const useLocation = () => {

  const [region, dispatchInitialRegion] = useReducer(
    (state, action) => {
      const newLocation = action.payload
      return ({
        ...state,
        latitude: newLocation.latitude,
        longitude: newLocation.longitude,
      })
    },
    {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0321,
    })

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()

      if (status !== 'granted') {
        //handle this...
        return;
      }

      let location = await Location.getCurrentPositionAsync({})
      
      dispatchInitialRegion({ payload: { 
        longitude: location.coords.longitude,
        latitude: location.coords.latitude
      }})
    })()
  }, [])

  return {
    region
  }
}

export default useLocation