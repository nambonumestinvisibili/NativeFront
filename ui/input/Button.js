import Bubble from '../../components/Bubble'

const Button = ({ text, onPress }) => {
  return (
    <Bubble text={text} onPress={onPress}></Bubble>
  )
}

export default Button