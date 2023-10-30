
import DateTimePicker from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { UnderlinedInput } from '../styles/InvertedColors';
import InputCapitals from './InputCapitals';

const UnderlinedDatePicker = styled.View`
  ${UnderlinedInput}
`

const API_DATE_FORMAT = 'YYYY-MM-DD'

const DatePicker = ({ name, labelText, optional, rules, defaultValue }) => {
  const [date, setDate] = useState(new Date())
  
  const { control } = useFormContext()

  const createRules = () => 
    optional 
      ? ({...rules}) 
      : ({...rules, required: 'This field is required'})

  const  { field, fieldState } = useController({
    name, 
    rules: createRules(), 
    defaultValue,
    control
  })

  const changeValue = (event, date) => {
    console.log(event, date)
    const formattedDate = dayjs(date).format(API_DATE_FORMAT)
    field.onChange(formattedDate)
  }

  return (
    <>
      <UnderlinedDatePicker>
        <DateTimePicker 
          style={{
            alignSelf: 'left',
            backgroundColor: 'white',
          }}
          mode="date"
          value={date}
          onChange={changeValue}
        />
      </UnderlinedDatePicker>
      <InputCapitals>
          {labelText}
      </InputCapitals>
    </>
  )
}

export default DatePicker