import React from 'react'
import UserAvatar from 'react-native-user-avatar';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { selectCurrentAccent } from '../../store/reducers/colorsSlice';

const StyledView = styled.View`
  width: 52;
  height: 52;
`
const Avatar = () => {
  const color = useSelector(selectCurrentAccent)
  return (
    <StyledView>
      <UserAvatar size={52} name="Andre Berly" bgColor={color}/>
    </StyledView>
  )
}

export default Avatar