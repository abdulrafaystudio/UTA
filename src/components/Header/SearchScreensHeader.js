import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOR, hp, wp } from '../../enums/StyleGuide'
import { BackArrow, Cross, HighlightedCross, NextArrow } from '../../assets/svg'

const SearchScreensHeader = (props) => {
    const { navigation, screenName } = props

    switch (screenName) {
        case 'seatBook':
            return (
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <HighlightedCross width={25} height={25} style={styles.Highlightedcross} />
                    </TouchableOpacity>
                </View>
            )

        case 'SearchLeavingFromScreen':
            return (
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <BackArrow width={22} height={22} />
                    </TouchableOpacity>

                    <Text style={styles.headerTitle}>Manchester Airport </Text>

                    <TouchableOpacity style={styles.crossIcon} onPress={() => navigation.goBack()}>
                        <Cross width={20} height={20} />
                    </TouchableOpacity>

                </View>
            )

        case 'rides':
            return (
                <View style={[styles.headerContainer,{marginHorizontal:wp(9), marginTop:hp(5)}]}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <BackArrow width={22} height={22} />
                    </TouchableOpacity>
                    <View style={{marginLeft: wp(4)}}>
                        <View style={styles.cityNameBlock}>
                            <Text style={styles.cityName}>Manchester Airport...</Text>
                            <NextArrow width={13} height={13} />
                            <Text style={[styles.cityName, { marginLeft: wp(3) }]}>Manchester Airport...</Text>
                        </View>
                        <View>
                            <Text style={styles.todayPassengerText}>Today, 3 passengers</Text>
                        </View>
                    </View>


                </View>
            )
    }


}

export default SearchScreensHeader

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    crossIcon: {
        marginLeft: "auto"
    },
    headerTitle: {
        color: COLOR.white,
        fontSize: hp(3.5),
        marginLeft: wp(3),
    },
    Highlightedcross: {
        margin: wp(2)
    },
    cityName: {
        color: COLOR.white,
        width: wp(27),
        fontSize: hp(1.5)
    },
    cityNameBlock:{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'flex-start'
    },
    todayPassengerText:{
        color: "#646262",
        fontSize: hp(1.5),
        marginTop:hp(0.5)
    }
})