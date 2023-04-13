import React from 'react'
import { TextInput } from 'react-native'
import styled from 'styled-components'
import Capitals from '../typography/Capitals'

const StyledInput = styled.TextInput`
  borderBottomWidth: 1px;
  borderBottomColor: black;
`

const StyledLabel = styled.View`
  padding-top: 5;
`

const Input = ({ labelText, onChangeText }) => {
  return (
    <>
      <StyledInput onChangeText={onChangeText} />
      <StyledLabel>
        <Capitals text={labelText}/>
      </StyledLabel>
    </>
  )
}

export default Input