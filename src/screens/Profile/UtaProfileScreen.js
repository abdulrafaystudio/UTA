import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR } from '../../enums/StyleGuide'

const UtaProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>UTAProfile</Text>
    </View>
  )
}

export default UtaProfileScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLOR.screen_bg_color
  }
})