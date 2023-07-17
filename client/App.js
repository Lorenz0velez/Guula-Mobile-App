import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNav from './src/navigation/BottomTabNav';
import { Provider } from 'react-redux';
import store from './src/redux/store';


export default function App() {
  return (
    // <Provider store={store} >
      <NavigationContainer>
          <View style={{marginTop: Constants.statusBarHeight, flexGrow: 1}}>
              <BottomTabNav/> 
          </View>
    </NavigationContainer>
    // </Provider>
   
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




