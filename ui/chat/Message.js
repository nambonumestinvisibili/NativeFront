import React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'
import { borderRadius } from '../../constants/style'
import { selectCurrentAccent } from '../../store/reducers/colorsSlice'

const MessageBubble = styled.View`
  background-color: ${({ color }) => color };
  border-radius: ${borderRadius.basic};
  padding: 26px 40px;
  margin-left: 15px;
  margin-right: 50px;
`

const Message = () => {
  const color = useSelector(selectCurrentAccent)
  return (
    <MessageBubble color={color}>
      <Text>
        I love getting to know people of different cultures
      </Text>
    </MessageBubble>
  )
}

export default Message