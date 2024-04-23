import { StyleSheet, Text } from 'react-native'
import React from 'react'

const Label = ({ children, style }) => {
  return (
    <Text style={[styles.textStyle, style]}>{children}</Text>
  )
}

export default Label

const styles = StyleSheet.create({
  textStyle: {
    
  },
  text: {
    
  }
})