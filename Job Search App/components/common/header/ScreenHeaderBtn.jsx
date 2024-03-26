import React from 'react'
import { Image, TouchableOpacity } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl,dimension,handlePress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={{width:35,height:35,borderRadius:10}}
        />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn