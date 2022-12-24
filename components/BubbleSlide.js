import React from 'react'
import { ScrollView, View } from 'react-native'
import styled from 'styled-components'
import Bubble from './Bubble'

const StyledScrollView = styled.ScrollView`
  position: absolute;
  left: -20;
  right: -20;
`

const BubbleSlide = ({ bubbles, touchable, color }) => {
  return (
    <View style={{
      minHeight: 30,
    }}>
      <StyledScrollView horizontal showsHorizontalScrollIndicator={false}>
        {bubbles.map(bubble => (
          <Bubble
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