import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { COLOR, hp, width, wp } from '../../enums/StyleGuide'
import SearchScreensHeader from '../../components/Header/SearchScreensHeader'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const RidesScreen = ({ navigation }) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'All' },
    { key: 'second', title: 'Carpool' },
    { key: 'third', title: 'Bus' },
  ]);

  const FirstRoute = () => (
    <View style={styles.allBlock} />
  );
  
  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: COLOR.screen_bg_color }} />
  );

  const ThirdRoute  = () => (
    <View style={{ flex: 1, backgroundColor: COLOR.screen_bg_color }} />
  );
  
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={styles.tabBar}
      labelStyle={styles.tabLabel}
    />
  );

  return (
    <View style={styles.container}>
      <SearchScreensHeader navigation={navigation} screenName={"rides"} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: width }}
        renderTabBar={renderTabBar}
      />
    </View>
  )
}

export default RidesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.screen_bg_color,
  },
  tabBar:{
    backgroundColor: COLOR.screen_bg_color,
    height: hp(7),
    marginTop: hp(1)
  },
  tabLabel: {
    fontSize: hp(2),
    width:'100%' // Adjust the font size as needed
  },
  allBlock:{
    flex:1,
    backgroundColor: COLOR.screen_bg_color
  }
})
