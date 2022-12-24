import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/native'
import AddButton from '../components/AddButton'
import Bubble from '../components/Bubble'
import colors from '../constants/colors'
import StackNames from '../constants/stacks'
import { changeCurrentAccent } from '../store/reducers/colorsSlice'

const StText = styled.Text`
  margin-top: 150px;
  font-size: 90px;
`

const SplashScreen = ({navigation}) => {
  const dispatch = useDispatch()
  return (
    <>
      <StText>Native</StText>
      <Bubble 
        text={'Go to detailed screen'} 
        isPressed 
        color={colors.ACCENTS.PINK}
        onPress={() => {
          dispatch(changeCurrentAccent(colors.ACCENTS.PINK))
          navigation.push(StackNames.DetailedSiteScreen)}}
      />
      <Bubble 
        text={'Go to detailed screen color mustard'} 
        isPressed 
        color={colors.ACCENTS.MUSTARD}
        onPress={() => {
          dispatch(changeCurrentAccent(colors.ACCENTS.MUSTARD))
          navigation.push(StackNames.DetailedSiteScreen)
        }}
      />
      <Bubble 
        text={'Go to detailed screen color mustard'} 
        isPressed 
        color={colors.ACCENTS.BURGUND}
        onPress={() => {
          dispatch(changeCurrentAccent(colors.ACCENTS.BURGUND))
          navigation.push(StackNames.DetailedSiteScreen)
        }}
      />
      <AddButton 
        color={colors.ACCENTS.MINT}
        onPress={() => navigation.push(StackNames.SiteCreationScreen)}
      />
    </>
  )
}

export default SplashScreen