import React from "react";
import { View, Image, Text } from "react-native";

export default function ResultsDetail(props){
    // console.log("result prop is: ",props)
    return(
        <View>
            <Text>{props.result.name}</Text>
            <Image style={{height: 200, width: 200, borderRadius: 18, marginRight: 20}} source={{uri: props.result.image_url}}/>
            <Text>{props.result.rating} stars, {props.result.review_count} reviews</Text>
        </View>
    )
}