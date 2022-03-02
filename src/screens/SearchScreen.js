import React, {useState} from "react";
import { View, Text, Image } from "react-native";
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
            <Image
                style = {{ width: 100, height: 100, borderRadius: 18 }}
                source={{
                uri: 'https://s3-media1.fl.yelpcdn.com/bphoto/vp536ivd0pgr9AuYjqvfUw/o.jpg',
                }}
            />           
        </View>
    )
}