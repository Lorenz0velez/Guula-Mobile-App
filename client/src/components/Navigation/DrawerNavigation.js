import * as React from 'react';
import { createDrawerNavigator, } from '@react-navigation/drawer';
import { NavigationContainer,  } from '@react-navigation/native';

// Importa tus pantallas/componentes
import ProfileScreen from '../../screens/ProfileScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import Feed from '../Feed';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="FEED" component={Feed} />
        <Drawer.Screen name="Profile Screen" component={ProfileScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
      </Drawer.Navigator>
  );
};

const MenuItmes = () => {
  return
}

export default DrawerNavigation;
