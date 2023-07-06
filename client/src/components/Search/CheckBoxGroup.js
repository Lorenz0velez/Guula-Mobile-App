import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function CheckBoxGroup(){

    const [restaurants, setRestaurants] = useState([]);

    const options = [
        "pepecito", "wort", "El Candil", "Mac Donalds"
    ]

    function pickRestaurants(selectedRestaurants) {
        if (restaurants.includes(selectedRestaurants)) {
          setRestaurants(restaurants.filter(bar => bar !== selectedRestaurants));
          return;
        }
        setRestaurants(restaurants.concat(selectedRestaurants));
      }
      
      return (
        <View style={styles.container}>
          <Text style={styles.title}>FILTER RESTAURANTS AS YOU PREFER</Text>
          <View style={styles.options}>
            {options.map((option) => {
              return (
                <View key={option} style={styles.restaurants}>
                  <TouchableOpacity
                    style={styles.checkBox}
                    onPress={() => pickRestaurants(option)}
                  >
                    {restaurants.includes(option) && (
                      <Text style={styles.check}>X</Text>
                    )}
                  </TouchableOpacity>
                  <Text style={styles.restaurantName}>{option}</Text>
                </View>
              );
            })}
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    check:{
        alignSelf:'center'
    },
    restaurantName:{
        textTransform:'capitalize',
        fontSize:16
    },
    checkBox:{
        width:25,
        height:25,
        borderWidth:2,
        borderColor:'green',
        marginRight:5,
        justifyContent: 'center', // Agregar esta línea
        alignItems: 'center', // Agregar esta línea
    },
    restaurants:{
        flexDirection:'row',
        marginVertical:10,
    },
    options:{
        alignSelf:'flex-start',
        marginLeft:50,
    },
    title:{
        fontSize:18,
        fontWeight:'600'
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'grey'
    }
})


// return(
//     <View style={styles.container} >
//         <Text style={styles.title} >FILTER RESTAURANTS AS YOU PREFER</Text>
//         <View style={styles.options} >
//             {
//                 options.map((option)=>{
//                     return(
//                     <View key={option} style={styles.restaurants} >
//                         <TouchableOpacity style={styles.checkBox} onPress={()=> pickRestaurants(option)} >
//                             {
//                                 restaurants.includes(option) && (
//                                     <Text style={styles.check} >X</Text>
//                                 )
//                             }
//                         </TouchableOpacity>
//                         <Text style={styles.restaurantName} >{option}</Text>
//                     </View>
//                     )
//                 })
//             }
//         </View>
//     </View>
// )