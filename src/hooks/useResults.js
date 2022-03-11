import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorInSearchingRestaurants, setErrorInSearchingRestaurants] = useState("")
    // console.log("results state is: ",results)
    // if (results != []){
    //     console.log("name of the first res is: ",results[0].name)
    // }
    

    const searchApi = async (searchTerm, callBack) => {
        // console.log("came in search api method!")
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 3,
                    term: searchTerm,
                    location: 'austin'
                }
            });
            // console.log("response from yelp is: ",response.data)
            callBack(response.data.businesses)
             
        } catch (error) {
            setErrorInSearchingRestaurants("Could not search restaurants!")
        }

    }


    const showCheapRestaurants = () => {
        if (results === []){
            return null
        }
        console.log("results in showCheapRestaurants method is: ",results.length)
        for(let index in results){
            // console.log("restaurant name is: ",results[index])
        }
    }

    useEffect(() => {
        searchApi('noodles');
        if(results != []){
            showCheapRestaurants(); 
        }
    }, [])
    
    // console.log("results before returning is: ",results)
    return [errorInSearchingRestaurants, results, searchApi]
}