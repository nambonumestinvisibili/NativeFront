import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Button, Text } from "react-native"
import styled from "styled-components/native"
import { CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack';
import Bubble from "../components/Bubble";
import colors from "../constants/colors";


const Stack = createNativeStackNavigator()

const AppStack = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen} />
                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen} /> 
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const StyledButton = styled.Button`
    margin-top: 100px;
    font-size: 40px;
`

const HomeScreen = ({navigation}) => {
    return (
      <Bubble text={"your"} isPressed color={colors.ACCENTS.BURGUND}/>
    );
  };

const ProfileScreen = ({navigation, route}) => {
    return <Text>This is {route.params.name}'s prof ile</Text>;
};

export default AppStack