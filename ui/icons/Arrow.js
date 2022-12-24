import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import styled from 'styled-components/native';
import { fontSizes, iconSizes } from '../../constants/style';

const IconWrapper = styled.View`
  align-self: center;
`

const Arrow = ({
  initialUp = false,
  onPress,
  size = iconSizes.medium,
}) => {

  const [isPointingDown, setPointingDown] = useState(!initialUp)

  const onArrowPress = () => {
    setPointingDown(!isPointingDown)
    onPress && onPress()
  }

  return (
    <IconWrapper>
      <AntDesign 
        name={isPointingDown ? "down" : "up"} 
        size={size} 
        color="black"
        onPress={onArrowPress} 
      />
    </IconWrapper>
  )
}

export default Arrow