import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'
import { selectCurrentAccent } from '../../store/reducers/colorsSlice'
import ExpansionType from '../constants/ExpansionTypes'
import BackgroundTile from '../styles/BackgroundTile'
import Comments from './Comments'
import NumberBreakdown from './NumberBreakdown'

const StyledRow = styled.View`
  flex-direction: row;
`

const StyledCol = styled.View`
  flex: ${({ flex }) => flex};

  ${({ special, color }) => special && `
    border-color: ${color};
    borderTopWidth: 1px;
    borderBottomWidth: 1px;
  `}

  ${({ down }) => down && `
    padding-bottom: 10px;
  `}
`

const Expansion = ({ expansion }) => {
  const color = useSelector(selectCurrentAccent)
  return (
    <>
    <StyledRow>
      <StyledCol flex={1}>
      </StyledCol>
      <StyledCol special down color={color} flex={6}>
        <BackgroundTile />
        { expansion.type === ExpansionType.BREAKDOWN && <NumberBreakdown breakdown={expansion.breakdown} /> }
        { expansion.type === ExpansionType.COMMENTS && <Comments comments={expansion.comments}/> }
      </StyledCol>
    </StyledRow>
    </>
  )
}

export default Expansion