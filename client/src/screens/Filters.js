import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Filters(){
    return(
        <View style={styles.profile} >
            <Text>Mi Filters</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    profile:{
        backgroundColor:'green',
    }
})