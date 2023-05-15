import styled from 'styled-components'
import Bubble from '../../components/Bubble'

const Container = styled.View`
  padding: 8px 0 8px 0;
  ${({ centered }) => centered && 'align-self: center'};
`
const Button = ({ text, onPress, centered, isPressed, color }) => {
  return (
    <Container centered={centered}>
      <Bubble 
        text={text} 
        onPress={onPress} 
        isPressed={isPressed}
        color={color} 
      />
    </Container>
  )
}

export default Button