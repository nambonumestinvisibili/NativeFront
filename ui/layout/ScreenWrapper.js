import { View } from "react-native"
import styled from "styled-components/native"
import GoBackHeader from "./GoBackHeader"
import ScreenHeader from "./ScreenHeader"

const StyledView = styled.View`
  margin: 50px 24px 14px 24px;
` 
const ScreenWrapper = ({ children, navigation }) => {
  return (
    <StyledView>
      <GoBackHeader navigation={navigation} />
      <ScreenHeader text={"The Notting Hills"} />
      <View>
        { children }
      </View>
    </StyledView>
  )
}

export default ScreenWrapper