import React, {useState} from 'react';
import { Text, StyleSheet, View} from 'react-native';
import {CheckBox} from 'react-native-elements';


const arrayCocina = [
    {title:'Arabe'},
    {title:'Mariscos'},
    {title:'Asado'},
    {title:'Lomitos'},
    {title:'Empanadas'},
    {title:'Pizzas'},
    {title:'Sushi'},
]

function CheckBoxTipoCocina() {
    const [checkedItems, setCheckedItems] = useState({});

    const toggleCheckbox = (index) => {
        setCheckedItems((prevCheckedItems) => ({
          ...prevCheckedItems,
          [index]: !prevCheckedItems[index],
        }));
      };
    return (
      <View>
        {arrayCocina.map((cocina, index) => {
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
            title={cocina.title}
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

export default CheckBoxTipoCocina;