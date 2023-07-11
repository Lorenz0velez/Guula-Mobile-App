import React, {useState} from 'react';
import { Text, StyleSheet, View} from 'react-native';
import {CheckBox} from 'react-native-elements';


const arrayAsientos = [
    {title:'Mesas adentro'},
    {title:'Al aire libre'},
    {title:'Mesas planta alta'},
    {title:'Mesas con vista turistica'},
    {title:'Mesa cerca DJ'},
    {title:'Mesas VIP'},
    {title:'mmmmmmmmmmessi'},
]

function CheckBoxTipoAsientos() {
    const [checkedItems, setCheckedItems] = useState({});

    const toggleCheckbox = (index) => {
        setCheckedItems((prevCheckedItems) => ({
          ...prevCheckedItems,
          [index]: !prevCheckedItems[index],
        }));
      };
    return (
      <View>
        {arrayAsientos.map((asiento, index) => {
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
            title={asiento.title}
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

export default CheckBoxTipoAsientos;