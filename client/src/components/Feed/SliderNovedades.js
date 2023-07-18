import React, { useEffect } from "react";
import { SafeAreaView, FlatList, StyleSheet, Text } from "react-native";
import Card from "./Card";
import { getAllRestaurants } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function SliderNovedades() {

  const dispatch = useDispatch();
  const allRestaurants = useSelector(state=>state.allRestaurants);
  useEffect(()=>{
    // console.log('allRestaurants from component: ',allRestaurants)
    dispatch(getAllRestaurants());
},[]);

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.textSubTitles}>NOVEDADES</Text> 
        <FlatList 
          data={allRestaurants}
          renderItem={(bar) =>( 
            <Card
              // image={bar.item.image}
              image={'https://hips.hearstapps.com/hmg-prod/images/dilek-s-elle-gourmet-641d55b1626b8.jpg?crop=0.918xw:0.690xh;0.0820xw,0.232xh&resize=1200:*'}
              name={bar.item.name}
              averagePrice={bar.item.averagePrice}
              rating={bar.item.rating}
              id={bar.item.id}
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
  