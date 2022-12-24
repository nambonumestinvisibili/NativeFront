import { useSelector } from "react-redux"
import styled from "styled-components/native"
import colors from "../../constants/colors"
import { selectCurrentAccent } from "../../store/reducers/colorsSlice"
import { rgba } from '../../utils/colors'

const StiledBackgroundTile = styled.View`
  position: absolute;
  z-index: -1;
  background-color: ${({ color }) => color};
  top: 0;
  bottom: 0;
  left: -100px;
  right: -100px;
`

const BackgroundTile = () => {
  const color = useSelector(selectCurrentAccent)

  return (
    <StiledBackgroundTile color={rgba(color, 0.1)} />
  )
}

export default BackgroundTile