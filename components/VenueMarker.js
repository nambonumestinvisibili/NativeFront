import React from 'react'
import { View, StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import colors from '../constants/colors'


const WhiteCircle = styled.View`
  background-color: white;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  justify-content: center;
  align-items: center;
`
const VenueImage = styled.View`
  background-color: pink;
  width: 50px;
  height: 50px;
  border-radius: 60px;
  justify-content: center;
  align-items: center;
`

const shadowStyle = StyleSheet.create({
  shadowColor: colors.BASIC.BLACK,
  shadowOpacity: 1,
  shadowRadius: 30,
})

const VenueMarker = ({ color }) => {
  return (
    <View style={{...shadowStyle, shadowColor: color}}>
      <WhiteCircle>
        <VenueImage />
      </WhiteCircle>
    </View>
  )
}

export default VenueMarker