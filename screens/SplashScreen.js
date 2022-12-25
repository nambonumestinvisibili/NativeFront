import React from 'react'
import { Text, View } from 'react-native'
import colors from '../constants/colors'

const SplashScreenView = () => {
  return (
    <View style={{ 
      flex: 1, 
      backgroundColor: colors.BASIC.BLACK, 
      alignItems: 'flex-end', 
      justifyContent: 'flex-end',
      paddingRight: '10%',
      paddingBottom: '20%',
    }}>
      <Text style={{ 
        color: colors.BASIC.WHITE, 
        bottom: 0,
        fontSize: 80 
        }}>Native</Text>
    </View>
  )
}

export default SplashScreenView