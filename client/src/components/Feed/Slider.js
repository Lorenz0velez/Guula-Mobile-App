import React from "react";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import bares from "../../../bares";
import Card from "./Card";

export default function Slider() {
    return (
      <SafeAreaView style={styles.container}>
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
        height:350,
        alignItems:'center'
    },
  })
  