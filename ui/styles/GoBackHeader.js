import React from 'react'
import { Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 

const GoBackHeader = ({ navigation }) => {
  return (
    <AntDesign name="up" size={24} color="black" onPress={() => navigation.goBack()} />
  )
}

export default GoBackHeader