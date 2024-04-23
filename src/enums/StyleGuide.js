import { Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const COLOR = {
  primary: "#0568EA",
  secondary: "#EA00FF",
  screen_bg_color: "#1C0037",
  white: '#ffffff',
  black: "#000000",
  auth_btn_bg_color: "#FAFDFF",
  forgotInputTextColor: "#FDFEFF",
  tabBar_border_color: "#646262",
  tabBar_title_color: "#646262"

}



const ACTIVE_OPACITY = 0.75

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const FONT = {
  Poppins_Bold: "Poppins-Bold",
  Poppins_Medium: "Poppins-Medium",
  Poppins_Regular: "Poppins-Regular",
}

const TEXT_STYLE = {
  text_regular: {

    fontStyle: "normal",
    fontSize: 14,


    fontFamily: FONT.Poppins_Medium
  },
  text_bold: {

    fontStyle: "normal",

    fontSize: 14,

    fontFamily: FONT.Poppins_Bold
  },
  title_regular: {

    fontStyle: "normal",
    fontSize: 24,
    fontFamily: FONT.Poppins_Medium

  },
  title_bold: {

    fontStyle: "normal",
    fontSize: 24,

    fontFamily: FONT.Poppins_Bold
  },
  button_regular: {
    fontStyle: "normal",
    fontSize: 16,

    fontFamily: FONT.Poppins_Medium
  },

}

const AUTH_SCREEN_IMG_STYLE = {
  width: "30%",
  height: "20%",
  marginBottom: hp(2)
}

const MAIN_CONTAINER_STYLE = {
  flex: 1,
  backgroundColor: COLOR.screen_bg_color,
  alignItems: 'center',
  padding: wp(1)
}

const ROUNDED_INPUT_STYLE = {
  color: COLOR.white,
  fontSize: hp(1.75),
  padding: wp(3)
}

const SEARCH_SCREEN_SEARCH_CAR_BLOCKSVIEW = {
  height: hp(7),
  borderWidth: 0.5,
  marginBottom: hp(1),
  borderRadius: 10,
  borderColor: COLOR.white,
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: wp(5),
}



export {
  FONT,
  COLOR,
  TEXT_STYLE,
  width,
  ACTIVE_OPACITY,
  height,
  wp,
  hp,
  AUTH_SCREEN_IMG_STYLE,
  MAIN_CONTAINER_STYLE,
  ROUNDED_INPUT_STYLE,
  SEARCH_SCREEN_SEARCH_CAR_BLOCKSVIEW
}