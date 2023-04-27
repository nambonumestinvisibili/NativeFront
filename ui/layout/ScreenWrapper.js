import { ScrollView, StyleSheet, View } from "react-native"
import styled from "styled-components/native"
import { padding } from "../../utils/layout"
import GoBackHeader from "./GoBackHeader"
import ScreenHeader from "./ScreenHeader"
 
const ContentContainer = styled.View`
  flex: 1;
  flex-direction: column;
  padding-bottom: 30px;
  justify-content: ${({ contentOnTheBottom }) => 
    contentOnTheBottom ? 'flex-end' : 'flex-start'};
`

const styles = StyleSheet.create({
  scrollView: {
    ...padding(50, 24, 14, 24),
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
})

const ScreenWrapper = ({ children, navigation, text, contentOnTheBottom }) => {
  return (
    <View>
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollView}
      >
        <View>
          <GoBackHeader navigation={navigation} />
          <ScreenHeader text={text} />
        </View>
        <ContentContainer contentOnTheBottom={contentOnTheBottom} >
          <View>
            { children }
          </View>
        </ContentContainer>
      </ScrollView>
    </View>
  )
}

export default ScreenWrapper