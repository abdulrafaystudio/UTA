import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'
import { AppleSignup, CustomButton, GoogleSignup, Label, Picture } from '../../components/widgets'
import RoundedInput from '../../components/Inputs/RoundedInput'
import { AUTH_SCREEN_IMG_STYLE,MAIN_CONTAINER_STYLE,ROUNDED_INPUT_STYLE, COLOR, hp, width, wp } from '../../enums/StyleGuide'
import En from '../../locales/En'
import { SCREEN } from '../../enums/AppEnums'
import BouncyCheckbox from "react-native-bouncy-checkbox"

const LoginScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Picture source={require('../../assets/images/logo.png')} style={styles.image} />

        <View>

          <View style={styles.inputView}>
            <Label style={styles.labelText}>{En.email}</Label>
            <RoundedInput 
            placeholder={En.emailPlaceHolder}
            style={styles.input}
            placeholderTextColor={COLOR.white}/>
          </View>

          <View style={styles.inputView}>
            <Label style={styles.labelText}>{En.password}</Label>
            <RoundedInput 
            placeholder={En.enterPasswordPlaceHolder}
            style={styles.input}
            placeholderTextColor={COLOR.white}/>
            <View style={styles.forgetContainer}>
              <BouncyCheckbox
                size={15}
                fillColor={COLOR.screen_bg_color}
                unfillColor={COLOR.white}
                iconStyle={styles.checkboxIcon}
                innerIconStyle={styles.checkboxInnerIcon}
                checkmarkStyle={COLOR.white}
                text={En.remember}
                textStyle={styles.checkboxText} // 
                onPress={(isChecked) => console.log(isChecked)}
              />
              <TouchableOpacity onPress={()=>navigation.navigate(SCREEN.FORGOT)}>
                <Label style={styles.forgotText}>{En.forgot}</Label>
              </TouchableOpacity>

            </View>
          </View>

          <CustomButton
            title={En.signinBtnLabel}
            buttonStyle={styles.btnView}
            labelStyle={styles.btnLabel}
          />
        </View>

        <View style={styles.otherAuthContainer}>
          <GoogleSignup />
          <AppleSignup />
          <View style={styles.inlineTextContainer}>
            <Label style={styles.labelTextAlready}>{En.noAccount}</Label>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN.SIGNUP)}>
              <Label style={styles.label}>{En.signupText}</Label>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </ScrollView>
  )
}

export default LoginScreen

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
  
  labelText: {
    color: COLOR.white,
    fontSize: hp(1.75),
    marginBottom: hp(1)
  },
  btnView: {
    backgroundColor: COLOR.primary,
    width: width * 0.85,
    height: hp(5),
    borderRadius: hp(4),
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

  inlineTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(7),
    justifyContent: 'center',
    marginTop: hp(1)

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
  forgetContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(2)
  },
  checkboxIcon: {
    width: 15,
    height: 15,
    borderRadius: 3,
  },
  checkboxInnerIcon: {
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: COLOR.white
  },
  checkboxText: {
    color: COLOR.white,
    fontSize: hp(1.5),
    textDecorationLine: 'none',
  },
  forgotText:{
    color: COLOR.white,
    fontSize: hp(1.5),
  },
  input: {
    ...ROUNDED_INPUT_STYLE
  }
})
