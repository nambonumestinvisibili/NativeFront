import React from 'react'
import styled from 'styled-components/native'
import Avatar from './Avatar'

const StyledView = styled.View`
  flex-direction: row;
`

const UserPromoView = styled.View`
  justify-content: flex-end;
  padding-left: 10;
`

const Name = styled.Text`
  font-size: 20px;
  font-weight: 500;
`

const Bio = styled.Text`
`

const UserPromo = () => {
  return (
    <StyledView>
      <Avatar />
      <UserPromoView>
        <Name>
          Patricia
        </Name>
        <Bio>
          Friendly neighbourhood waitress
        </Bio>
      </UserPromoView>
    </StyledView>
  )
}

export default UserPromo