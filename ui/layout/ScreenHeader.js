import React from 'react'
import styled from 'styled-components/native'
import Divider from '../../components/Divider'
import { fontSizes } from '../../constants/style'

const StyledScreenHeader = styled.Text`
  font-size: ${fontSizes.biggest};
  font-weight: 800;
  padding-top: 20px;
`

const ScreenHeader = ({ text }) => {
  return (
    <>
      <StyledScreenHeader>
        {text}
      </StyledScreenHeader>
      <Divider />
    </>
  )
}

export default ScreenHeader