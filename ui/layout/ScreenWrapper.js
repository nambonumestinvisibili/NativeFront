import { ScrollView, View } from "react-native"
import styled from "styled-components/native"
import GoBackHeader from "./GoBackHeader"
import ScreenHeader from "./ScreenHeader"
 
const ContentContainer = styled.View`
  flex-direction: column;
  padding-bottom: 30px;
  height: 90%;
  justify-content: ${({ contentOnTheBottom }) => 
    contentOnTheBottom ? 'flex-end' : 'flex-start'};
`

const Screen = styled.View`
    padding: 50px 24px 50px 24px;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
`

const ScreenWrapper = ({ children, navigation, text, contentOnTheBottom }) => {
  return (
    <Screen>
        <View>
          <GoBackHeader navigation={navigation} />
          <ScreenHeader text={text} />
        </View>
        <ContentContainer 
          contentOnTheBottom={contentOnTheBottom} 
        >
          <ScrollView contentContainerStyle={{
              flexGrow: 1, 
              justifyContent: contentOnTheBottom ? 'flex-end' : 'flex-start', 
            }} 
            showsVerticalScrollIndicator={false}
          >
            { children }
          </ScrollView>
        </ContentContainer>
    </Screen>
  )
}

export default ScreenWrapper