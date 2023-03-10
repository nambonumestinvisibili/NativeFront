import React from 'react'
import { ScrollView, View } from 'react-native'
import styled from 'styled-components'
import Bubble from './Bubble'

const StyledScrollView = styled.ScrollView`
  position: absolute;
  left: -20;
  right: -20;
  height: 40;
`

const BubbleSlide = ({ bubbles, touchable, color }) => {
  return (
    <View style={{
      minHeight: 40,
    }}>
      <StyledScrollView horizontal showsHorizontalScrollIndicator={false}>
        {bubbles.map((bubble, idx) => (
          <Bubble
            key={idx}
            color={color}
            isPressed
            text={bubble.text} 
          />
        ))}
      </StyledScrollView>
    </View>
  )
}

export default BubbleSlide