import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'
import colors from '../../constants/colors'
import { fontSizes } from '../../constants/style'
import { selectCurrentAccent } from '../../store/reducers/colorsSlice'

const StyledText = styled.Text`
  color: ${({ color }) => color || colors.BASIC.BLACK};
  font-size: ${fontSizes.big};
`
const StyledView = styled.View`
  flex-direction: row;
`

const Description = ({ textBreakdown }) => {
  const color = useSelector(selectCurrentAccent)
  return (
    <StyledView>
      {textBreakdown.map(text => (
        <StyledText color={text.colored && color}>{`${text.text} `}</StyledText>
      ))}
    </StyledView>
  )
}

export default Description