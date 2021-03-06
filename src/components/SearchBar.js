import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function SearchBar(props){
    // console.log("props in SearchBar method is: ",props)
    const styles = StyleSheet.create({
        background: {
            backgroundColor: 'gray',
            height: 40,
            borderRadius: 5,
            marginHorizontal: 10,
            marginVertical: 10,
            flexDirection: 'row'
        },
        searchBar: {
            flex: 1,
            fontSize: 18
        },
        searchIcon: {
            alignSelf: 'center',
            marginHorizontal: 5
        }
    })

    return(
        <View style = {styles.background}>
            <FontAwesome style={styles.searchIcon} name="search" size={24} color="black" />
            <TextInput 
                style = {styles.searchBar}
                placeholder="Search"
                value={props.term}
                onChangeText={(newTerm) => props.onTermChange(newTerm)}
                autoCapitalize="none"
                autoCorrect={false}
                onEndEditing={() => props.onTermSubmit()}
            />
        </View>
    )


}