import React from 'react'
import styled from 'styled-components/native'
import colors from '../../constants/colors'
import { fontSizes } from '../../constants/style'

const BreakdownRow = styled.View`
  flex-direction: row;
  padding-left: 30px;
  padding-top: 10px;
`

const StyledText = styled.Text`
  font-size: ${fontSizes.big};

  ${({ number }) => number && `
    color: ${colors.ACCENTS.PINK};
    min-width: 40px;
  `}
`

const NumberBreakdown = ({ breakdown }) => {
  return (
    <>
    {breakdown.map(part => (
      <BreakdownRow>
        <StyledText number>{part.amount}</StyledText>
        <StyledText>{part.label}</StyledText>
      </BreakdownRow>
    ))}
    </>
  )
}

export default NumberBreakdown