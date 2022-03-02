import React, {useState} from "react";
import { View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import Results from "../components/Results";

export default function SearchScreen(){

    const [term, setTerm] = useState('')
    const [errorInSearchingRestaurants, results, searchApi] = useResults();

    const filterResultsByPrice = (price) => {
        // price === "$" || "$$" || "$$$"
    }
 
    return (
        <View>
            <SearchBar 
                term = {term} 
                onTermChange = {setTerm} 
                onTermSubmit = {() => searchApi(term)}
            />
            <Text>
                {errorInSearchingRestaurants}
            </Text>
            <Text>
                We have found {results.length} results!
            </Text>
            <Results title = "Cost Effective"/>
            <Results title = "Cheap"/>
            <Results title = "Costly"/>
        </View>
    )
}