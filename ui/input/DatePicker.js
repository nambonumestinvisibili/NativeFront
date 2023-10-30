
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

const DatePicker = ({ 
  name, 
  labelText, 
  optional, 
  rules, 
  defaultValue,
  mode 
}) => {
  const [date, setDate] = useState(new Date())
  
  const { control } = useFormContext()

  const createRules = () => 
    optional 
      ? ({...rules}) 
      : ({...rules, required: 'This field is required'})

  const  { field } = useController({
    name, 
    rules: createRules(), 
    defaultValue,
    control
  })

  const changeValue = (_, date) => {
    setDate(date)

    const formattedDate =
      mode === 'time' 
        ? ({
          hourOfDay: dayjs(date).format("HH"),
          minutesOfHour: dayjs(date).format("mm")
        })
        : dayjs(date).format(API_DATE_FORMAT)
        
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
          value={date}
          onChange={changeValue}
          mode={mode ?? "date"}
        />
      </UnderlinedDatePicker>
      <InputCapitals>
          {labelText}
      </InputCapitals>
    </>
  )
}

export default DatePicker