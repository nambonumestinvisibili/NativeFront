import React from 'react'
import { ScrollView } from 'react-native'
import Avatar from '../avatar/Avatar'

const participants = [
  {
    name: "D H"
  },
  {
    name: "D H"
  },
  {
    name: "D H"
  },
  {
    name: "D H"
  },
  {
    name: "D H"
  },
  {
    name: "D H"
  },
  {
    name: "D H"
  },
  {
    name: "D H"
  },  {
    name: "D H"
  },
  {
    name: "D H"
  },
  {
    name: "D H"
  }
]

const ParticipantsScroll = ({
  chosenParticipant, 
  setChosenParticipant
}) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {participants.map(participant => (
        <Avatar name={participant.name} opacity={0.5} />
      ))}
    </ScrollView>
  )
}

export default ParticipantsScroll