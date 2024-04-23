import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SCREEN } from '../enums/AppEnums';
import SearchScreen from '../screens/Search/SearchScreen';
import InboxScreen from '../screens/Chat/InboxScreen';
import UtaProfileScreen from '../screens/Profile/UtaProfileScreen';
import PublishScreen from '../screens/Publish/PublishScreen';
import { Inbox, Inbox_Active, Plus, Profile, Profile_Active, Search, Search_Active } from '../assets/svg';
import { COLOR } from '../enums/StyleGuide';


const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === "ios" ? 80 : 70,
          backgroundColor: COLOR.screen_bg_color,
          borderTopWidth: 1,
          borderColor: COLOR.tabBar_border_color,
        },
      }}>

      <Tab.Screen
        name={SCREEN.SEARCH}
        component={SearchScreen}
        options={{
          title: 'Search',
          ...TabbarOptions,
          tabBarIcon: ({ focused }) => {
            return focused ?
              (<Search_Active width={25} height={25} />)
              :
              (<Search width={25} height={25} />)
          }
        }} />

      <Tab.Screen
        name={SCREEN.PUBLISH}
        component={PublishScreen}
        options={{
          title: 'Publish',
          ...TabbarOptions,
          tabBarIcon: ({ focused }) => {
            return focused ?
              (<Plus width={25} height={25} />)
              :
              (<Plus width={25} height={25} />)
          }
        }}
      />

      <Tab.Screen
        name={SCREEN.INBOX}
        component={InboxScreen}
        options={{
          title: 'Inbox',
          ...TabbarOptions,
          tabBarIcon: ({ focused }) => {
            return focused ?
              (<Inbox_Active width={25} height={25} />)
              :
              (<Inbox width={25} height={25} />)
          }
        }} />

      <Tab.Screen
        name={SCREEN.PROFILE}
        component={UtaProfileScreen}
        options={{
          title: 'Profile',
          ...TabbarOptions,
          tabBarIcon: ({ focused }) => {
            return focused ?
              (<Profile_Active width={30} height={30} />)
              :
              (<Profile width={30} height={30} />)
          }
        }} />
    </Tab.Navigator>
  )
}

const TabbarOptions = {
  tabBarActiveTintColor:"blue",
  tabBarLabelStyle: {
    fontSize: 14,
    // fontFamily: FONT.Satoshi_Bold,
    bottom: 5,
    width: '100%',
    color: COLOR.tabBar_title_color
  },
};


export default TabNavigator

const styles = StyleSheet.create({})