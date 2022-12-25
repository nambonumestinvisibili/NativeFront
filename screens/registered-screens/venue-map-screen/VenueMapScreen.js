import React, { useEffect, useReducer, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import VenueMarker from '../../../components/VenueMarker'
import colors from '../../../constants/colors'
import BubbleSlide from '../../../components/BubbleSlide'
import StackNames from '../../../constants/stacks'
import useLocation from '../../../logic/useLocation'

const VenueMapScreen = ({ navigation }) => {

  const { region } = useLocation()

  const markers = [
    {
      latlng: {
        latitude: region.latitude + 0.00030,
        longitude: region.longitude + 0.00030
      },
      description: "stuff...",
      color: colors.ACCENTS.PINK

    },
    {
      latlng: {
        latitude: region.latitude - 0.0030,
        longitude: region.longitude - 6 *  0.0030
      },
      description: "stuff...",
      color: colors.ACCENTS.BURGUND
    },
    {
      latlng: {
        latitude: region.latitude + 5 * 0.0030,
        longitude: region.longitude - 2 * 0.0030
      },
      description: "stuff...",
      color: colors.ACCENTS.MUSTARD

    },
    {
      latlng: {
        latitude: region.latitude + 2* 0.0030,
        longitude: region.longitude + 2* 0.0030
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

  const navigateToDetails = () => {
    navigation.push(StackNames.DetailedSiteScreen)
  }
  
  return (
    <View>
      <MapView 
        region={region}
        initialRegion={region} //todo: change to last user's location
        style={mapStyles}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
            // onPress={navigateToDetails}
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