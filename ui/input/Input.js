import styled from 'styled-components'
import { UnderlinedInput } from '../styles/InvertedColors'
import InputCapitals from './InputCapitals'

const StyledInput = styled.TextInput`
  ${UnderlinedInput}
`

const Input = ({ labelText, onChangeText }) => {
  return (
    <>
      <StyledInput onChangeText={onChangeText} />
      <InputCapitals>
        {labelText}
      </InputCapitals>
    </>
  )
}

export default Input