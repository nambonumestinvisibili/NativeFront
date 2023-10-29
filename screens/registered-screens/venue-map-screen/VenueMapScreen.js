import { StyleSheet, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import VenueMarker from '../../../components/VenueMarker'
import colors from '../../../constants/colors'
import BubbleSlide from '../../../components/BubbleSlide'
import StackNames from '../../../constants/stacks'
import useLocation from '../../../logic/useLocation'
import useApi from '../../../api/api'
import { useEffect, useState } from 'react'
import Menu from '../../../ui/input/Menu'

const VenueMapScreen = ({ navigation }) => {

  const { region } = useLocation()

  const { api } = useApi()

  const [markers, setMarkers] = useState([])
  const [coordinatesAddedByUser, setMarkerAddedByUser] = useState()
  const [shouldMenuBeVisible, setShouldMenuBeVisible] = useState(false)
  const [chosenVenue, setChosenVenue] = useState()

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
    api.venueApi.getDetailedVenueByGuid(setChosenVenue, venueDetails.guid)
  }

  const getVenuesByLocation = (region) => {
    api.venueApi.getAllByLocation(setMarkers, {
      latitude: region.latitude,
      longitude: region.longitude,
      deltaLongitude: 0.5 * region.longitudeDelta, //reat-native-maps delta is from top to bot. Native way is from top to center
      deltaLatitude: 0.5 * region.latitudeDelta
    })
  }

  const onRegionChangeComplete = (region) => {
    getVenuesByLocation(region)
  }

  const onMapPress = (e) => {
    const coordinatesUserClicked = e.nativeEvent.coordinate
    setMarkerAddedByUser(coordinatesUserClicked)
    const isUserCoordinateInTheMap = markers.map(marker => marker.location)
      .some(coord => 
        coord.longitude === coordinatesUserClicked.longitude 
        && coord.latitude === coordinatesUserClicked.latitude)
    if (isUserCoordinateInTheMap) {
      removePinAddedByUser()
    }
  }

  const addNewVenue = () => {
    
  }

  const removePinAddedByUser = () => {
    setMarkerAddedByUser(null)
  }

  const onPressVenueMarker = (marker) => {
    removePinAddedByUser()
    navigateToDetails(marker)
  }

  const closeMenu = () => {
    removePinAddedByUser()
  }

  useEffect(() => {
    getVenuesByLocation(region)
  }, [region.latitude, region.longitude])

  useEffect(() => {
    setShouldMenuBeVisible(true)
  }, [coordinatesAddedByUser])

  useEffect(() => {
    console.log("map")
    console.log(chosenVenue)
    chosenVenue && navigation.navigate(StackNames.DetailedSiteScreen, {
      chosenVenue
    })
  }, [chosenVenue])

  return (
    <View>
      <MapView 
        region={region}
        initialRegion={region} //todo: change to last user's location
        style={mapStyles}
        onPress={onMapPress}
        onRegionChangeComplete={onRegionChangeComplete}
      >
        {Array.isArray(markers) && (markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.location}
            title={marker.name}
            description={marker.description}
            onPress={() => onPressVenueMarker(marker)}
          >
            <VenueMarker color={marker.color} />
          </Marker>)
        ))}
        {coordinatesAddedByUser && <Marker
          key={"markerAddedByUser"}
          coordinate={coordinatesAddedByUser}
        >
            <VenueMarker 
              color={colors.BASIC.ERROR}
              onPress={removePinAddedByUser} 
            />
          </Marker>}
      </MapView>
      <View style={{position: 'absolute', bottom: 50, left: 20, right: 20}}>
        <BubbleSlide bubbles={bubblesConfig} color={colors.ACCENTS.PINK}/>
      </View>
      { coordinatesAddedByUser && 
        <Menu
          closeMenu={() => closeMenu()} 
          menuOptions={[{ 
          text: "Add new venue",
          onPress: addNewVenue 
        }]} />}
    </View>
  )
}

const mapStyles = StyleSheet.create({
  width: '100%',
  height: '100%',
})



export default VenueMapScreen