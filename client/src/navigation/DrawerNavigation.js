import * as React from 'react';
import { DrawerContentScrollView, createDrawerNavigator, } from '@react-navigation/drawer';
import { NavigationContainer,  } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

// Importa tus pantallas/componentes
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Feed from '../screens/Feed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MenuBotonItem from '../components/MenuBotonItem';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
      <Drawer.Navigator
      drawerContent={  (props)=>  <MenuItmes {...props} />   }
      > 
        <Drawer.Screen name="Feed" component={Feed}/>
        <Drawer.Screen name="ProfileScreen" component={ProfileScreen}/>
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen}/>
      </Drawer.Navigator>
  );
};

const MenuItmes = ({ navigation }) => {
  return(
    <DrawerContentScrollView
    style={styles.container}
    >
      <Text style={styles.title}>MI MENU</Text>

      <MenuBotonItem 
      text = 'Feed'
      onPress={()=> navigation.navigate('Feed')}
      />

      <MenuBotonItem 
      text = 'SettingsScreen'
      onPress={()=> navigation.navigate('SettingsScreen')}
      />

      <MenuBotonItem 
      text = 'ProfileScreen'
      onPress={()=> navigation.navigate('ProfileScreen')}
      />



    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#FA8072',
    padding:15,
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:15,
    alignSelf:'center',
  }
})

export default DrawerNavigation;
