import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const ProfileScreen = () => {
  const profileData = {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    orders: 5,
    coupons: 2,
    favorites: 10,
    preferences: 'Italian, Mexican, Vegetarian',
    profileImage: 'https://holatelcel.com/wp-content/uploads/2020/09/instagram-foto-de-perfil-4.jpg', // Ruta a tu imagen de perfil
  };

//   const handleEditProfile = () => {
//     // Lógica para navegar a la pantalla de edición de perfil
//   };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={profileData.profileImage} style={styles.profileImage} />
        <Text style={styles.name}>{profileData.name}</Text>
        <Text style={styles.email}>{profileData.email}</Text>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{profileData.orders}</Text>
          <Text style={styles.statLabel}>Pedidos</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{profileData.coupons}</Text>
          <Text style={styles.statLabel}>Cupones</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{profileData.favorites}</Text>
          <Text style={styles.statLabel}>Favoritos</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{profileData.preferences}</Text>
          <Text style={styles.statLabel}>Preferencias</Text>
        </View>
      </View>
      {/* <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}> */}
      <TouchableOpacity style={styles.editButton} >
        <Text style={styles.editButtonText}>Editar perfil</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: 'gray',
  },
  statsContainer: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 30,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 16,
    color: 'gray',
  },
  editButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  editButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default ProfileScreen;