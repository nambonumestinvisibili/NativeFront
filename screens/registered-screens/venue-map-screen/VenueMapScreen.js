import { StyleSheet, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import VenueMarker from '../../../components/VenueMarker'
import colors from '../../../constants/colors'
import BubbleSlide from '../../../components/BubbleSlide'
import StackNames from '../../../constants/stacks'
import useLocation from '../../../logic/useLocation'
import useApi from '../../../api/api'
import { useEffect, useState } from 'react'

const VenueMapScreen = ({ navigation }) => {

  const { region } = useLocation()

  const { api } = useApi()

  const [markers, setMarkers] = useState([])

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

  const navigateToDetails = venueDetails => {
    navigation.navigate(StackNames.DetailedSiteScreen, {
      venueDetails
    })
  }

  useEffect(() => {
    api.venueApi.getAllByLocation(setMarkers, {
      latitude: region.latitude,
      longitude: region.longitude,
      deltaLongitude: 3,
      deltaLatitude: 3
    })
  }, [region])
  console.log(markers)

  
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
            coordinate={marker.location}
            title={marker.name}
            description={marker.description}
            onPress={() => navigateToDetails(marker)}
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