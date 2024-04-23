import { Modal, StyleSheet, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react'
import { SEARCH_SCREEN_SEARCH_CAR_BLOCKSVIEW, COLOR, MAIN_CONTAINER_STYLE, hp, width, wp, height } from '../../enums/StyleGuide'
import {  Label, Picture } from '../../components/widgets'
import LinearGradient from 'react-native-linear-gradient'
import {  DropDown, Location, Search_White, } from '../../assets/svg'
import DatePicker from 'react-native-date-picker'
import { SCREEN } from '../../enums/AppEnums'

const SearchScreen = (props) => {

  const { navigation } = props
  const { seats: numberOfSeats = 0 } = props.route.params || {};
  
  const { goingTo, leavingFrom } = props.route.params || { goingTo: null, leavingFrom: null }

  const [isVisible, setIsVisible] = useState(false);

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0'); // Add leading zero if necessary
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Add leading zero if necessary
    const year = date.getFullYear() % 100; // Get last two digits of year

    return `${day}/${month}/${year}`;
  };


  return (
    <View style={styles.container}>
      <Label style={styles.searchScreenTitle}>Your pick of rides at low prices</Label>
      <Picture source={require('../../assets/images/search_screen_banner.png')} style={styles.image} />

      <LinearGradient
        colors={[COLOR.primary, COLOR.secondary]}
        locations={[0.5, 1]} // Start color 1 at middle, color 2 at the end
        style={styles.linearGradient}
        start={{ x: 0, y: 0 }} // Start at the top
        end={{ x: 0, y: 1 }}   // End at the bottom
      >
        <View style={styles.travelingView}>
          <Location width={25} height={25} />
          <View style={{ marginLeft: wp(2), width: '100%' }}>
            <TouchableOpacity style={{ width: wp(50) }} onPress={() => navigation.navigate(SCREEN.LEAVINGFROM)}>
              <Label style={[styles.labelColor, { marginBottom: hp(0.25) }]}>Leaving from</Label>
              <Label style={[styles.labelColor, { fontSize: hp(2) }]}>{leavingFrom || ""}</Label>
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.travelingView}>
          <Location width={25} height={25} />
          <View style={{ marginLeft: wp(2), width: '100%' }}>
            <Label style={[styles.labelColor, { marginBottom: hp(0.25) }]}>Going To</Label>
            <Label style={[styles.labelColor, { fontSize: hp(2) }]}>{goingTo || ""}</Label>
          </View>
        </View>

        <TouchableOpacity style={styles.dateContainer} onPress={() => setOpen(true)}>
          <Label style={[styles.labelColor, { marginBottom: hp(0.25) }]}>Date</Label>
          <Label style={styles.labelColor}>{formatDate(date)}</Label>
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={(selectedDate) => {
              setOpen(false);
              setDate(selectedDate);
            }}
            onCancel={() => setOpen(false)}
          />
        </TouchableOpacity>

        <View style={styles.travelerContainer}>
          <Label style={{ color: COLOR.white, width: "100%" }}>Travelers</Label>
          <TouchableOpacity style={styles.travelerNoShownBlock} onPress={() => navigation.navigate(SCREEN.SEATBOOK)}>
            <Label style={{ color: COLOR.white }}>{numberOfSeats}</Label>
            <DropDown width={20} height={20} />
          </TouchableOpacity>
        </View>

      </LinearGradient>
      <View>
        <TouchableOpacity style={styles.searchBtnView} onPress={()=> navigation.navigate(SCREEN.RIDES)}>
          <Search_White width={22} height={22} />
          <Label style={styles.searchBtnLabel}>Search</Label>
        </TouchableOpacity>
      </View>

      {/* Modall */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
      >
        <View style={styles.centeredView}>

        </View>
      </Modal>

    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    ...MAIN_CONTAINER_STYLE,
    position: "relative"

  },
  searchScreenTitle: {
    color: COLOR.white,
    fontSize: hp(4),
    marginTop: hp(4),
    marginBottom: hp(3),
    textAlign: "center",
    width: wp(75),

  },
  image: {
    height: '20%',
    width: '100%',
    resizeMode: 'stretch'
  },
  linearGradient: {
    width: width * 0.75,
    height: hp(34),
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: hp(3)
  },
  travelingView: {
    ...SEARCH_SCREEN_SEARCH_CAR_BLOCKSVIEW
  },
  searchBtnView: {
    width: width * 0.755,
    height: hp(6),
    borderWidth: 0.5,
    marginBottom: hp(1),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: COLOR.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: wp(2),
    width: wp(50),
    color: COLOR.white
  },
  searchBtnLabel: {
    color: COLOR.white,
    fontSize: hp(2),
    marginLeft: wp(3),

  },
  dateContainer: {
    ...SEARCH_SCREEN_SEARCH_CAR_BLOCKSVIEW,
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: hp(1)
  },
  travelerContainer: {
    ...SEARCH_SCREEN_SEARCH_CAR_BLOCKSVIEW,
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: hp(1)
  },
  travelerNoShownBlock: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 3
  },
  labelColor: {
    color: COLOR.white,
  }



})