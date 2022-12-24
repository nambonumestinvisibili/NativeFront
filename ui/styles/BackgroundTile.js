import styled from "styled-components/native"
import colors from "../../constants/colors"
import { rgba } from '../../utils/colors'

const BackgroundTile = styled.View`
  position: absolute;
  z-index: -1;
  background-color: ${() => rgba(colors.ACCENTS.PINK, 0.1)};
  top: 0;
  bottom: 0;
  left: -100px;
  right: -100px;
`

export default BackgroundTile