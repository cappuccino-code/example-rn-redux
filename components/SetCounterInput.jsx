import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Actions from '../redux/actions'
import { View, StyleSheet, TextInput, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

/**
 * {@link https://redux.js.org/introduction/getting-started React-Redux Hook API}.
 * Simple component to set the value of the counter by TextInput
 * @returns {JSX} A JSX object containing the counter value in text input and button to set value
 */
export default function SetCounterInput() {
    // get the counter value by use of the useSelector hook into our redux store
    const counter = useSelector(state => state.counter.counter)
    // using the useNavigation hook we can get a refernece to the current navigation object
    const navigation = useNavigation()

    // using the useState hook we can set the value of our text input field with the intial value
    // from our counter store
    const [value, setValue] = useState(counter)
    const dispatch = useDispatch() // the useDispatch hook will give us a refernece to our redux store

    // using the useEffect function reset the starting value (to be edited) to be the one
    // from the redux store
    useEffect(() => {
        setValue(counter)
    }, [counter, setValue])

    // callback function to set the value of the textinput as the new counter value
    const setCounterValue = () => {
        dispatch(Actions.setCounter(value))
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, textAlign: 'center', fontWeight: 'bold' }}
                onChangeText={newValue => setValue(Number(newValue))}
                value={`${value}`}
                keyboardType='numeric'
            />
            <Button title="Set Value" onPress={setCounterValue} color="#CF8DF8" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        justifyContent: 'center',
        padding: 5,
        paddingTop: 100,
        paddingBottom: 100
    },
});
