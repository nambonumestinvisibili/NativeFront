import React from 'react'
import BubbleSlide from '../../../components/BubbleSlide'
import colors from '../../../constants/colors'
import ScreenWrapper from '../../../ui/layout/ScreenWrapper'

const DetailedSiteScreen = ({navigation, route}) => {
  return (
    <ScreenWrapper>
      <BubbleSlide 
        color={colors.ACCENTS.PINK}
        bubbles={[
          {
            text: "Food",
          },
          {
            text: "Fine dining",
          },
          {
            text: "Stunning view",
          },
          {
            text: "Free",
          },
          {
            text: "Paid",
          },
          {
            text: "Bubble1",
          }
        ]}
        touchable={false}
      />
    </ScreenWrapper>
    )
}

export default DetailedSiteScreen