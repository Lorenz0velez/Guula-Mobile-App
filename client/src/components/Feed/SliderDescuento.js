import React, { useEffect } from "react";
import { SafeAreaView, FlatList, StyleSheet, Text } from "react-native";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getAllRestaurants } from "../../redux/actions";

export default function SliderDescuento() {

  const dispatch = useDispatch();
  const allRestaurants = useSelector(state=>state.allRestaurants);
  useEffect(()=>{
    // console.log('allRestaurants from component: ',allRestaurants)
    dispatch(getAllRestaurants());
},[]);

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.textSubTitles}>EN DESCUENTO</Text> 
        
        <FlatList 
          data={allRestaurants}
          renderItem={(bar) =>( 
            <Card
              image={bar.item.image}
              // image={'https://cdn.pixabay.com/photo/2013/11/12/01/29/bar-209148_640.jpg'}
              name={bar.item.name}
              averagePrice={bar.item.averagePrice}
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
  