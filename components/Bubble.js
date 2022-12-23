import React from 'react'
import styled from 'styled-components/native'
import colors from '../constants/colors'
import { borderRadius, fontWeights, shadows } from '../constants/style'
import { InvertedColorsBackground, InvertedColorsText } from '../ui/styles/InvertedColors'

const ButtonContainer = styled.TouchableHighlight`
  ${InvertedColorsBackground};
  display: flex;
  justify-content: center;
  align-self: flex-start;
  border-radius: ${borderRadius.basic};
`

const StyledText = styled.Text`
    ${InvertedColorsText}
    align-self: flex-start;
    padding: 5px 10px;
    font-weight: ${fontWeights.medium};
`

const Bubble = ({ 
  isPressed,
  color,
  text,
  onPress
}) => {
  return (
    text && <ButtonContainer
      onPress={onPress} 
      isPressed={isPressed} 
      color={color}
    >    
      <StyledText 
        isPressed={isPressed} 
        color={color}
      >
        {text}
      </StyledText>
    </ButtonContainer>
  )
}

export default Bubble