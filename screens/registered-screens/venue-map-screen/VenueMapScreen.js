import { StyleSheet, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
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
      color: colors.ACCENTS.PINK,
      venueDetails: {
        name: "Venue",
        description: "Some description....",
        interests: [
          {
            "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "name": "Interest1",
          },
          {
            "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "name": "Interest2",
          },
          {
            "guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "name": "Interest3",
          }
        ]
      }

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

  const navigateToDetails = venueDetails => {
    navigation.navigate(StackNames.DetailedSiteScreen, {
      venueDetails
    })
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
            onPress={() => navigateToDetails(marker.venueDetails)}
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