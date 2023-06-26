import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import { LinearGradient } from "expo-linear-gradient";
import FilterButtons from "../components/FilterButtons";
import Card from "../components/Card";



export default function FeedScreen(){


    const array = [];

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
            <Text style={styles.textSubTitles}>NOVEDADES</Text>
            <View>
            <Card
            image={'https://media.revistaad.es/photos/620cbc911db9f1841aebdf15/16:9/pass/portada.jpg'} 
            name={'Tori Bar'}
            price={'$5250'}
            rating={4.8}
            // onSave={()=> name.push(array)}
            />
            <Card
            image={'https://www.shutterstock.com/image-photo/outdoor-empty-coffee-restaurant-terrace-260nw-1884717178.jpg'} 
            name={'Pepecito Bar'}
            price={'$5250'}
            rating={4.8}
            // onSave={()=> name.push(array)}
            />
            <Card
            image={'https://media.revistaad.es/photos/620cbc911db9f1841aebdf15/16:9/pass/portada.jpg'} 
            name={'Guulas Restourant'}
            price={'$5250'}
            rating={4.8}
            // onSave={()=> name.push(array)}
            />
            <Card
            image={'https://www.shutterstock.com/image-photo/outdoor-empty-coffee-restaurant-terrace-260nw-1884717178.jpg'} 
            name={'Pepecito Bar'}
            price={'$5250'}
            rating={4.8}
            // onSave={()=> name.push(array)}
            />
            </View>
            
        </ScrollView>
    )
}


const styles = StyleSheet.create({
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
    }
    
    
})