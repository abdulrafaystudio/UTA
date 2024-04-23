import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR } from '../../enums/StyleGuide'

const PublishScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PublishScreen</Text>
    </View>
  )
}

export default PublishScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLOR.screen_bg_color
  }
})