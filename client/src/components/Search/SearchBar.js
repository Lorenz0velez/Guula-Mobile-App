import React from "react";
import { Text, View, StyleSheet, ScrollView, TextInput, SafeAreaView } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';


export default function SearchBar(){

    // VIDEO FROM: https://www.youtube.com/watch?v=Q4S9M9rJAxk

    return(
        <SafeAreaView style={styles.searchContainer} >
            <TextInput 
            placeholder="Search"
            clearButtonMode="always"
            style={styles.searchBar}
            autoCapitalize="none"
            autoCorrect={false}
             />
             <Icon name={'search-outline'} size={24} color="#888" style={styles.searchIcon}/>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    searchBar:{
        flex: 1,
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 8,
        color: '#333',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#ccc',
        flex: 1,
        marginLeft: 10,
        paddingHorizontal: 5,
      },
    searchIcon:{
            marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 8,
        color: '#333',
      },
})