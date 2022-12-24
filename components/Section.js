import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectCurrentAccent } from '../store/reducers/colorsSlice'
import Arrow from '../ui/icons/Arrow'

const SectionText = styled.Text`
  letter-spacing: 1.1em;
  text-transform: uppercase;
`

const ViewContainer = styled.View`
  border-bottom-width: 1px;
  border-color: ${({ color }) => color};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`

const Section = ({ title, children, expanded }) => {

  const [showExpansion, setShowExpansion] = useState(expanded)
  const color = useSelector(selectCurrentAccent)

  return (
    <>
      <ViewContainer color={color} >
        <SectionText>{title}</SectionText>
        <Arrow initialUp={!expanded} onPress={() => {
          setShowExpansion(!showExpansion)
        }} />
      </ViewContainer>
      { showExpansion && children }
    </>
  )
}

export default Section