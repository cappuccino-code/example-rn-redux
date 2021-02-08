import React, { useState, useCallback, useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { INCREMENT_COUNTER } from '../redux/actionTypes'
import { useSelector, useDispatch } from 'react-redux'
//import the actions to have a reference to the names inside the component
import Actions from '../redux/actions'
/**
 * {@link https://redux.js.org/introduction/getting-started React-Redux Hook API}.
 * Simple component to increment/ decrement a counter by 1 to test the Redux Functionality
 * @returns {JSX} A JSX object containing the counter value and buttons to modify said value
 */
export default function Counter({ initValue = 1 }) {
    const counter = useSelector(state => state.counter.counter)
    // to actually fire the events we create a dispatch object
    const dispatch = useDispatch()

    // useEffect hook to asynchrnously call the dispatch event and set the counter
    // to the initial value suppied by this components props
    useEffect(() => {
        dispatch(Actions.setCounter(initValue))
    }, [])

    // the callback function to increment the counter asynchronously
    // using the useCallback hook with the dispatch obejct given as a dependancy
    const incrementCounter = useCallback(
        () => dispatch(Actions.incrementCounter()),
        [dispatch, Actions]
    )

    // same logic for the decrement counter
    const decrementCounter = useCallback(
        () => dispatch(Actions.decrementCounter()),
        [dispatch, Actions]
    )

    return (
        <View style={{ flexDirection: 'column', alignContent: 'center', justifyContent: 'center', flex: 2, width: 200 }}>
            <Button title="Subtract" color="#FF0000" onPress={decrementCounter} />
            <Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}>The Counter Value: {counter}</Text>
            <Button title="Add" color="#FFF000" onPress={incrementCounter} />
        </View>
    )
}
