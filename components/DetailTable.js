import React from 'react'
import { View } from 'react-native'
import Detail from './Detail'

const DetailTable = ({ data }) => {
  return (
    <View>
      { data.map((row, idx) => (
        <Detail key={idx} {...row} />
      )) }  
    </View>
  )
}

export default DetailTable