import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeStackNavigator from './home/HomeStackNavigator'
import TestStackNavigator from './test/TestStackNavigator'

// create the tab navigation between the 5 main views (filters): home, coffee, foodtrucks, bakeries, restaursnts
const Tab = createBottomTabNavigator()

export default function TabScreen() {

    // the tab navigator will make 5 Tab.Screens for the different tabs
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        const iconName = focused ? 'md-home' : 'ios-home'
                        return <Ionicons name={iconName} size={size} color={color} />
                    },
                    tabBarLabel: 'HomePage'
                }}
            />
            <Tab.Screen
                name="Test"
                component={TestStackNavigator}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        const iconName = focused ? 'md-settings' : 'ios-settings'
                        return <Ionicons name={iconName} size={size} color={color} />
                    },
                    tabBarLabel: 'Test'
                }}
            />
        </Tab.Navigator>
    )
}