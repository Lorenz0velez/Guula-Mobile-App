import React from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

export default function SearchScreen(){
    return(
        <View style={styles.profile} >
            <Text>SEARCH SCREEN</Text>
            <SearchBar/>
        </View>
    )
}


const styles = StyleSheet.create({
    profile:{
        backgroundColor:'red',
    }
})