import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectCurrentAccent } from '../store/reducers/colorsSlice'
import Arrow from '../ui/icons/Arrow'
import Capitals from '../ui/typography/Capitals'

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
        <Capitals>{title}</Capitals>
        <Arrow initialUp={!expanded} onPress={() => {
          setShowExpansion(!showExpansion)
        }} />
      </ViewContainer>
      { showExpansion && children }
    </>
  )
}

export default Section