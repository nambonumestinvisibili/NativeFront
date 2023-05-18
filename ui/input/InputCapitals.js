import styled from "styled-components"
import Capitals from '../typography/Capitals'

const StyledLabel = styled.View`
  padding-top: 5;
`

const InputCapitals = ({ children }) => {
  return (
    <StyledLabel>
      <Capitals text={children}/>
    </StyledLabel>
  )
}

export default InputCapitals