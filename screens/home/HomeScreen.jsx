import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Counter from '../../components/Counter'
/**
 * this screen will ddisplay a simple HomePage with a counter and value displayed
 * @param {Object} props the supplied properties to this JSX function
 * @param {Object} props.navigation the reference to the navigation for this application
 * @returns {JSX} A JSX object containing a simple settings page with a Go Back Button
 */
export default function HomeScreen({ navigation }) {

    return (
        <SafeAreaView edges={['right', 'left', 'bottom']} style={styles.container}>
            <View style={styles.container}>
                <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center' }}>Home</Text>
                <Counter initValue={42} />
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        alignItems: 'center'
    },
});
