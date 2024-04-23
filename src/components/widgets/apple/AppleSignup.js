import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Label from '../label'
import { COLOR, hp, width, wp } from '../../../enums/StyleGuide'
import Apple from '../../../assets/svg/apple.svg'
import En from '../../../locales/En'

const AppleSignup = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Apple width={25} height={25} />
            <Label style={styles.labelText}>{En.appleLogin}</Label>
        </TouchableOpacity>
    )
}

export default AppleSignup

const styles = StyleSheet.create({
      container:{
        flexDirection:'row', 
        alignItems:'center',
        justifyContent:'center',
        width: width * 0.85,
        height:hp(4),
        borderRadius:hp(4),
        backgroundColor: `${COLOR.auth_btn_bg_color}4D`
      },
      labelText:{
        color:COLOR.white,
        fontSize:hp(1.8),
        width:"35%",
        marginLeft:wp(4)
      },
})