import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/Search/SearchBar";
import bares from '../../bares';
import SearchCard from "../components/Search/SearchCard";

export default function SearchScreen(){
    return(
        <View style={styles.searchScreenContainer} >
            <View style={styles.searchBar} >
            <SearchBar/>
            </View>
            <ScrollView style={styles.scrollViewBarNames} >
                {
                    bares.map((bar)=>{
                        return(
                            <SearchCard
                            image={'https://www.shutterstock.com/image-photo/outdoor-empty-coffee-restaurant-terrace-260nw-1884717178.jpg'} 
                            name={bar.nombre}
                            price={'$999'}
                            rating={bar.puntaje}
                            foodType={'Arabe'}
                            key={bar.id}
                            />
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    searchScreenContainer:{
        backgroundColor:'grey'
    },
    searchBar:{
        height:70,
    },
    scrollViewBarNames:{
        backgroundColor:'white',
        marginBottom:70,
    }
})