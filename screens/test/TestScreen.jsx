import React, { useCallback } from 'react'
import { View, Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
import Actions from '../../redux/actions'
/**
 * this screen will display a test Screen used for testing Redux Functionality
 * @param {Object} props the supplied properties to this JSX function
 * @param {Object} props.navigation the reference to the navigation for this application
 * @returns {JSX} A JSX object containing a simple Test Screen
 */
export default function TestScreen({ navigation }) {
    // reference to the dispatcher from redux
    const dispatch = useDispatch()
    // callback function to fire with the button is clicked
    const resetCounter = useCallback(
        () => {
            dispatch(Actions.resetCounter())
            navigation.navigate('Home')
        },
        [dispatch, Actions]
    )
    return (
        <SafeAreaView edges={['right', 'left', 'bottom']}>
            <View>
                <Text>Test Screen</Text>
                {/* This redux test shows we can dispatch an event from any file */}
                <Button title='Reset' color='#0F0F0F' onPress={resetCounter} />
            </View>
        </SafeAreaView>
    )
}