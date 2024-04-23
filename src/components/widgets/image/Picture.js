import { StyleSheet, Image } from 'react-native'
import React from 'react'

const Picture = ({source,style}) => {
  return (
    <Image 
    source={source}
    style={[styles.image,style]}/>
  )
}

export default Picture

const styles = StyleSheet.create({
    image: {
       
      },
})