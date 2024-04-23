import { StyleSheet, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { ACTIVE_OPACITY } from '../../../enums/StyleGuide'

const CustomButton = ({ onPress, title,buttonStyle,labelStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, styles.button]} activeOpacity={ACTIVE_OPACITY}>
      <Text style={[labelStyle, styles.buttonText]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {

    },
    buttonText: {
    },
})