import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Bubble from '../../components/Bubble'
import { selectCurrentAccent } from '../../store/reducers/colorsSlice'
import BackgroundTile from '../styles/BackgroundTile'

const StyledView = styled.View`
  padding: 25px 50px;
  align-items: center;
`

const BubblesContainer = styled.View`
  flex-direction: row;
`

const QuestionText = styled.Text`
  padding-bottom: 15px;
  font-weight: 600;
`

const Question = () => {
  const color = useSelector(selectCurrentAccent)
  return (
    <StyledView>
      <BackgroundTile />
      <QuestionText>
        Will you come to this event?
      </QuestionText>
      <BubblesContainer>
        <Bubble text={"Yes"} color={color} minWidth />
        <Bubble text={"No"} color={color} minWidth />
      </BubblesContainer>
    </StyledView>
  )
}

export default Question