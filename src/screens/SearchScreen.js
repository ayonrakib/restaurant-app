import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from '../api/yelp'

export default function SearchScreen(){

    const [term, setTerm] = useState('')
    const [results, setResults] = useState([]);

    return (
        <View>
            <SearchBar term = {term} onTermChange = {(newTerm) => setTerm(newTerm)} onTermSubmit = {() => console.log("checking for restaurant!")}/>
            <Text>
                The search string is: {term}
            </Text>
            <Text>
                Screen!
            </Text>
        </View>
    )
}