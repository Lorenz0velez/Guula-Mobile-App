import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Card = ({ image, name, rating, onSave, averagePrice, id }) => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
      onPress={()=>navigation.navigate( 'CardDetailScreen', {id:id} )}
      >
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>Precio: {averagePrice}</Text>
      <Text style={styles.rating}>Rating: {rating}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECE8E1',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    marginTop:10,
    elevation: 2,
    maxHeight:250,
    maxWidth:360,
    minHeight:250,
    minWidth:360,
    marginHorizontal:10,
  },
  image: {
    width: '100%',
    height: 130,
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
    //
    // marginBottom:00,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default Card;
