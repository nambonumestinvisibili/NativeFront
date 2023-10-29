import styled from 'styled-components'

const StyledCapitals = styled.Text`
  letter-spacing: 1.1;
  text-transform: uppercase;
`

const Capitals = ({ title }) => {
  return (
    <StyledCapitals>{title}</StyledCapitals>
  )
}

export default Capitals