import React from 'react'
import styled from 'styled-components'

const StyledCapitals = styled.Text`
  letter-spacing: 1.1;
  text-transform: uppercase;
`

const Capitals = ({ text }) => {
  return (
    <StyledCapitals>{text}</StyledCapitals>
  )
}

export default Capitals