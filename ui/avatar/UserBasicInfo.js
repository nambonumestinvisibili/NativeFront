import React from 'react'
import styled from 'styled-components/native'

const UserPromoView = styled.View`
  justify-content: flex-end;
  padding-left: ${({ horizontal }) => horizontal ? 10 : 0};
`

const Name = styled.Text`
  font-size: 20px;
  font-weight: 500;
`

const Bio = styled.Text`
`
const UserBasicInfo = ({ name, bio, horizontal }) => {
  return (
    <UserPromoView horizontal={horizontal}>
        <Name>
          { name }
        </Name>
        <Bio>
          { bio }
        </Bio>
      </UserPromoView>
  )
}

export default UserBasicInfo