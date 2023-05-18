import { useController, useFormContext } from 'react-hook-form'
import { Text } from 'react-native'
import styled from 'styled-components'
import { UnderlinedInput } from '../styles/InvertedColors'
import InputCapitals from './InputCapitals'

const StyledInput = styled.TextInput`
  ${UnderlinedInput}
  ${({ errorExists }) => errorExists && 'borderBottomColor: red;'}
`

const Input = ({ 
  labelText, 
  name,
  rules,
  optional,
  defaultValue
}) => {
  
  const { control } = useFormContext()
  
  const createRules = () => 
    optional 
      ? ({...rules}) 
      : ({...rules, required: 'This field is required'})
  
  const { field, fieldState } = useController({ 
    name, 
    rules: createRules(), 
    defaultValue,
    control
  })

  return (
    <>
      <StyledInput 
        errorExists={fieldState.error} 
        onChangeText={field.onChange} />
          <InputCapitals>
            {labelText}
          </InputCapitals>
      { fieldState.error && <Text></Text>}
    </>
  )
}

export default Input