import React from 'react'
import styled from 'styled-components'
import { dividerSizes } from '../constants/style'

const StyledView = styled.View`
  height: 1;
  margin: ${({ size }) => size};
`

const Divider = ({ size = dividerSizes.big }) => {
  return (
    <StyledView size={size}>

    </StyledView>
  )
}

export default Divider