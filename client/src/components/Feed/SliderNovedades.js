import React from "react";
import { SafeAreaView, FlatList, StyleSheet, Text } from "react-native";
import bares from "../../../bares";
import Card from "./Card";

export default function SliderNovedades() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.textSubTitles}>NOVEDADES</Text> 
        <FlatList
          data={bares}
          renderItem={({ item }) => (
            <Card
              // image={item.imagen}
              image={'https://www.cronista.com/files/image/489/489872/6377bc64db927.png'}
              name={item.nombre}
              price={`$5000`}
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
  