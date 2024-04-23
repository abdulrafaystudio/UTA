import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Back from '../../assets/svg/backarrow.svg'
import { COLOR, MAIN_CONTAINER_STYLE, ROUNDED_INPUT_STYLE, hp, wp } from '../../enums/StyleGuide'
import { Label } from '../../components/widgets'
import RoundedInput from '../../components/Inputs/RoundedInput'
import En from '../../locales/En'

const ForgorPasswordScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backContainer} onPress={()=>navigation.goBack()}>
        <Back width={18} height={18} />
      </TouchableOpacity>

      <Label style={styles.title}>Change Password</Label>
      <Label style={styles.text}>It must have atleast 8 characters, 1 letter, 1 number and 1 special character</Label>

      <View style={styles.inputView}>
        <Label style={styles.labelText}>{En.currentPassword}</Label>
        <RoundedInput
          placeholder={En.currentPasswrodPlaceHolder}
          style={styles.input}
          placeholderTextColor={`${COLOR.forgotInputTextColor}80`} />
      </View>

      <View style={styles.inputView}>
        <Label style={styles.labelText}>{En.newPassword}</Label>
        <RoundedInput
          placeholder={En.newPasswordPlaceHolder}
          style={styles.input}
          placeholderTextColor={`${COLOR.forgotInputTextColor}80`} />
      </View>

      <View style={styles.inputView}>
        <Label style={styles.labelText}>{En.confirm}</Label>
        <RoundedInput
          placeholder={En.confirmPasswordPlaceHolder}
          style={styles.input}
          placeholderTextColor={`${COLOR.forgotInputTextColor}80`} />
      </View>

    </View>
  )
}

export default ForgorPasswordScreen

const styles = StyleSheet.create({
  container: {
    ...MAIN_CONTAINER_STYLE,
    padding:wp(10)
  },
  title: {
    fontSize: hp(4.5),
    color: COLOR.white,
    width: wp(80),
    marginBottom: hp(2)
  },
  text: {
    fontSize: wp(4.5),
    color: "#646262",
    textAlign: 'left',
    marginVertical: hp(2)
  },
  labelText: {
    color: COLOR.white,
    fontSize: hp(1.75),
    marginBottom: hp(1)
  },
  input: {
    ...ROUNDED_INPUT_STYLE
  },
  backContainer: {
    marginRight: 'auto',
    marginBottom: hp(3)
  },
  inputView: {
    marginVertical: hp(1.25)
  }
})