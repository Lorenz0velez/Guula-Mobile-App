import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FeedScreen from '../screens/FeedScreen';
import CardDetailScreen from '../screens/CardDetailScreen';

const FeedStackNavigation = createStackNavigator();

export default function MyFeedStack(){
  return(
    <FeedStackNavigation.Navigator
    initialRouteName='FeedView'
    >
      <FeedStackNavigation.Screen
      name='FeedView'
      component={FeedScreen}
      options={{
        headerShown:false, // HACE QUE EL HEADER CON EL NOMBRE NO SE MUESTRE
      }}
      />
      <FeedStackNavigation.Screen
      name='CardDetailScreen'
      component={CardDetailScreen}
      />
    </FeedStackNavigation.Navigator>
  )
}