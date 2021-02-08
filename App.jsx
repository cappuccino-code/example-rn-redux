import React from 'react';
// libraries/ imports needed for navigation
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { StyleSheet, Text, View } from 'react-native';
import TabScreen from './screens/TabScreen'
import SettingsStackNavigator from './screens/settings/SettingsStackNavigator'
// libraries/ imports needed for redux and react-redux (the official redux hooks for react)
import { Provider } from 'react-redux' // create a context provider to offer the store to child components
import store from './redux/store.js'

// create our drawer nav element, will be used to switch between Home and Settings
const AppDrawer = createDrawerNavigator()

// create a wrapper outside of our main application to provide all redux states/ values
// to the rest of our components inside the application
export default function ReduxApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

function App() {
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
