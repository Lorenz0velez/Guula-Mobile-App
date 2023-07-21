import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const SearchScreenMapPlacesAPI = () => {

  const [currentLocation, setCurrentLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if(status === 'granted'){
            console.log('ubicacion concedida. Status: ', status);
        } else if (status !== 'granted') {
          console.log('Permiso de ubicación denegado.');
          return;
        }

        const location = await Location.getCurrentPositionAsync();
        const { latitude, longitude } = location.coords;
        setCurrentLocation({ latitude, longitude });
        if(location){
             console.log('location: ', location);
             console.log('currentLocation: ', currentLocation);
        }

      } catch (error) {

        console.log('Error al obtener la ubicación', error);
      }
    })();
  }, []);

  const handleSearch = () => {
    // Lógica para hacer una solicitud a la API de Google Places con la búsqueda de places usando searchQuery
    // Puedes usar fetch o axios para hacer la solicitud a la API de Google Places con tu API key
    // Una vez que recibas los resultados, puedes establecerlos en el estado con setPlaces
  };

  return (
    <View style={styles.container}>

      {currentLocation && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {currentLocation && (
            <Marker coordinate={{ latitude: currentLocation.latitude, longitude: currentLocation.longitude }} />
          )}
          {/* Mostrar los marcadores de los places en el mapa utilizando el estado "places" */}
          {/* Puedes utilizar un bucle para renderizar los marcadores */}
        </MapView>
      )}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar lugar..."
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Buscar</Text>
        </TouchableOpacity>
      </View>
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
  searchContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    marginRight: 8,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 8,
  },
  searchButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});


export default SearchScreenMapPlacesAPI;
