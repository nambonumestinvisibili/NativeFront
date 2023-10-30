import UserAvatar from 'react-native-user-avatar';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { selectCurrentAccent } from '../../store/reducers/colorsSlice';
import { selectFirstname, selectSecondname } from '../../store/reducers/profileSlice';

const StyledView = styled.View`
  width: 52;
  height: 52;
  opacity: ${({ opacity }) => opacity};
`
const Avatar = ({
  opacity = 1
}) => {
  const color = useSelector(selectCurrentAccent)
  const firstname = useSelector(selectFirstname)
  const secondName = useSelector(selectSecondname)
  return (
    <StyledView opacity={opacity}>
      <UserAvatar 
        size={52} 
        name={`${firstname} ${secondName}`} 
        bgColor={color} 
      />
    </StyledView>
  )
}

export default Avatar