import { useController, useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { UnderlinedInput } from '../styles/InvertedColors';
import InputCapitals from './InputCapitals';
import { View } from 'react-native';
import Error from '../form/Error';

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
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <InputCapitals>
            {labelText}
          </InputCapitals>
          { fieldState.error && <Error />}
        </View>
    </>
  )
}

export default Input