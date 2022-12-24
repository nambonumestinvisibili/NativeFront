import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'
import { fontSizes } from '../../constants/style'
import { selectCurrentAccent } from '../../store/reducers/colorsSlice'

const BreakdownRow = styled.View`
  flex-direction: row;
  padding-left: 30px;
  padding-top: 10px;
`

const StyledText = styled.Text`
  font-size: ${fontSizes.big};

  ${({ number, color }) => number && `
    color: ${color};
    min-width: 40px;
  `}
`

const NumberBreakdown = ({ breakdown }) => {
  const color = useSelector(selectCurrentAccent)
  
  return (
    <>
    {breakdown.map(part => (
      <BreakdownRow>
        <StyledText number color={color}>{part.amount}</StyledText>
        <StyledText color={color}>{part.label}</StyledText>
      </BreakdownRow>
    ))}
    </>
  )
}

export default NumberBreakdown