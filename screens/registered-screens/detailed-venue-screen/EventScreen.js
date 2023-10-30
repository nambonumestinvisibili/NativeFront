import { useSelector } from 'react-redux'
import BubbleSlide from '../../../components/BubbleSlide'
import DetailTable from '../../../components/DetailTable'
import Divider from '../../../components/Divider'
import Section from '../../../components/Section'
import colors from '../../../constants/colors'
import { iconSizes } from '../../../constants/style'
import { selectCurrentAccent } from '../../../store/reducers/colorsSlice'
import ExpansionType from '../../../ui/constants/ExpansionTypes'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import SiteDescription from './SiteDescription'
import LikePanel from '../../../ui/detail/LikePanel'
import { hadnClapIconConfig, dislikeIconConfig } from '../../../ui/icons/IconConfigs'
import useApi from '../../../api/api'

const addressConfig =   {
  icon: {
    color: colors.BASIC.BLACK,
    name: "location-pin", 
    size: iconSizes.big, 
    family: Entypo
  },
  textBreakdown: [
    { text: 'The Notting Hills 8', colored: false },
  ]
}

const siteData = [
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

const getRecommendations = (votes) => {
  return ([
    {
      icon: hadnClapIconConfig,
      textBreakdown: [
        { text: votes.upVotes.total, colored: true },
        { text: 'users recommend', colored: false },
      ],
      expansion: {
        type: ExpansionType.BREAKDOWN,
        breakdown: [
          {
            amount: votes.upVotes.localCount,
            label: 'locals', 
          },
          {
            amount: votes.upVotes.touristCount,
            label: 'tourists', 
          }
        ]
      }
    },   
    {
      icon: dislikeIconConfig,
      textBreakdown: [
        { text: votes.downVotes.total, colored: true },
        { text: 'users dislike', colored: false },
      ],
      expansion: {
        type: ExpansionType.BREAKDOWN,
        breakdown: [
          {
            amount: votes.downVotes.localCount,
            label: 'locals', 
          },
          {
            amount: votes.downVotes.touristCount,
            label: 'tourists', 
          }
        ]
      }
  }])
}

const prepareDataForOpeningAndClosingTime = (venue) => ({
  icon: {
    color: colors.BASIC.BLACK,
    name: "clock", 
    size: iconSizes.big, 
    family: MaterialCommunityIcons
  },
  textBreakdown: [
    { text: `${venue.openingTime} - ${venue.closingTime}`, colored: false },
  ]
})

const SiteScreen = ({ details }) => {
  const color = useSelector(selectCurrentAccent)

  const venueDetails = details.venue
  const votes = details.votes

  const getInterestBubbles = (venueDetails) => venueDetails
    ?.interests
    .map(interest => ({ text: interest.name }))
  
  const prepareDataForDetails = (siteDetails, votes) => [
    ...getRecommendations(votes),
    prepareDataForOpeningAndClosingTime(siteDetails),
    ...siteData
  ]

  const { api } = useApi()

  const visitAndRecommend = (hasProfileUpvoted) => {
    api.venueApi.visitApiAndMarkAsUnOrRecommended(() => {}, {
      venueGuid: venueDetails.guid,
      hasProfileDownvoted: !hasProfileUpvoted,
      hasProfileUpvoted: hasProfileUpvoted,
    })
  }

  const visitVenueAndAddAsRecommended = () => {
    visitAndRecommend(true)
  }

  const visitVenueAndAddAsUnrecommended = () => {
    visitAndRecommend(false)
  }

  return (
    <>
      <BubbleSlide 
        color={color}
        bubbles={getInterestBubbles(venueDetails)}
        touchable={false}
      />
      <LikePanel 
        hasVoted={details.hasProfileVisited} 
        recommendAction={visitVenueAndAddAsRecommended} 
        unrecommendAction={visitVenueAndAddAsUnrecommended} 
      />
      <Divider />
      <SiteDescription text={venueDetails?.description || ""} />
      <Divider />
      <Section title={"Details"} expanded>
        <DetailTable data={prepareDataForDetails(venueDetails, votes)}/>
      </Section>
    </>
  )
}

export default SiteScreen