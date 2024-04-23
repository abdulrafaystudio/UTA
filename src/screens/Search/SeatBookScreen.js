import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLOR, hp, width, wp } from '../../enums/StyleGuide'
import SearchScreensHeader from '../../components/Header/SearchScreensHeader'
import { CustomButton, Label } from '../../components/widgets'
import { CounterMinus, CounterPlus } from '../../assets/svg'
import { SCREEN } from '../../enums/AppEnums'

const SeatBookScreen = ({ navigation }) => {
  console.log(navigation)

  const [seats, setSeats] = useState(0)



  return (
    <View style={styles.container}>

      <SearchScreensHeader navigation={navigation} screenName={"seatBook"} />

      
        <View style={styles.counterContainer}>
          <Label style={styles.modalTitle}>Number of seats to book</Label>
          <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: "center", paddingBottom:hp(5) }}>
            <TouchableOpacity onPress={() => setSeats(prevSeats => prevSeats > 0 ? prevSeats - 1 : 0)}>
              <CounterMinus width={40} height={40} />
            </TouchableOpacity>

            <Label style={{ color: COLOR.white, fontSize: hp(12), width: wp(50), textAlign: 'center' }}>{seats}</Label>

            <TouchableOpacity onPress={() => setSeats((previous) => previous + 1)}>
              <CounterPlus width={40} height={40} />
            </TouchableOpacity>
          </View>

          <CustomButton
            title={"confirm"}
            buttonStyle={styles.btnView}
            labelStyle={styles.btnLabel}
            onPress={() => navigation.navigate(SCREEN.SEARCH, { seats })}
          />

        </View>

      </View>
    
  )
}

export default SeatBookScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.screen_bg_color,
    padding: wp(9)
  },
  modalView: {
    padding: wp(9)
  },
  modalTitle: {
    color: COLOR.white, textAlign: 'center',
    fontSize: hp(4),
  },
  btnView: {
    backgroundColor: COLOR.primary,
    width: width * 0.30,
    height: hp(5),
    borderRadius: hp(5),
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  btnLabel: {
    textAlign: 'center',
    fontSize: hp(2.25),
    color: COLOR.white
  },
  counterContainer: {
    paddingHorizontal: wp(3),
    marginTop: hp(2),
    flex: 1,
    justifyContent: 'space-between'
  },
})