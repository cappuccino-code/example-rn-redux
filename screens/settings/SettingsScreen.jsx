import React from 'react'
import { View, Text, Button } from 'react-native'
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
    return (
        <SafeAreaView edges={['right', 'left', 'bottom']}>
            <View>
                <Text>Settings</Text>
                <Button title="Back" onPress={goBack} />
            </View>
        </SafeAreaView>
    )
}