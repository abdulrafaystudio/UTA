import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ForwardArrow } from '../assets/svg'
import { COLOR, hp, wp } from '../enums/StyleGuide'
import { Label } from './widgets'

const SearchCitiesList = (props) => {
    const { item, onPress } = props;
    
    return (
        <View style={styles.container}>
            <View style={{ paddingBottom: hp(2) }} >
                <Label style={styles.leaving}>{item.leavingFrom}</Label>
                <Label style={styles.going}>{item.goingTo}</Label>
            </View>

            <TouchableOpacity onPress={() => onPress(item.route, item.leavingFrom, item.goingTo)}>
                <ForwardArrow width={22} height={22} />
            </TouchableOpacity>

        </View>
    )
}

export default SearchCitiesList

const styles = StyleSheet.create({
    leaving: {
        color: COLOR.white,
        fontSize: hp(2.25),
        marginBottom: hp(0.25)
    },
    going: {
        color: '#646262',
        fontSize: hp(2.1)
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: wp(1.5), marginTop: hp(2.5),
        borderBottomWidth: 1,
        borderColor: '#646262',
    }
})