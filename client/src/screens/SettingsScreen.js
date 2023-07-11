import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, Modal, TextInput, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  const [addresses, setAddresses] = useState([
    { id: '1', address: 'Dirección 1' },
    { id: '2', address: 'Dirección 2' },
    { id: '3', address: 'Dirección 3' },
  ]);

  const [savedItems, setSavedItems] = useState([
    { id: '1', item: 'Guardado 1' },
    { id: '2', item: 'Guardado 2' },
    { id: '3', item: 'Guardado 3' },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newAddress, setNewAddress] = useState('');

  const handleAddAddress = () => {
    if (newAddress.trim() !== '') {
      setAddresses(prevAddresses => [
        ...prevAddresses,
        { id: (prevAddresses.length + 1).toString(), address: newAddress },
      ]);
      setNewAddress('');
      setModalVisible(false);
    }
  };

  const handleDeleteAddress = id => {
    setAddresses(prevAddresses => prevAddresses.filter(address => address.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item.address}</Text>
      <Button title="Eliminar" onPress={() => handleDeleteAddress(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Mis Direcciones</Text>
      <FlatList
        data={addresses}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonLabel}>Agregar Dirección</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Mis Guardados</Text>
      <FlatList
        data={savedItems}
        renderItem={({ item }) => <Text>{item.item}</Text>}
        keyExtractor={item => item.id}
      />

      <Text style={styles.sectionTitle}>Mis Reservados</Text>
      {/* Render your reserved items here */}

      <Text style={styles.sectionTitle}>Mis Calificaciones</Text>
      {/* Render your ratings here */}

      {/* Modal for adding new address */}
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nueva dirección"
            value={newAddress}
            onChangeText={text => setNewAddress(text)}
          />
          <Button title="Agregar" onPress={handleAddAddress} />
          <Button title="Cancelar" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 20,
  },
  addButtonLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
});

export default SettingsScreen;
