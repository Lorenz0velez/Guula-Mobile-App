import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.child_container}>
      <Text>Este es un Text</Text>
      <StatusBar style="auto" />
    </View>
    <View style={styles.child_container}>
      <Text>Este es otro text</Text>
      <StatusBar style="auto" />
    </View>
    </View>
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
