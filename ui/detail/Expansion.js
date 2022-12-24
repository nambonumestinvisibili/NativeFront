import React from 'react'
import styled from 'styled-components/native'
import colors from '../../constants/colors'
import ExpansionType from '../constants/ExpansionTypes'
import Comments from './Comments'
import NumberBreakdown from './NumberBreakdown'

const StyledRow = styled.View`
  flexDirection: row;
  // background-color: ${colors.ACCENTS.PINK};
`

const StyledCol = styled.View`
  flex: ${({ flex }) => flex};
  borderColor: ${colors.ACCENTS.PINK};

  ${({ special }) => special && `
    borderTopWidth: 1px solid ${colors.ACCENTS.PINK};
    borderBottomWidth: 1px solid ${colors.ACCENTS.PINK};
  `}

  ${({ down }) => down && `
    padding-bottom: 10px;
  `}
`

const Expansion = ({ expansion }) => {
  return (
    <StyledRow>
      <StyledCol flex={1}>
      </StyledCol>
      <StyledCol special down flex={6}>
        { expansion.type === ExpansionType.BREAKDOWN && <NumberBreakdown breakdown={expansion.breakdown} /> }
        { expansion.type === ExpansionType.COMMENTS && <Comments comments={expansion.comments}/> }
      </StyledCol>
    </StyledRow>
  )
}

export default Expansion