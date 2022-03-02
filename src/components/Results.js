import React from "react";
import { View, Text } from "react-native";
import getStyles from "../static/styles/styles";

export default function Results(props){
    return(
        <View>
            <Text style={getStyles().title}>
                {props.title}
            </Text>
            <Text>
                Results component
            </Text>
        </View>
    )

}