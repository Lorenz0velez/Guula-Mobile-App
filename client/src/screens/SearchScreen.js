import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Button, SafeAreaView } from "react-native";
import SearchBar from "../components/Search/SearchBar";
import bares from '../../bares';
import SearchCard from "../components/Search/SearchCard";
import { useNavigation } from "@react-navigation/native";
import MapScreenSearch from "../components/Search/MapSearch";
import SearchScreenMapPlacesAPI from "../components/Search/MapSearchScreenChatGPT";
import MapYoutubeTest from "../components/Search/MapYoutubeTest";


export default function SearchScreen(){

    const navigation = useNavigation();
    const [mapLoaded, setMapLoaded] = useState(false);
  
    useEffect(() => {
      // Aquí simulamos un tiempo de carga del mapa (puedes ajustarlo según tus necesidades)
      setTimeout(() => {
        setMapLoaded(true);
      }, 1000); // Esperamos 1 segundo para cargar el mapa
    }, []);
  


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

            {/* <SafeAreaView style={{ marginHorizontal: 5 }}>
        {mapLoaded && <MapSearchScreen style={{ height: 800, width: '100%' }} />}
      </SafeAreaView> */}
      {/* <SafeAreaView style={{ marginHorizontal: 5 }}>
  <MapScreenSearch />
</SafeAreaView> */}
        </View>
    )
}

// export default function SearchScreen(){

//     return(
//         <View>
//             <MapYoutubeTest/>
//         </View>
//     )
// }



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