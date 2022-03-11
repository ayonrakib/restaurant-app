import React, {useState} from "react";
import { View, Text, Image } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import Results from "../components/Results";

export default function SearchScreen(){
    console.log("came in searchscreen component!")
    const [term, setTerm] = useState('')
    const [errorInSearchingRestaurants, results, searchApi] = useResults();
    const [restaurants, SetRestaurants] = useState([]);

    const filterResultsByPrice = (price) => {
        // price === "$" || "$$" || "$$$"
    }

    // console.log("updated restaurant state in searchscreen method: ",restaurant)

    // 1. restaurants = list of restaurant objects
    // 2. restaurantJSXList empty list
    // 3. restaurants er proti ta restaurant object er jonno:
    //      3.1. restaurantJSXList e push restaurant object er name key er value string akare
    // 4. restaurantJSXList ke ekta View tag diye enclose korbo
    // 5. restaurantJSXList er value return e boshabo
    let restaurantJSXList = []
    for(let index in restaurants){
        // console.log("name of the current restaurant is: ",restaurants[index].name)
        restaurantJSXList.push(
            <View>
                <Text key={Math.random()}>{restaurants[index].name } {"\n"}</Text> 
                <Image
                    style = {{ width: 100, height: 100, borderRadius: 18 }}
                    source={{
                    uri: restaurants[index].image_url,
                    }}
                />
            </View>
        
        
        
        )
    }
    // console.log("restaurantJSXList is: ",restaurantJSXList)
    return (
        <View>
            <SearchBar 
                term = {term} 
                onTermChange = {setTerm} 
                onTermSubmit = {() => searchApi(term, SetRestaurants)}
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
            <Text>
                 {restaurantJSXList}
            </Text>  
        </View>
    )
}