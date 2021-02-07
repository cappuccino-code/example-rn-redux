import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

/**
 * Simple component to increment/ decrement a counter by 1 to test the REdux Functionality
 * @returns {JSX} A JSX object containing the counter value and buttons to modify said value
 */
export default function Counter({ initValue = 1 }) {
    const [counter, setCounter] = useState(initValue)
    const increment = () => setCounter(counter + 1)
    const decrement = () => setCounter(counter - 1)

    return (
        <View>
            <Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}>The Counter Value: {counter}</Text>
            <Button title="Subtract" color="#FF0000" onPress={decrement} />
            <Button title="Add" color="#FFF000" onPress={increment} />
        </View>
    )
}
