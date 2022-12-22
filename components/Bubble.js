import React from 'react'
import styled from 'styled-components/native'
import colors from '../constants/colors'

const ButtonContainer = styled.TouchableHighlight`
    border: 1px solid ${({ isPressed, color }) => isPressed 
        ? colors.BASIC.WHITE 
        : color
    };
    display: flex;
    justify-content: center;
    align-self: flex-start;
    border-radius: 45px;
    background-color: ${({ isPressed, color }) => isPressed 
        ? color
        : colors.BASIC.WHITE
    };
`

const StyledText = styled.Text`
    align-self: flex-start;
    padding: 5px 10px;
    color: ${({ isPressed, color }) => isPressed 
        ? colors.BASIC.WHITE
        : color
    };
    font-weight: 500;
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