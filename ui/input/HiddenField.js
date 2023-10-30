import { useController, useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { UnderlinedInput } from '../styles/InvertedColors';
import { useEffect } from 'react';

const StyledInput = styled.TextInput`
  ${UnderlinedInput}
  ${({ errorExists }) => errorExists && 'borderBottomColor: red;'}
`

const HiddenInput = ({ 
  name,
  defaultValue
}) => {
  
  const { control } = useFormContext()
  
  const { field } = useController({ 
    name, 
    defaultValue,
    control
  })

  useEffect(() => {
    field.onChange(defaultValue)
  }, [defaultValue])

  return (
    <>
    </>
  )
}

export default HiddenInput