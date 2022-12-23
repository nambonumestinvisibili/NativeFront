import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import styled from 'styled-components/native';

const IconWrapper = styled.View`
  align-items: center;
`

const GoBackHeader = ({ navigation }) => {
  return (
    <IconWrapper>
      <AntDesign 
        name="up" 
        size={24} 
        color="black"
        onPress={() => navigation.goBack()} 
      />
    </IconWrapper>
  )
}

export default GoBackHeader