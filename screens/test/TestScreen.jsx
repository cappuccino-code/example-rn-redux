import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
/**
 * this screen will display a test Screen used for testing Redux Functionality
 * @param {Object} props the supplied properties to this JSX function
 * @param {Object} props.navigation the reference to the navigation for this application
 * @returns {JSX} A JSX object containing a simple Test Screen
 */
export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView edges={['right', 'left', 'bottom']}>
            <View>
                <Text>Test Screen</Text>
            </View>
        </SafeAreaView>
    )
}