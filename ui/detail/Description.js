import React from 'react'
import styled from 'styled-components/native'
import colors from '../../constants/colors'
import { fontSizes } from '../../constants/style'

const StyledText = styled.Text`
  color: ${({ color }) => color ? colors.ACCENTS.PINK : colors.BASIC.BLACK};
  font-size: ${fontSizes.big};
`
const StyledView = styled.View`
  flex-direction: row;
`

const Description = ({ textBreakdown }) => {
  return (
    <StyledView>
      {textBreakdown.map(text => (
        <StyledText color={text.colored}>{`${text.text} `}</StyledText>
      ))}
    </StyledView>
  )
}

export default Description