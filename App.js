import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { StyleSheet, Text, View } from 'react-native';
import TabScreen from './screens/TabScreen'
import SettingsStackNavigator from './screens/settings/SettingsStackNavigator'

// create our drawer nav element, will be used to switch between Home and Settings
const AppDrawer = createDrawerNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppDrawer.Navigator
          initialRoute="Home"
          drawerPosition="right"
          drawerType="front"
        >
          <AppDrawer.Screen name="Main Application" component={TabScreen} />
          <AppDrawer.Screen name="Settings" component={SettingsStackNavigator} />
        </AppDrawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
