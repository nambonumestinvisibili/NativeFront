import React from 'react'
import BubbleSlide from '../../../components/BubbleSlide'
import DetailTable from '../../../components/DetailTable'
import Divider from '../../../components/Divider'
import SiteDescription from './SiteDescription'
import colors from '../../../constants/colors'
import { iconSizes } from '../../../constants/style'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'; 
import ExpansionType from '../../../ui/constants/ExpansionTypes'
import { useSelector } from 'react-redux'
import { selectCurrentAccent } from '../../../store/reducers/colorsSlice'

const bubblesConfig = [
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
]

const siteData = [
  {
    icon: {
      color: colors.BASIC.BLACK,
      name: "hand-clap", 
      size: iconSizes.big, 
      family: MaterialCommunityIcons
    },
    textBreakdown: [
      { text: '1800', colored: true },
      { text: 'users recommend', colored: false },
    ],
    expansion: {
      type: ExpansionType.BREAKDOWN,
      breakdown: [
        {
          amount: 10,
          label: 'locals', 
        },
        {
          amount: 21,
          label: 'tourists', 
        }
      ]
    }
  },
  {
    icon: {
      color: colors.BASIC.BLACK,
      name: "thumbs-down", 
      size: iconSizes.big, 
      family: Entypo
    },
    textBreakdown: [
      { text: '530', colored: true },
      { text: 'users dislike', colored: false },
    ],
    expansion: {
      type: ExpansionType.BREAKDOWN,
      breakdown: [
        {
          amount: 1,
          label: 'locals', 
        },
        {
          amount: 331,
          label: 'tourists', 
        }
      ]
    }
  },
  {
    icon: {
      color: colors.BASIC.BLACK,
      name: "location-pin", 
      size: iconSizes.big, 
      family: Entypo
    },
    textBreakdown: [
      { text: 'The Notting Hills 8', colored: false },
    ]
  },
  {
    icon: {
      color: colors.BASIC.BLACK,
      name: "clock", 
      size: iconSizes.big, 
      family: MaterialCommunityIcons
    },
    textBreakdown: [
      { text: '21:00 - till midnight', colored: false },
    ]
  },
  {
    icon: {
      color: colors.BASIC.BLACK,
      name: "chat", 
      size: iconSizes.big, 
      family: Entypo
    },
    textBreakdown: [
      { text: '23', colored: true },
      { text: 'comments', colored: false },
    ],
    expansion: {
      type: ExpansionType.COMMENTS,
      comments: [
        {
          text: "Lorem ipsum dolor."
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac efficitur risus. "
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac efficitur risus. "
        },
        {
          text: "Lorem ipsum dolor."
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac efficitur risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac efficitur risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac efficitur risus."
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac efficitur risus. "
        },
      ]
    }
  }
]

const SpotScreen = () => {
  const color = useSelector(selectCurrentAccent)
  return (
    <>
      <BubbleSlide 
        color={color}
        bubbles={bubblesConfig}
        touchable={false}
      />
      <Divider />
      <SiteDescription text={"A nice place to have a dinner with your loved ones"}/>
      <Divider />
      <DetailTable data={siteData} />
    </>
  )
}

export default SpotScreen