import React from 'react'
import Bubble from '../../components/Bubble'

const SubmitButton = ({ onPress }) => {
  return (
    <Bubble text={"Let's go"} onPress={onPress}>SubmitButton</Bubble>
  )
}

export default SubmitButton