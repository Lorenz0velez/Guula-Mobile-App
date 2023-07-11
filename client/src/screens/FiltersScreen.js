import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, FlatList, StyleSheet, ScrollView } from 'react-native';
import Accordion from '../components/Filters/Accordion';
import CheckBoxTipoCocina from '../components/Filters/CheckBoxTipoCocina';
import CheckBoxTipoAsientos from '../components/Filters/CheckBoxTipoAsientos';
import CheckBoxTipoPrecio from '../components/Filters/CheckBoxTipoPrecio';
import CheckBoxTipoBarrio from '../components/Filters/CheckBoxTipoBarrio';
import BottonAplicar from '../components/Filters/BottonAplicar';

// const FiltersScreen = () => {
//   return(
//     <ScrollView>
//       <Accordion title="Cocina" content={<CheckBoxTipoCocina/>} />
//       <Accordion title="Mesas" content={<CheckBoxTipoAsientos/>} />
//       <Accordion title="Precio" content={<CheckBoxTipoPrecio/>} />
//       <Accordion title="Barrio" content={<CheckBoxTipoBarrio/>} />
//       <View>
//         <BottonAplicar/>
//       </View>
//     </ScrollView>
//   )

//   }

// export default FiltersScreen;
const FiltersScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Accordion title="Cocina" content={<CheckBoxTipoCocina />} />
        <Accordion title="Mesas" content={<CheckBoxTipoAsientos />} />
        <Accordion title="Precio" content={<CheckBoxTipoPrecio />} />
        <Accordion title="Barrio" content={<CheckBoxTipoBarrio />} />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <BottonAplicar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: 'gray',
    // height:100,
  },
});

export default FiltersScreen;

