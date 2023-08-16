import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { View, StyleSheet, Text } from 'react-native';

const MapScreenSearch22 = () => {
    const [initialRegion, setInitialRegion] = useState(null);
  
    const getCurrentLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.log('Permiso de ubicación denegado.');
          return;
        }
  
        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
  
        setInitialRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      } catch (error) {
        console.error('Error al obtener la ubicación: ', error);
      }
    };
  
    useEffect(() => {
      getCurrentLocation();
    }, []);
  
    if (!initialRegion) {
      return <Text>Cargando...</Text>;
    }
  
    return (
      <View style={styles.container}>
        <MapView style={styles.map} initialRegion={initialRegion}>
          <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} title="Ubicación 1" />
          <Marker coordinate={{ latitude: 37.78945, longitude: -122.4328 }} title="Ubicación 2" />
        </MapView>
      </View>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreenSearch22;


// Error using newLatLngBounds(LatLngBounds, int): Map size can't be 0.
//  Most likely, layout has not yet occured for the map view.
//  Either wait until layout has occured or use newLatLngBounds(LatLngBounds, 
//     int, int, int) which allows you to specify the maps's dimensions.

// if(!initialRegion){
//     console.log('falta region inicial')
//     return <Text>Cargando...</Text>;
//   }
  
//   if(!mapReady){
//     console.log('el mapa no esta listo')
//     return <Text>Cargando...</Text>;
//   }