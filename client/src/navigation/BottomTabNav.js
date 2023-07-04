import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../screens/ProfileScreen';
import FeedScreen from '../screens/FeedScreen';
import SearchScreen from '../screens/SearchScreen';
import MySearchScreenStack from './SearchScreenStack';


const Tab = createBottomTabNavigator();


export default function BottomTabNav() {
  return (
      <Tab.Navigator
      screenOptions={({ route })=>({
        // tabBarActiveTintColor:'red',
        // tabBarActiveBackgroundColor:'grey',
        // tabBarInactiveBackgroundColor:'orange',
        
        tabBarIcon: ({ focused, color, size })=>{

          let iconName = '';
          switch( route.name){
            case 'FeedScreen':
              iconName = focused ? 'home' : 'home-outline';
              break;

            case 'SearchScreen':
              iconName = focused ? 'search' : 'search-outline';
              break;

            case 'SettingsScreen':
              iconName = focused ? 'settings' : 'settings-outline';
              break;

            case 'ProfileScreen':
              iconName = focused ? 'person-circle' : 'person-circle-outline';
              break;
          }


          return <Icon name={iconName} size={size} color={color} />;
        }
      })}
      >
        <Tab.Screen 
        name="FeedScreen" 
        component={FeedScreen} 
        options={{
          tabBarLabel:'Home',
          tabBarBadge:3, //---->>> NOTIFICACIONES ARRIBA DEL ICONO
          headerShown:false, // HACE QUE EL HEADER CON EL NOMBRE NO SE MUESTRE
        }}
        />

        <Tab.Screen
         name="SearchScreen" 
         component={MySearchScreenStack}
         options={{
          tabBarLabel:'Search',
          // tabBarBadge:3, //---->>> NOTIFICACIONES ARRIBA DEL ICONO
          headerShown:false, // HACE QUE EL HEADER CON EL NOMBRE NO SE MUESTRE
        }}
         />
        <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
      </Tab.Navigator>
  );
}