import React from "react";
import { Text, View, StyleSheet, ScrollView, TextInput, SafeAreaView } from "react-native";

export default function SearchBar(){

    // VIDEO FROM: https://www.youtube.com/watch?v=Q4S9M9rJAxk

    return(
        <SafeAreaView style={{flex:1,marginTop:10, marginHorizontal:20}} >
            <TextInput 
            placeholder="Search"
            clearButtonMode="always"
            style={styles.searchBar}
            autoCapitalize="none"
            autoCorrect={false}
             />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    searchBar:{
        paddingHorizontal:20,
        paddingVertical:10,
        borderColor:'#ccc',
        borderWidth:1,
        borderRadius:8,
    }
})