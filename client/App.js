import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Navbar from './src/components/NavBar/NavBar';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './src/components/Navigation/DrawerNavigation';

export default function App() {
  return (
    <NavigationContainer>
          <View style={{marginTop: Constants.statusBarHeight, flexGrow: 1}}>
              {/* <Navbar/> */}
              <DrawerNavigation/>
          </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: "red",
    alignItems: 'center',
    justifyContent: 'center',
  },
  child_container: {

  },
});
