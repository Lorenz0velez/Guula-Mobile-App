import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Button, SafeAreaView } from "react-native";
import MapView from "react-native-maps";

export default function MapYoutubeTest(){
    return(
        <View>
            <MapView
            style={styles.map}
            
            />
        </View>
    )
}

const styles = StyleSheet.create({
    map:{
        width:'100%',
        height:'100%'
    }
})