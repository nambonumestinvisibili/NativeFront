import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectBio, selectFirstname } from '../../store/reducers/profileSlice'
import Wording from '../typography/Wording'
import Avatar from './Avatar'

const Wrapper = styled.View`
  align-items: flex-end;
  flex-direction: row;
  justify-content: flex-end;
`
const HiPadding = styled.View`
  padding-right: 3px;
`
const NamePadding = styled.View`
  padding: 0px 4px 0px 4px;
`
const NameBioContainer = styled.View`
  padding: 0px 4px 0px 4px;
`

const WelcomeUserComponent = () => {

  const firstName = useSelector(selectFirstname)
  const bio = useSelector(selectBio)
  
  return (
    <Wrapper>
      <HiPadding>
        <Wording>Hi, </Wording>
      </HiPadding>
      <Avatar/>
      <NamePadding>
        {!bio 
          ? (<Wording>{firstName ?? ''}!</Wording>)
          : (
              <NameBioContainer>
                <Wording>{firstName ?? ''}</Wording>
                <Wording small>{bio}</Wording>
              </NameBioContainer>
          )
        }    
      </NamePadding>
    </Wrapper>
  )
}



export default WelcomeUserComponent