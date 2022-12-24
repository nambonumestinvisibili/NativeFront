import React, { useEffect, useReducer, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'
import VenueMarker from '../../../components/VenueMarker'
import colors from '../../../constants/colors'
import BubbleSlide from '../../../components/BubbleSlide'

const VenueMapScreen = () => {
  const [initialRegion, dispatchInitialRegion] = useReducer(
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

  const markers = [
    {
      latlng: {
        latitude: initialRegion.latitude + 0.00030,
        longitude: initialRegion.longitude + 0.00030
      },
      description: "stuff...",
      color: colors.ACCENTS.PINK

    },
    {
      latlng: {
        latitude: initialRegion.latitude - 0.0030,
        longitude: initialRegion.longitude - 6 *  0.0030
      },
      description: "stuff...",
      color: colors.ACCENTS.BURGUND
    },
    {
      latlng: {
        latitude: initialRegion.latitude + 5 * 0.0030,
        longitude: initialRegion.longitude - 2 * 0.0030
      },
      description: "stuff...",
      color: colors.ACCENTS.MUSTARD

    },
    {
      latlng: {
        latitude: initialRegion.latitude + 2* 0.0030,
        longitude: initialRegion.longitude + 2* 0.0030
      },
      description: "stuff...",
      color: colors.ACCENTS.MINT

    }
  ]

  const bubblesConfig = [
    {
      text: "Food",
    },
    {
      text: "Fine dining",
    },
    {
      text: "Stunning view",
    },
    {
      text: "Free",
    },
    {
      text: "Paid",
    },
    {
      text: "Bubble1",
    }
  ]

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()

      if (status !== 'granted') {
        setLoc('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({})
      dispatchInitialRegion({ payload: { 
        longitude: location.coords.longitude,
        latitude: location.coords.latitude
      }})
    })()
  }, [])
  
  return (
    <View>
      <MapView 
        region={initialRegion}
        initialRegion={initialRegion}
        style={mapStyles}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
          >
            <VenueMarker color={marker.color} />
          </Marker>
        ))}
      </MapView>
      <View style={{position: 'absolute', bottom: 50, left: 20, right: 20}}>
        <BubbleSlide bubbles={bubblesConfig} color={colors.ACCENTS.PINK}/>
      </View>
    </View>
  )
}

const mapStyles = StyleSheet.create({
  width: '100%',
  height: '100%',
})



export default VenueMapScreen