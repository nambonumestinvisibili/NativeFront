import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ScrollView, Text, View, ViewComponent } from 'react-native'
import styled from 'styled-components/native'
import { TransitionPresets } from '@react-navigation/stack'
import Bubble from '../components/Bubble'
import colors from '../constants/colors'
import React from 'react'
import AddButton from '../components/AddButton'
import StackNames from '../constants/stacks'
import GoBackHeader from '../ui/styles/GoBackHeader'
import ScreenHeader from '../ui/styles/ScreenHeader'

const Stack = createNativeStackNavigator()

const AppStack = () => {

  return (
    <Stack.Navigator
      initialRouteName={StackNames.DetailedSiteScreen}
      screenOptions={({ navigation }) => ({
          ...TransitionPresets.ModalSlideFromBottomIOS,
          cardOverlayEnabled: true,
          headerTitle: (props) => <GoBackHeader {...props} navigation={navigation} />,
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackVisible: false
      })}
    >
      <Stack.Screen
        name={StackNames.HomeScreen}
        component={HomeScreen} 
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={StackNames.DetailedSiteScreen}
        component={DetailedSiteScreen}
      /> 
      <Stack.Screen 
        name={StackNames.SiteCreationScreen}
        component={SiteCreationScreen}
      />
    </Stack.Navigator>
  )
}

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

const StText = styled.Text`
  font-size: 90px;
`

const HomeScreen = ({navigation}) => {
  return (
    <>
      <StText>siema</StText>
      <Bubble 
        text={'Go to detailed screen'} 
        isPressed 
        color={colors.ACCENTS.PINK}
        onPress={() => navigation.push(StackNames.DetailedSiteScreen)}
      />
      <AddButton 
        color={colors.ACCENTS.MINT}
        onPress={() => navigation.push(StackNames.SiteCreationScreen)}
      />
    </>
  )
}

export const BubbleSlide = ({ bubbles, touchable, color }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {bubbles.map(bubble => (
        <Bubble
          color={color}
          isPressed
          text={bubble.text} 
        />
      ))}
    </ScrollView>
  )
}

const DetailedSiteScreen = ({navigation, route}) => {
  return (
    <ScreenWrapper>
      <BubbleSlide 
        color={colors.ACCENTS.PINK}
        bubbles={[
          {
            text: "Food",
          },
          {
            text: "Fine dining",
          },
          {
            text: "Stunning view",
          },
          {
            text: "Free",
          },
          {
            text: "Paid",
          },
          {
            text: "Bubble1",
          }
        ]}
        touchable={false}
      />
    </ScreenWrapper>
    )
}

const SiteCreationScreen = () => {
  return (
    <Text>SiteCreationScreen</Text>
  )
}

export default AppStack