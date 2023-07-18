import React, { useEffect } from "react";
import { SafeAreaView, FlatList, StyleSheet, Text } from "react-native";
import bares from "../../../bares";
import Card from "./Card";
import { getAllCountries, getAllRestaurants, getBooks } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function SliderNovedades() {

  const dispatch = useDispatch();
  const allRestaurants = useSelector(state=>state.allRestaurants);
  useEffect(()=>{
    console.log('allRestaurants from component: ',allRestaurants)
    dispatch(getAllCountries());
},[]);

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.textSubTitles}>NOVEDADES</Text> 
        <FlatList 
          data={allRestaurants}
          renderItem={(bar) =>( 
            <Card
              image={bar.item.image}
              name={bar.item.name}
              price={bar.item.price}
              rating={bar.item.rating}
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
  