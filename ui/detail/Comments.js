import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import colors from '../../constants/colors'
import { borderRadius } from '../../constants/style'

const StyledView = styled.ScrollView`
  max-height: 200px;
`

const Comment = styled.View`
  border-color: ${colors.ACCENTS.PINK};
  border-width: 1px;
  border-radius: ${borderRadius.basic};
  background-color: ${colors.BASIC.WHITE};
  margin: 5px 0;
  padding: 10px 14px;
`

const Comments = ({ comments }) => {
  return (
    <StyledView>
      {comments.map(comment => (
        <Comment>
          <Text>
            {comment.text}
          </Text>
        </Comment>
      ))}
    </StyledView>
  )
}

export default Comments