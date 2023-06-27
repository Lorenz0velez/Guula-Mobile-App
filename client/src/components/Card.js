import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Card = ({ image, name, price, rating, onSave }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>Precio: {price}</Text>
      <Text style={styles.rating}>Rating: {rating}</Text>
      {/* <TouchableOpacity style={styles.button} onPress={onSave}> */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    marginTop:10,
    elevation: 2,
    minHeight:320,
    minWidth:320,
    marginHorizontal:10,

    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 2,
    //   height: 3,
    // },
    // shadowOpacity: 1,
    // shadowRadius: 2,
    // elevation: 2,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#FFA500',
    borderRadius: 5,
    padding: 10,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default Card;
