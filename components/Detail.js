import React, { useState } from 'react'
import styled from 'styled-components/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Icon from './Icon';
import { iconSizes } from '../constants/style';
import colors from '../constants/colors';
import Description from '../ui/detail/Description';
import Arrow from '../ui/icons/Arrow';
import Expansion from '../ui/detail/Expansion';

const StyledRow = styled.View`
  flexDirection: row;
  alignItems: center;
  padding-bottom: 10px;
`

const StyledCol = styled.View`
  flex: ${({ flex }) => flex};
`

const StyledWrapper = styled.View`
  padding-bottom: 10px;
`

const Detail = ({ icon, textBreakdown, expansion }) => {

  const [showExpansion, setShowExpansion] = useState(false) 

  return (
    <StyledWrapper>
      <StyledRow>
        <StyledCol flex={1}>
          <Icon {...icon} />
        </StyledCol>
        <StyledCol flex={5}>
          <Description 
            textBreakdown={textBreakdown}
          />
        </StyledCol>
        <StyledCol flex={1}>
          { expansion && <Arrow onPress={() => setShowExpansion(!showExpansion)} /> }
        </StyledCol>
      </StyledRow>
      {showExpansion && expansion && <Expansion expansion={expansion} />}
    </StyledWrapper>
  )
}

export default Detail