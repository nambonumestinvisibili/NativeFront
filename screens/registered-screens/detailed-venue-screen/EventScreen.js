import React from 'react'
import { useSelector } from 'react-redux'
import BubbleSlide from '../../../components/BubbleSlide'
import DetailTable from '../../../components/DetailTable'
import Divider from '../../../components/Divider'
import Section from '../../../components/Section'
import colors from '../../../constants/colors'
import { iconSizes } from '../../../constants/style'
import { selectCurrentAccent } from '../../../store/reducers/colorsSlice'
import ExpansionType from '../../../ui/constants/ExpansionTypes'
import UserPromo from '../../../ui/avatar/UserPromo'
import Question from '../../../ui/question/Question'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'; 
import SiteDescription from './SiteDescription'
import Participants from '../../../ui/participants/Participants'

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

const EventScreen = () => {
  const color = useSelector(selectCurrentAccent)
  return (
    <>
      <BubbleSlide 
        color={color}
        bubbles={bubblesConfig}
        touchable={false}
      />
      <Divider />
      <SiteDescription text={"A xdd place to have a dinner with your loved ones"} />
      <Divider />
      <UserPromo horizontal name="Patricia" bio="Friendly neighbourhood waitress" />
      <Divider />
      <Question />
      <Divider />
      <Section title={"Details"} >
        <DetailTable data={siteData}/>
      </Section>
      <Section title={"Participants"} expanded>
        <Participants />
      </Section>
    </>
  )
}

export default EventScreen