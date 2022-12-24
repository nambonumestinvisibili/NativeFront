import React from 'react'
import { Text } from 'react-native'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'
import colors from '../../constants/colors'
import { borderRadius } from '../../constants/style'
import { selectCurrentAccent } from '../../store/reducers/colorsSlice'

const StyledView = styled.ScrollView`
  max-height: 200px;
`

const Comment = styled.View`
  border-color: ${({ color }) => color};
  border-width: 1px;
  border-radius: ${borderRadius.basic};
  background-color: ${colors.BASIC.WHITE};
  margin: 5px 0;
  padding: 10px 14px;
`

const Comments = ({ comments }) => {
  const color = useSelector(selectCurrentAccent)
  return (
    <StyledView>
      {comments.map(comment => (
        <Comment color={color}>
          <Text>
            {comment.text}
          </Text>
        </Comment>
      ))}
    </StyledView>
  )
}

export default Comments