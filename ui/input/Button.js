import styled from 'styled-components'
import Bubble from '../../components/Bubble'

const Container = styled.View`
  padding: 8px 0 8px 0;
`
const Button = ({ text, onPress }) => {
  return (
    <Container>
      <Bubble text={text} onPress={onPress}></Bubble>
    </Container>
  )
}

export default Button