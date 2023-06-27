import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SearchCard = ({ image, name, price, rating, foodType }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.rating}>{rating}</Text>
        <Text style={styles.foodType}>{foodType}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    color: 'gold',
    marginBottom: 5,
  },
  foodType: {
    fontSize: 14,
    color: '#888',
  },
});

export default SearchCard;
