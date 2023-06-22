import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DrawerNavigation from '../Navigation/DrawerNavigation';

const Navbar = ({navigation}) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.openDrawer()}>
        {/* Icono de menú hamburguesa */}
        <Text style={styles.menuButtonText}>☰</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Guula App</Text>
      <TouchableOpacity style={styles.notificationButton} onPress={() => console.log('Abrir notificaciones')}>
        {/* Icono de notificaciones */}
        <Text style={styles.notificationButtonText}>🔔</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f1f1f1',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  menuButton: {
    marginRight: 10,
  },
  menuButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationButton: {
    marginLeft: 10,
  },
  notificationButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Navbar;
