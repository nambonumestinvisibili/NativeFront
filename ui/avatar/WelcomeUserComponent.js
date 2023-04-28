import styled from 'styled-components'
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
  return (
    <Wrapper>
      <HiPadding>
        <Wording>Hi, </Wording>
      </HiPadding>
      <Avatar/>
      <NamePadding>
        {false 
          ? (<Wording>Daniel!</Wording>)
          : (
              <NameBioContainer>
                <Wording>Daniel</Wording>
                <Wording small>UX Designer</Wording>
              </NameBioContainer>
          )
        }    
      </NamePadding>
    </Wrapper>
  )
}



export default WelcomeUserComponent