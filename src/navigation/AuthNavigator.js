import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN } from '../enums/AppEnums';
import SplashScreen from '../screens/Splash/SplashScreen';
import SignupScreen from '../screens/Auth/SignupScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import ForgorPasswordScreen from '../screens/Auth/ForgorPasswordScreen';
import TabNavigator from './TabNavigator';
import SearchLeavingFromScreen from '../screens/Search/SearchLeavingFromScreen';
import RidesScreen from '../screens/Search/RidesScreen';
import SeatBookScreen from '../screens/Search/SeatBookScreen';







const AuthNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* <Stack.Screen name={SCREEN.SPLASH} component={SplashScreen} /> */}
                <Stack.Screen name={SCREEN.SIGNUP} component={SignupScreen} />
                <Stack.Screen name={SCREEN.LOGIN} component={LoginScreen} />
                <Stack.Screen name={SCREEN.FORGOT} component={ForgorPasswordScreen} />
                <Stack.Screen name={SCREEN.TAB} component={TabNavigator} />
                <Stack.Screen name={SCREEN.LEAVINGFROM} component={SearchLeavingFromScreen} />
                <Stack.Screen name={SCREEN.SEATBOOK} component={SeatBookScreen} />
                <Stack.Screen name={SCREEN.RIDES} component={RidesScreen} />

                

            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default AuthNavigator

const styles = StyleSheet.create({})