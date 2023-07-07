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

            <View style={styles.searchAndButtonContainer} >

            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('FiltersScreen')}>
                <Text style={styles.buttonText} >FILTRAR</Text>
            </TouchableOpacity>

            <View style={styles.searchBar} >
            <SearchBar/>
            </View>

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
    },
    searchBar:{
        height:80,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 4,
        flex: 1,
        marginLeft: 10,
        paddingHorizontal: 5,
    },
    scrollViewBarNames:{
        backgroundColor:'white',
        marginBottom:70,
    },
    searchAndButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8,
      },
    button: {
        width: 100,
        backgroundColor: '#4da6ff',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 12,
      },
      buttonText: {
        color: '#333',
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical:10
      },
})