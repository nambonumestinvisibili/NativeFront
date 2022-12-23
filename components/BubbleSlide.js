import React from 'react'
import { ScrollView } from 'react-native'
import Bubble from './Bubble'

const BubbleSlide = ({ bubbles, touchable, color }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {bubbles.map(bubble => (
        <Bubble
          color={color}
          isPressed
          text={bubble.text} 
        />
      ))}
    </ScrollView>
  )
}

export default BubbleSlide