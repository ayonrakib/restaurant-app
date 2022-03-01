import axios from "axios";
import {YELP_API_KEY, YELP_CLIENT_ID} from "@env";

console.log("env variables are: ", YELP_API_KEY)

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses/search",
    method: "GET",
    data: "",
    headers: {
        Authorization: `Bearer ${YELP_API_KEY}`
    }
})