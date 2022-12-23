import React from 'react'
import styled from 'styled-components/native'
import AddButton from '../components/AddButton'
import Bubble from '../components/Bubble'
import colors from '../constants/colors'
import StackNames from '../constants/stacks'

const StText = styled.Text`
  margin-top: 150px;
  font-size: 90px;
`

const SplashScreen = ({navigation}) => {
  return (
    <>
      <StText>Native</StText>
      <Bubble 
        text={'Go to detailed screen'} 
        isPressed 
        color={colors.ACCENTS.PINK}
        onPress={() => navigation.push(StackNames.DetailedSiteScreen)}
      />
      <AddButton 
        color={colors.ACCENTS.MINT}
        onPress={() => navigation.push(StackNames.SiteCreationScreen)}
      />
    </>
  )
}

export default SplashScreen