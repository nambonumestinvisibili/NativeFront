import React from 'react'
import styled from 'styled-components/native'
import Avatar from './Avatar'
import UserBasicInfo from './UserBasicInfo'

const StyledView = styled.View`
  flex-direction: ${({horizontal}) => horizontal ? 'row' : 'column'};
`

const UserPromo = ({ horizontal, name, bio }) => {
  return (
    <StyledView horizontal={horizontal}>
      <Avatar />
      <UserBasicInfo
        bio={bio} 
        name={name} 
        horizontal={horizontal} 
      />
    </StyledView>
  )
}

export default UserPromo