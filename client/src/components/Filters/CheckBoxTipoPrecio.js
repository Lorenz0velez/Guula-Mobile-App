import React, {useState} from 'react';
import { Text, StyleSheet, View} from 'react-native';
import {CheckBox} from 'react-native-elements';


const arrayPrecio = [
    {title:'$'},
    {title:'$$'},
    {title:'$$$'},
    {title:'$$$$'},
    {title:'$$$$$'},
]

function CheckBoxTipoPrecio() {
    const [checkedItems, setCheckedItems] = useState({});

    const toggleCheckbox = (index) => {
        setCheckedItems((prevCheckedItems) => ({
          ...prevCheckedItems,
          [index]: !prevCheckedItems[index],
        }));
      };
    return (
      <View>
        {arrayPrecio.map((precio, index) => {
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
            title={precio.title}
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

export default CheckBoxTipoPrecio;