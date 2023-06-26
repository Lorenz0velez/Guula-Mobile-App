import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNav from './src/navigation/BottomTabNav';

export default function App() {
  return (
    <NavigationContainer>
          <View style={{marginTop: Constants.statusBarHeight, flexGrow: 1}}>
              {/* <DrawerNavigation/> */}
              <BottomTabNav/> 
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
