import React from 'react'
import { View } from 'react-native'
import Detail from './Detail'

const DetailTable = ({ data }) => {
  return (
    <View>
      { data.map(row => (
        <Detail {...row} />
      )) }  
    </View>
  )
}

export default DetailTable