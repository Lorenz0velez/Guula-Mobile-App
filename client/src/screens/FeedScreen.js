import React, { useEffect } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/Search/SearchBar";
import { LinearGradient } from "expo-linear-gradient";
// import bares from "../../bares";
import SliderNovedades from "../components/Feed/SliderNovedades";
import SliderCercaTuyo from "../components/Feed/SliderCercaTuyo";
import SliderDescuento from "../components/Feed/SliderDescuento";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getAllRestaurants } from "../redux/actions";



export default function FeedScreen(){

    // const dispatch = useDispatch();
    // const allRestaurants = useSelector(state=>state.allRestaurants);

    // useEffect(()=>{
    //     dispatch(getAllRestaurants());
    // },[dispatch]);

    return(
        <ScrollView style={styles.feed}>
            <LinearGradient
             style={styles.containerLinearGradient} 
             colors={['red', 'orange', 'white']}
             start={{ x: 0, y: 0 }}
             end={{ x: 1, y: 0 }}
             >
            <Text style={styles.title} >Guula's Mobile App</Text>
            </LinearGradient>

            <View style={styles.SearchBarContainer} >
            <SearchBar/>
            </View>

            <View style={styles.slider} >
                <SliderNovedades/>
            </View>
            <View style={styles.slider} >
                <SliderCercaTuyo/>
            </View>
            <View style={styles.slider} >
                <SliderDescuento/>
            </View>
            
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    SearchBarContainer:{
        marginVertical:15,
        marginHorizontal:10,
        padding:5
    },
    textSubTitles:{
        fontSize:15,
        alignSelf:"center",
        margin:12,
        padding:12,
        fontWeight:'bold',
        color:'#333333'
    },
    feed:{
        backgroundColor:'white',
    },
    title:{
        fontSize:24,
        alignSelf:"center",
        margin:12,
        padding:12,
        fontWeight:'bold',
        color:'#333333',
    },
    containerLinearGradient:{
        width: '100%',
        padding: 8,
        borderRadius:10,
    },
})