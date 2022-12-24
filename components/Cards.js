import React from 'react'
import styled from 'styled-components/native'
import colors from '../constants/colors'

const StyledView = styled.View`
  background-color: ${colors.BASIC.WHITE};
  border-radius: 10%;
`

const Cards = ({ children }) => {
  return (
    <StyledView>
      { children }
    </StyledView>
  )
}

export default Cards