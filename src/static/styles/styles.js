import { StyleSheet, StatusBar } from "react-native";

export default function getStyles(){
    const styles = StyleSheet.create({
        title: {
            fontWeight: "bold"
        },
        container: {
            flex: 1,
            paddingTop: StatusBar.currentHeight,
          },
          scrollView: {
            backgroundColor: 'pink',
            marginHorizontal: 20,
          },
          text: {
            fontSize: 42,
          }
    })

    return styles;
}