import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses/search",
    method: "GET",
    data: "",
    headers: {
        Authorization: 'Bearer Wp4EMYfdTk-VeSx2W8Q4wl4_sx3vPZIfFU7aEjsWlQJzhJiLNwY2p4LUjyytScHZ0jg9hwq9GO68CVTbu4jQRkU1lL3srv7hcvmok1GWXruym7w5vyMkOPFeiSUXYnYx'
    }
})