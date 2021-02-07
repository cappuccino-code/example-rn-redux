import React from 'react'
import { useIsFocused } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

/**
 * change the status bar depending on if this screen is focused on not
 * using a ternary operator and the useisFocused hook, based on the demo from class (MAD9135)
 * @param {Object} props the props supplied to this statusbar rebinded to the StatusBar component
 * @returns {JSX} A JSX object containing the status bar with the proper focus 
 */
export default function FocusedStatusBar(props) {
    const isFocused = useIsFocused()
    return isFocused ? <StatusBar {...props} /> : null
}