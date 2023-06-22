import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function MenuBotonItem({ text, onPress }){
    return(
        <TouchableOpacity
         style={styles.buttonContainer}
         onPress={ onPress }
          >
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor:'red',
        marginBottom:15,
        padding:15,
        borderRadius:10,
    },
    
})