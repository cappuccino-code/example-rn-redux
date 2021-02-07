import React from 'react'
import { View, Text } from 'react-native'
import FocusedStatusBar from '../../components/FocusedStatusBar'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './HomeScreen.jsx'

const HomeStack = createStackNavigator()

export default function HomeStackNavigator() {
    return (
        <>
            <FocusedStatusBar style="dark" />
            <HomeStack.Navigator>
                <HomeStack.Screen name='Home' component={HomeScreen} options={{ title: 'Home' }} />
            </HomeStack.Navigator>
        </>
    )
}
