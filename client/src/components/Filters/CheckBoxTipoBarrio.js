import React, {useState} from 'react';
import { Text, StyleSheet, View} from 'react-native';
import {CheckBox} from 'react-native-elements';


const arrayBarrio = [
    {title:'Poeta Lugones'},
    {title:'Arguello'},
    {title:'Cerro de las Rosas'},
    {title:'Marquez de Sobremonte'},
    {title:'Los Paraisos'},
    {title:'Alto Verde'},
    {title:'La France'},
    {title:'Alta Cordoba'},
    {title:'Nueva Cordoba'},
]

function CheckBoxTipoBarrio() {
    const [checkedItems, setCheckedItems] = useState({});

    const toggleCheckbox = (index) => {
        setCheckedItems((prevCheckedItems) => ({
          ...prevCheckedItems,
          [index]: !prevCheckedItems[index],
        }));
      };
    return (
      <View>
        {arrayBarrio.map((barrio, index) => {
        const isChecked = checkedItems[index] || false;

        return (
          <CheckBox
            key={index}
            checked={isChecked}
            onPress={() => toggleCheckbox(index)}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checkedColor="red"
            title={barrio.title}
          />
        );
      })}
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});

export default CheckBoxTipoBarrio;