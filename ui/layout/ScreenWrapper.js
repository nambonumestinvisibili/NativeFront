import { View } from "react-native"
import styled from "styled-components/native"
import ScreenHeader from "./ScreenHeader"

const StyledView = styled.View`
  margin: 14px 24px;
` 
const ScreenWrapper = ({ children }) => {
  return (
    <StyledView>
      <ScreenHeader text={"The Notting Hills"} />
      <View>
        { children }
      </View>
    </StyledView>
  )
}

export default ScreenWrapper