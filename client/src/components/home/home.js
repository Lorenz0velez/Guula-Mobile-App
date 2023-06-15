import React from "react";
import bares from '../../../bares';

import { View, ScrollView, Text, StyleSheet, Image } from "react-native";


const Home = () => {
    return (
        <ScrollView 
        data={bares}
        ItemSeparatorComponent={()=> <Text> </Text>}
        >
            

        <Text>HOLA ESTA ES MI APLICACION</Text>
                {
                    bares.map((bar)=>( 
                        <View key={bar.id} style={styles.container}>
                            <Image source={{uri: bar.imagen}}/>
                            <Text style={styles.nameD} >{bar.nombre}</Text>
                            <Text>{bar.direccion}</Text>

                            <View style={styles.stats}>
                            <Text>tipo de comida:</Text>
                            <Text> rating</Text>
                            </View>

                            <View style={styles.stats}>
                            <Text>{bar.tipo_comida}</Text>
                            <Text>{bar.puntaje}</Text>
                            </View>
                            <Text style={{alignSelf: 'flex-end'}}>{bar.id}</Text>
                        </View>
                    ))
                }
            </ScrollView>
    )}


    const styles = StyleSheet.create({
        container:{
            padding:20, 
            paddingBottom:5, 
            paddingTop: 5,
            
            margin: 5,
            backgroundColor: 'beige',
            borderRadius: 10,
        },
        stats:{
            flexDirection:'row',
            justifyContent: 'space-around'
        },
        nameD:{
            color: 'blue',
             backgroundColor:'red',
             alignSelf: 'flex-start',
             padding:4,
        },
        image:{

        }
    });

    export default Home;