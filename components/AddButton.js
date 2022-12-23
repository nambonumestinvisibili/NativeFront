import React from 'react'
import Bubble from './Bubble'
import { Entypo } from '@expo/vector-icons'; 
import styled from 'styled-components';
import { TouchableHighlight } from 'react-native';
import { InvertedColorsBackground, InvertedColorsText } from '../ui/styles/InvertedColors';
import { borderRadius } from '../constants/style';

const StyledIcon = styled(Entypo)`
  align-self: flex-start;
  padding: 0;
  ${InvertedColorsText}
`

const IconWrapper = styled.TouchableHighlight`
  align-self: flex-start;
  border-radius: ${borderRadius.basic};
  ${InvertedColorsBackground}
`

const AddButton = ({ color, isInverted: isPressed, onPress }) => {
  return (
    <IconWrapper
      color={color}
      onPress={onPress} 
      isPressed={isPressed} 
    >
      <StyledIcon name="plus" isPressed={isPressed} size={30} color={color} />
    </IconWrapper>
  )
}

export default AddButton