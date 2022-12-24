import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { borderRadius, fontWeights } from '../constants/style'
import { InvertedColorsBackground, InvertedColorsText } from '../ui/styles/InvertedColors'
import shadowStyle from '../ui/styles/ShadowStyle'

const ButtonContainer = styled.TouchableHighlight`
  ${InvertedColorsBackground};
  display: flex;
  justify-content: center;
  align-self: flex-start;
  border-radius: ${borderRadius.basic};
  margin: 0 3px;
`

const StyledText = styled.Text`
  ${InvertedColorsText}
  align-self: flex-start;
  padding: 5px 15px;
  font-weight: ${fontWeights.medium};
`

const Bubble = ({ 
  isPressed,
  color,
  text,
  onPress
}) => {
  return (
    text && 
    <View >
      <ButtonContainer
        onPress={onPress} 
        isPressed={isPressed} 
        color={color}
        style={shadowStyle}
      >    
        <StyledText 
          isPressed={isPressed} 
          color={color}
        >
          {text}
        </StyledText>
      </ButtonContainer>
    </View>
  )
}

export default Bubble