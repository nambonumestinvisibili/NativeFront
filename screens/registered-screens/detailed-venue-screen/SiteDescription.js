import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'
import { fontSizes } from '../../../constants/style'

const StyledText = styled.Text`
  font-size: ${fontSizes.big};
`

const SiteDescription = ({ text }) => {
  return (
    <StyledText>{text}</StyledText>
  )
}

export default SiteDescription