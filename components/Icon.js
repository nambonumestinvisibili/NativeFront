import { TouchableOpacity } from 'react-native-gesture-handler'
import styled from 'styled-components'

const IconWrapper = styled.View`
  align-self: center;
`

const Icon = ({ family, name, size, color, onPress }) => {
  const Family = family
  return (
    <TouchableOpacity onPress={onPress}>
    <IconWrapper >
      <Family name={name} size={size} color={color} />
    </IconWrapper>
    </TouchableOpacity>
  )
}

export default Icon