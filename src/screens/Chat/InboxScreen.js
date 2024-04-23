import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR } from '../../enums/StyleGuide'

const InboxScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Inbox</Text>
    </View>
  )
}

export default InboxScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLOR.screen_bg_color
  }
})