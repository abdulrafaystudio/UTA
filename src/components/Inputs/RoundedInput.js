import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { COLOR, hp, width } from '../../enums/StyleGuide';


const RoundedInput = ({ placeholder, value, onChangeText, style,placeholderTextColor }) => {
    return (

        <LinearGradient
            colors={[COLOR.primary, COLOR.secondary]}
            locations={[0.45, 1]}
            style={styles.linearGradient}
            start={{ x: 0, y: 7 }}
            end={{ x: 1, y: -1 }}
            >

            <TextInput
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                value={value}
                onChangeText={onChangeText}
                style={[style, styles.input]} />

        </LinearGradient>



    )
}

export default RoundedInput

const styles = StyleSheet.create({
    linearGradient: {
        width: width * 0.85,
        height: hp(5),
        borderRadius: hp(5)
    }
})