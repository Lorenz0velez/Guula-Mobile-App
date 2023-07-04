import * as React from 'react';
import Filters from '../screens/Filters'
import SearchScreen from '../screens/SearchScreen';
import { createStackNavigator } from '@react-navigation/stack';

const SearchScreenStack = createStackNavigator();

export default function MySearchScreenStack(){
  return(
    <SearchScreenStack.Navigator
    initialRouteName='SearchView'
    >
      <SearchScreenStack.Screen
      name='SearchView'
      component={SearchScreen}
      options={{
        headerShown:false, // HACE QUE EL HEADER CON EL NOMBRE NO SE MUESTRE
      }}
      />
      <SearchScreenStack.Screen
      name='Filters'
      component={Filters}
      />
    </SearchScreenStack.Navigator>
  )
}