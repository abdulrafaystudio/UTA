import { StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import Google from '../../../assets/svg/google.svg'
import Label from '../label'
import { COLOR, hp, width, wp } from '../../../enums/StyleGuide'
import En from '../../../locales/En'


const GoogleSignup = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Google width={25} height={25} />
            <Label style={styles.labelText}>{En.googleLogin}</Label>
        </TouchableOpacity>
    )
}

export default GoogleSignup

const styles = StyleSheet.create({
    container:{
        flexDirection:'row', 
        alignItems:'center',
        justifyContent:'center',
        width: width * 0.85,
        height:hp(4),
        borderRadius:hp(4),
        marginBottom:hp(2),
        backgroundColor: `${COLOR.auth_btn_bg_color}4D`,
        
      },
      labelText:{
        color:COLOR.white,
        fontSize:hp(1.8),
        width:"40%",
        marginLeft:wp(4)
      },
})