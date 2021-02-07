import React from 'react'
import FocusedStatusBar from '../../components/FocusedStatusBar'
import { createStackNavigator } from '@react-navigation/stack'
import SettingsScreen from './SettingsScreen'

const SettingsStack = createStackNavigator()

/**
 *The Stack Navigator that will ahndle all the Settings Pages
 * @returns {JSX} A JSX object containing the status bar and a stack navigator for the Settings Screens
 */
export default function SettingsStackNavigator() {

    return (
        <>
            <FocusedStatusBar style="dark" />
            <SettingsStack.Navigator>
                <SettingsStack.Screen name="Settings" component={SettingsScreen} />
            </SettingsStack.Navigator>
        </>
    )
}