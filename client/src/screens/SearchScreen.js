import React from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Button } from "react-native";
import SearchBar from "../components/Search/SearchBar";
import bares from '../../bares';
import SearchCard from "../components/Search/SearchCard";
import { useNavigation } from "@react-navigation/native";

export default function SearchScreen(){

    const navigation = useNavigation();


    return(
        <View style={styles.searchScreenContainer} >
            <View style={styles.searchBar} >
            <SearchBar/>
            </View>
            {/* <TouchableOpacity style={styles.button}> */}
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('FiltersScreen')}>
                <Text style={styles.buttonText} >FILTERS</Text>
            </TouchableOpacity>
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
    },
    button: {
        backgroundColor: '#e9e9e9',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 2,
        elevation: 2,
      },
      buttonText: {
        color: '#333',
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical:10
      },
})