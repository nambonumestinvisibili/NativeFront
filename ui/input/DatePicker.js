
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import styled from 'styled-components';
import { UnderlinedInput } from '../styles/InvertedColors';
import InputCapitals from './InputCapitals';

const UnderlinedDatePicker = styled.View`
  ${UnderlinedInput}
`

const DatePicker = ({ labelText }) => {
  const [date, setDate] = useState(new Date())
  
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
          onDateChange={setDate}
        />
      </UnderlinedDatePicker>
      <InputCapitals>
          {labelText}
      </InputCapitals>
    </>
  )
}

export default DatePicker