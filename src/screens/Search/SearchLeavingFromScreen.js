import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLOR, wp } from '../../enums/StyleGuide'
import SearchCitiesList from '../../components/SearchCitiesList'
import { SEARCHCITIESLIST } from '../../assets/data/Dummies'
import SearchScreensHeader from '../../components/Header/SearchScreensHeader'

const SearchLeavingFromScreen = ({ navigation }) => {
    
    const handlePress = (route, leavingFrom, goingTo) => {
        navigation.navigate(route, { leavingFrom, goingTo });
    }

    return (
        <View style={styles.container}>
            {/* Header */}

            <SearchScreensHeader navigation={navigation} screenName={"SearchLeavingFromScreen"}/>


            {
                SEARCHCITIESLIST.map((item, index) => (
                    <SearchCitiesList
                        item={item}
                        key={index}
                        onPress={handlePress}
                    />
                ))
            }


        </View>
    )
}

export default SearchLeavingFromScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.screen_bg_color,
        padding: wp(9)
    },


})