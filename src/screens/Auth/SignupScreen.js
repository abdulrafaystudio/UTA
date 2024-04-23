import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'
import { AppleSignup, CustomButton, GoogleSignup, Label, Picture } from '../../components/widgets'
import RoundedInput from '../../components/Inputs/RoundedInput'
import { AUTH_SCREEN_IMG_STYLE,MAIN_CONTAINER_STYLE,ROUNDED_INPUT_STYLE, COLOR, hp, width, wp } from '../../enums/StyleGuide'
import En from '../../locales/En'
import { SCREEN } from '../../enums/AppEnums'

const SignupScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Picture source={require('../../assets/images/logo.png')} style={styles.image} />

        <View style={styles.inputsView}>

          <View style={styles.inputView}>
            <Label style={styles.labelText}>{En.name}</Label>
            <RoundedInput
              placeholder={En.namePlaceHolder}
              style={styles.input}
              placeholderTextColor={COLOR.white} />
          </View>

          <View style={styles.inputView}>
            <Label style={styles.labelText}>{En.email}</Label>
            <RoundedInput
              placeholder={En.emailPlaceHolder}
              style={styles.input}
              placeholderTextColor={COLOR.white} />
          </View>

          <View style={styles.inputView}>
            <Label style={styles.labelText}>{En.password}</Label>
            <RoundedInput
              placeholder={En.passwordPlaceHolder}
              style={styles.input}
              placeholderTextColor={COLOR.white} />
          </View>

          <View style={styles.inputView}>
            <Label style={styles.labelText}>{En.confirmPassword}</Label>
            <RoundedInput
              placeholder={En.confirmPasswordPlaceHolder}
              style={styles.input}
              placeholderTextColor={COLOR.white} />
          </View>

          <CustomButton
            title={En.signupBtnLabel}
            buttonStyle={styles.btnView}
            labelStyle={styles.btnLabel}
            onPress={()=>navigation.navigate(SCREEN.TAB)}
          />
        </View>

        <View style={styles.otherAuthContainer}>
          <GoogleSignup />
          <AppleSignup />

          <Label style={styles.labelTextp}>{En.termsPolicy}</Label>
          <View style={styles.inlineTextContainer}>
            <Label style={styles.labelTextAlready}>{En.alreadyAccount}</Label>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN.LOGIN)}>
              <Label style={styles.label}>{En.signinText}</Label>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </ScrollView>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    ...MAIN_CONTAINER_STYLE,
   
  },
  inputView: {
    marginVertical: hp(0.5)
  },
  image: {
   ...AUTH_SCREEN_IMG_STYLE
  },
  inputsView: {

  },
  labelText: {
    color: COLOR.white,
    fontSize: hp(1.75),
    marginBottom: hp(1)
  },
  btnView: {
    backgroundColor: COLOR.primary,
    width: width * 0.85,
    height: hp(5),
    borderRadius: hp(5),
    marginTop: hp(3),
    justifyContent: 'center',
  },
  btnLabel: {
    textAlign: 'center',
    fontSize: hp(2.25),
    color: COLOR.white
  },
  otherAuthContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: wp(10)

  },
  labelTextp: {
    color: COLOR.white,
    fontSize: hp(1.75),
    textAlign: 'center',
    paddingHorizontal: wp(10),
    paddingTop: hp(0.5),
    marginTop: hp(1)
  },
  inlineTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(2),
  },
  gradient: {
    // borderRadius: hp(2),
    // paddingHorizontal: wp(4)
  },
  label: {
    fontSize: hp(2),
    fontWeight: 'bold',
    color: 'white',
    marginLeft: wp(2),
    color: COLOR.secondary
  },
  labelTextAlready: {
    color: COLOR.white,
    fontSize: hp(1.75),
    textAlign: 'center',
    paddingVertical: hp(0.5),
  },
  input: {
  ...ROUNDED_INPUT_STYLE
  }
})
