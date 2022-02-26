import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

export default function SearchScreen(){
    return (
        <View>
            <SearchBar/>
            <Text>
                Screen!
            </Text>
        </View>
    )
}