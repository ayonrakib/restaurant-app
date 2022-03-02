import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorInSearchingRestaurants, setErrorInSearchingRestaurants] = useState(undefined)
    console.log("results state is: ",results)

    const searchApi = async (searchTerm) => {
        console.log("came in search api method!")
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 10,
                    term: searchTerm,
                    location: 'austin'
                }
            });
            setErrorInSearchingRestaurants("")
            setResults(response.data.businesses)
        } catch (error) {
            setErrorInSearchingRestaurants("Could not search restaurants!")
        }

    }

    useEffect(() => {
        searchApi('noodles')
    }, [])

    return [errorInSearchingRestaurants, results, searchApi]
}