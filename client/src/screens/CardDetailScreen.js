import React, { useEffect, useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Para el icono de las estrellas
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantById } from '../redux/actions';

const CardDetailScreen = ({ route }) => {

  const [isSaved, setIsSaved] = useState(false); // Estado para controlar si el bar está guardado o no
  const [rating, setRating] = useState(0); // Estado para guardar la calificación

  const restaurantDetail = useSelector(state => state.restaurantDetail)
  const dispatch = useDispatch();
  const { id } = route.params;

  useEffect(()=>{
    dispatch(getRestaurantById(id))
  },[dispatch, id])

  // Función para guardar el bar
  const handleSaveBar = () => {
    setIsSaved(true);
    // Aquí puedes guardar el bar en tu base de datos o almacenamiento local si lo necesitas
  };

  // Función para manejar el evento de reserva
  const handleReserve = () => {
    // Aquí puedes implementar la lógica para hacer la reserva
  };

  // Función para manejar el cambio en la calificación
  const handleRatingChange = (ratingValue) => {
    setRating(ratingValue);
    // Aquí puedes guardar la calificación en tu base de datos o almacenamiento local si lo necesitas
  };

  // Función para renderizar las estrellas
  const renderStars = () => {
    const starIcons = [];

    for (let i = 1; i <= 5; i++) {
      const starIconName = i <= rating ? 'star' : 'star-o'; // Usamos 'star' si el índice es menor o igual a la calificación actual, de lo contrario, 'star-o' (estrella vacía)
      starIcons.push(
        <TouchableOpacity key={i} onPress={() => handleRatingChange(i)}>
          <FontAwesome name={starIconName} size={30} color="#FFD700" />
        </TouchableOpacity>
      );
    }

    return starIcons;
  };

  return (
    <View style={styles.container}>
        <Image source={{ uri: restaurantDetail.image }} style={styles.image} />
      <Text style={styles.name}>{restaurantDetail.name}</Text>
      <Text style={styles.location}>{restaurantDetail.address}</Text>
      <Text style={styles.price}>Precio: {restaurantDetail.averagePrice}</Text>
      <View style={styles.starsContainer}>{renderStars()}</View>
      <Button title="Reservar" onPress={handleReserve} />
      {!isSaved ? (
        <Button title="Guardar bar" onPress={handleSaveBar} />
      ) : (
        <Text style={styles.savedText}>¡Bar guardado!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200, // Ajusta la altura según tus necesidades
    resizeMode: 'cover', // Puedes ajustar la propiedad resizeMode según tus preferencias
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  location: {
    fontSize: 18,
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    marginBottom: 10,
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  savedText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 10,
  },
});

export default CardDetailScreen;
