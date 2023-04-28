import styled from 'styled-components'
import { dividerSizes } from '../constants/style'

const StyledView = styled.View`
  height: 1px;
  margin: ${({ size }) => size};
`

const Divider = ({ size = dividerSizes.big, custom }) => {
  return (
    <StyledView size={custom ? `${custom}%` : size}>
    </StyledView>
  )
}

export default Divider