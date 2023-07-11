import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, FlatList, StyleSheet, ScrollView } from 'react-native';
import Accordion from '../components/Filters/Accordion';
import CheckBoxTipoCocina from '../components/Filters/CheckBoxTipoCocina';
import CheckBoxTipoAsientos from '../components/Filters/CheckBoxTipoAsientos';
import CheckBoxTipoPrecio from '../components/Filters/CheckBoxTipoPrecio';
import CheckBoxTipoBarrio from '../components/Filters/CheckBoxTipoBarrio';

const FiltersScreen = () => {
  return(
    <ScrollView>
      <Accordion title="Cocina" content={<CheckBoxTipoCocina/>} />
      <Accordion title="Mesas" content={<CheckBoxTipoAsientos/>} />
      <Accordion title="Precio" content={<CheckBoxTipoPrecio/>} />
      <Accordion title="Barrio" content={<CheckBoxTipoBarrio/>} />
    </ScrollView>
  )

  }

export default FiltersScreen;
