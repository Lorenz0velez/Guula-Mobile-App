import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function ProfileScreen(){
    return(
        <View style={styles.profile} >
            <Text>Mi PROFILE</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    profile:{
        backgroundColor:'red',
    }
})