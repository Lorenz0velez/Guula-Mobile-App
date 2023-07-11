import React, {useState} from 'react';
import { Text, StyleSheet, View, TouchableOpacity} from 'react-native';


function BottonAplicar() {
    
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText} >APLICAR</Text>
        </TouchableOpacity>
      </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
    //   alignItems: 'center',
    //   width:300,
    //   height:70,

    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  

export default BottonAplicar;