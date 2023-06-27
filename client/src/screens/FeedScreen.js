import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/Search/SearchBar";
import { LinearGradient } from "expo-linear-gradient";
import Card from "../components/Feed/Card";
import Slider from "../components/Feed/Slider";
import bares from "../../bares";



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
            <View style={styles.slider} >
                <Slider/>
            </View>

            <View>
            {
                bares.map((bar)=>{
                    return(
                        <Card
                        image={'https://www.shutterstock.com/image-photo/outdoor-empty-coffee-restaurant-terrace-260nw-1884717178.jpg'} 
                        name={bar.nombre}
                        price={'$999'}
                        rating={bar.puntaje}
                        key={bar.id}
                        /> 
                    )
                })
            }
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
    },
})