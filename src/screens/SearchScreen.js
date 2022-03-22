import React, {useState} from "react";
import { View, Text, Image, ScrollView, FlatList } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

// 1. restaurants jsx list
// 2. restaurants er proti ta restaurant obj er jonnoL:
//      2.1. restaurantsjsx list e push korbo jsx block with restaurant name, review count and image
// 3. method get restaurants:
//      3.1. input: price, restaurant category
//      3.2. current restaurants 
//      3.3. restaurants er proti ta restaurant er jonno:
//          3.3.1. jodi current restaurant er price == input price hoy:
//              3.3.1.1. current restaurants e push restaurant er name, image, koto star and koto gula review
//      3.4. restaurant jsx banabo with text of how pricey the restaurant is and horizontal scroll view of current restaurants
//      3.5. return restaurants jsx
// 4. cheap restaurants hobe $ price er and cheap restaurant er
// 5. normal restaurants hobe $$ price er and normal restaurant er
// 6. costly restaurants hobe $$$ price er and costly restaurant er

export default function SearchScreen(){
    // console.log("came in searchscreen component!")
    const [term, setTerm] = useState('')
    const [errorInSearchingRestaurants, results, searchApi] = useResults();
    const [restaurants, SetRestaurants] = useState([]);

    // console.log("updated restaurant state in searchscreen method: ",restaurant)


    let restaurantJSXList = []
    for(let index in restaurants){
        // console.log("name of the current restaurant is: ",restaurants[index].name)
        restaurantJSXList.push(
            <View key={Math.random()} style={{marginRight:70}}>
                <Text>{restaurants[index].name } {"\n"}</Text> 
                <Image
                    style = {{ width: 100, height: 100, borderRadius: 18 }}
                    source={{
                    uri: restaurants[index].image_url,
                    }}
                />
            </View>
        )
    }

    function getRestaurants(price, restaurantCategory){
        let currentRestaurants = [];
        for(let index in restaurants){
            if(restaurants[index].price === price){
                currentRestaurants.push(
                    <View key={Math.random()} style={{marginRight: 20}}>
                        <Text style={{fontWeight:"bold"}}> {restaurants[index].name}</Text>
                        <Image
                            style={{height: 200, width: 200, borderRadius: 18}}
                            source={{
                                uri: restaurants[index].image_url
                            }}
                        />
                        <Text> {restaurants[index].rating} stars, {restaurants[index].review_count} reviews</Text>
                    </View>
                )
            }
        }
        let restaurantsJSX = 
                <ScrollView>
                    <Text >
                        {'\n'} {restaurantCategory} restaurants:  {'\n'}
                        
                    </Text>
                    <ScrollView horizontal style={{flexDirection: "row"}}>
                        {currentRestaurants}
                    </ScrollView >
                    
                </ScrollView>
        return restaurantsJSX;
    }

    let cheapRestaurants = getRestaurants("$", "cheap");
    let normalRestaurants = getRestaurants("$$", "normal");
    let costlyRestaurants = getRestaurants("$$$", "costly");


    // udemy way

    
    return (
        <ScrollView>
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
            {restaurantJSXList}
            {cheapRestaurants}
            {normalRestaurants}
            {costlyRestaurants}

            <Text style={{fontWeight:"bold"}}>
                results from udemy way:
            </Text>
            
        </ScrollView>
    )
}