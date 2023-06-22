import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function SettingsScreen(){
    return(
        <View style={styles.profile} >
            <Text>Mi SETTINGS</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    profile:{
        backgroundColor:'green',
    }
})