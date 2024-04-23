import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR, width, wp } from '../../enums/StyleGuide'
import { Picture } from '../../components/widgets'

const SplashScreen = () => {
  
  return (
    <View style={styles.container}>
      <Picture source={require('../../assets/images/logo.png')} style={styles.image} />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLOR.screen_bg_color,
    alignItems:'center',
    justifyContent:'center'
  },
  image:{
    
  }
})