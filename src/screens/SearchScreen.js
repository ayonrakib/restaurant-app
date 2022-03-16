import React, {useState} from "react";
import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import Results from "../components/Results";
import getStyles from '.././static/styles/styles'

export default function SearchScreen(){
    // console.log("came in searchscreen component!")
    const [term, setTerm] = useState('')
    const [errorInSearchingRestaurants, results, searchApi] = useResults();
    const [restaurants, SetRestaurants] = useState([]);
    // const [cheapRestaurants, setCheapRestaurants] = useState([]);
    const [affordableRestaurants, setAffordableRestaurants] = useState([]);
    const [costlyRestaurants, setCostlyRestaurants] = useState([]);

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
    // console.log("restaurantJSXList is: ",restaurantJSXList)
    let currentCheapRestaurants = [];
    for(let index in restaurants){
        if(restaurants[index].price === "$"){
            currentCheapRestaurants.push(
                <View key={Math.random()}>
                    <Text>{restaurants[index].name} {'\n'}</Text>
                    <Image
                        style={{height: 100, width: 100, borderRadius: 18}}
                        source={{
                            uri: restaurants[index].image_url
                        }}
                    />
                </View>
            )
        }
    }
    let cheapRestaurants = <ScrollView horizontal>{currentCheapRestaurants}</ScrollView>
    // setCheapRestaurants(currentCheapRestaurants);
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
            <Results title = "Cost Effective"/>
            <Results title = "Cheap"/>
            <Results title = "Costly"/>
            {/* <Image
                style = {{ width: 100, height: 100, borderRadius: 18 }}
                source={{
                uri: 'https://s3-media1.fl.yelpcdn.com/bphoto/vp536ivd0pgr9AuYjqvfUw/o.jpg',
                }}
            /> */}
            {restaurantJSXList}
            <Text>
            {'\n'} Cheap restaurants: {'\n'} {'\n'}
                
            </Text>
            {cheapRestaurants}
        </ScrollView>
    )
}