import { View } from "react-native"
import styled from "styled-components/native"
import GoBackHeader from "./GoBackHeader"
import ScreenHeader from "./ScreenHeader"

const StyledView = styled.ScrollView`
  padding: 50px 24px 14px 24px;
` 
const ScreenWrapper = ({ children, navigation, text }) => {
  return (
    <View>
    <StyledView showsVerticalScrollIndicator={false} >
      <GoBackHeader navigation={navigation} />
      <ScreenHeader text={text} />
      <View>
        { children }
      </View>
    </StyledView>
    </View>
  )
}

export default ScreenWrapper