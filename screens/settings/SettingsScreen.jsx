import React from 'react'
import { useDispatch } from 'react-redux'
import Actions from '../../redux/actions'
import { View, Text, Button, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
/**
 * this screen will display the user settings like theme (dark light, and location??)
 * @param {Object} props the supplied properties to this JSX function
 * @param {Object} props.navigation the reference to the navigation for this application
 * @returns {JSX} A JSX object containing a simple settings page with a Go Back Button
 */
export default function SettingsScreen({ navigation }) {
    const [value, setValue] = React.useState(0)
    const dispatch = useDispatch()
    // function callback to navigate to the previous page when the user is done with settings
    const goBack = () => navigation.goBack()

    // callback function to set the value of the textinput as the new counter value
    const setCounterValue = () => {
        dispatch(Actions.setCounter(value))
        navigation.goBack()
    }

    // example of redux in this function is to show that we can accept user input and set the value
    return (
        <SafeAreaView edges={['right', 'left', 'bottom']}>
            <View>
                <Text>Settings</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={newValue => setValue(Number(newValue))}
                    value={`${value}`}
                    keyboardType='numeric'
                />
                <Button title="Set Value" onPress={setCounterValue} />
                <Button title="Back" onPress={goBack} />
            </View>
        </SafeAreaView>
    )
}