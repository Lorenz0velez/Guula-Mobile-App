import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import SearchBar from "./SearchBar";
import { LinearGradient } from "expo-linear-gradient";
import FilterButtons from "./FilterButtons";

export default function Feed(){
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
            <SearchBar/>
            <FilterButtons/>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
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
    }
    
    
})