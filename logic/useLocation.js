import { useEffect, useReducer } from 'react'
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
    { //todo: last used location
      latitude: 51.08653939799507,
      longitude: 17.037822408617508,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0321,
    })

  useEffect(() => { 
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()

      if (status !== 'granted') {
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