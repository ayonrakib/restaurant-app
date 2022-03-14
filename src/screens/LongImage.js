import react from "react";
import { View, Image, ScrollView } from "react-native";

export default function LongImage(){
    return(
        <ScrollView showsHorizontalScrollIndicator={true} showsVerticalScrollIndicator={true} >
                <ScrollView horizontal>
                    <Image
                        style = {{ width: 700, height: 1000}}
                        source={{
                        uri: 'https://s3-media1.fl.yelpcdn.com/bphoto/vp536ivd0pgr9AuYjqvfUw/o.jpg',
                        }}
                    />
            </ScrollView>
        </ScrollView>

    )
}