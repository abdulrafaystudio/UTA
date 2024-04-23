import { StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { COLOR } from '../../../enums/StyleGuide'

const CustomInput = ({ placeholder, value, onChangeText, style }) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={[style, styles.input]}
      placeholderTextColor={COLOR.black} />
  )
}

export default CustomInput

const styles = StyleSheet.create({
  input: {
   
  },
})