import React from "react";
import { SafeAreaView, FlatList, StyleSheet, Text } from "react-native";
import bares from "../../../bares";
import Card from "./Card";

export default function SliderDescuento() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.textSubTitles}>EN DESCUENTO</Text> 
        <FlatList
          data={bares}
          renderItem={({ item }) => (
            <Card
              image={item.imagen}
              name={item.nombre}
              price={`$${item.precio}`}
              rating={item.puntaje}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
        />
      </SafeAreaView>
    );
  }


  const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        height:370,
        alignItems:'center'
    },
    textSubTitles:{
      fontSize:15,
      alignSelf:"center",
      margin:12,
      padding:12,
      fontWeight:'bold',
      color:'#333333'
  },
  })
  