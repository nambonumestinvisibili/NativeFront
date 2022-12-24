import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Avatar from '../avatar/Avatar'
import UserBasicInfo from '../avatar/UserBasicInfo'
import UserPromo from '../avatar/UserPromo'
import Message from '../chat/Message'
import BackgroundTile from '../styles/BackgroundTile'
import ParticipantsScroll from './ParticipantsScroll'

const Participants = () => {
  const [chosenParticipant, setChosenParticipant] = useState()
   
  return (
    <View style={{
      paddingTop: 40,
      paddingBottom: 40
    }}>
      <BackgroundTile />
      <View style={{
        flexDirection: 'row',
        paddingBottom: 40
      }}>
        <ParticipantsScroll 
          chosenParticipant={chosenParticipant} 
          setChosenParticipant={setChosenParticipant}
        />
      </View>
      <View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          paddingBottom: 5
        }}>
          <Avatar />
          <Message />
        </View>
        <UserBasicInfo name={"Dale"} bio="UX Designer" />
      </View>
    </View>
  )
}

export default Participants