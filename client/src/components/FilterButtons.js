import React from "react";
import { Text, View, StyleSheet, ScrollView, Button, TouchableOpacity } from "react-native";
import SearchBar from "./SearchBar";
import { LinearGradient } from "expo-linear-gradient";
import DropDownPicker from 'react-native-dropdown-picker';

export default function FilterButtons({text, onPress}){
        // <TouchableOpacity
        // onPress={onPress}
        // >
        //     <Text>{text}</Text>
        // </TouchableOpacity>
        
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
}
    


const styles = StyleSheet.create({
    dropdowns:{

    },
    dropdown_menu:{

    },
    dropdown:{

    },
    button:{

    }

})