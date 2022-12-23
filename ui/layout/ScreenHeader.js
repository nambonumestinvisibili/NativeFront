import React from 'react'
import styled from 'styled-components/native'

const StyledScreenHeader = styled.Text`
  font-size: 32px;
  font-weight: 900px;
  padding: 20px 0;
`

const ScreenHeader = ({ text }) => {
  return (
    <StyledScreenHeader>
      {text}
    </StyledScreenHeader>
  )
}

export default ScreenHeader