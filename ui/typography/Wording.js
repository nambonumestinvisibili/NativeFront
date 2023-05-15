import styled from "styled-components"

const StyledText = styled.Text`
  font-style: normal;
  font-weight: 300;
  font-size: ${({ small }) => small ? '14px' : '20px'};
  letter-spacing: 0.095;
`

const Wording = ({ children, small }) => {
  return (
    <StyledText small={small}>
      { children }
    </StyledText>
  )
}

export default Wording