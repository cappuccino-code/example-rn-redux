import React, { useState, useEffect } from 'react'
import SetCounterInput from '../../components/SetCounterInput'
import { View, Text, Button, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
/**
 * this screen will display the user settings like theme (dark light, and location??)
 * @param {Object} props the supplied properties to this JSX function
 * @param {Object} props.navigation the reference to the navigation for this application
 * @returns {JSX} A JSX object containing a simple settings page with a Go Back Button
 */
export default function SettingsScreen({ navigation }) {

    // function callback to navigate to the previous page when the user is done with settings
    const goBack = () => navigation.goBack()

    // example of redux in this function is to show that we can accept user input and set the value
    return (
        <SafeAreaView edges={['right', 'left', 'bottom']} style={{ alignItems: 'center' }} >
            <View>
                <SetCounterInput />
                <Button title="Back" onPress={goBack} />
            </View>
        </SafeAreaView>
    )
}
