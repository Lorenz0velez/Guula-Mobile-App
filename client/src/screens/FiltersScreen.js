import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import CheckBoxGroup from '../components/Search/CheckBoxGroup';
import Accordion from '../components/Accordion';

const FiltersScreen = () => {
  return(
    <View>
      <Accordion title="Sección 1" content="Contenido de la sección 1" />
      <Accordion title="Sección 2" content="Contenido de la sección 2" />
      <Accordion title="Sección 3" content="Contenido de la sección 3" />
    </View>
  )

  }

export default FiltersScreen;
