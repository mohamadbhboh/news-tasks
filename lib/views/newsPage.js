import React, { Component } from "react";
import { View ,Text,StyleSheet,Image,Linking} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import detailsNewsStyles from '../styles/detailsNewsStyle'

function DetailsNews({route}){
    const {newItems}=route.params;
    const visitPostSite= (url) => ()=>{
        Linking.openURL(url);
    }
    return(
        <View style={detailsNewsStyles.view}>
            <ScrollView>
                <View style={detailsNewsStyles.container} >
                    <Text style={detailsNewsStyles.titleStyle}>{newItems.title}</Text>
                    <Image style={detailsNewsStyles.imageStyle} source={{uri:newItems.urlToImage}} />
                    <View style={{flexDirection:'row',padding:10,justifyContent:'space-between'}}>
                        <Text style={{color:'#033380'}}>{newItems.publishedAt.substring(0,10)}</Text>
                        <Text style={{color:'#033384' ,fontSize:18}} onPress={visitPostSite(newItems.url)}>visit original post</Text>
                    </View>
                    <Text style={detailsNewsStyles.text}>{newItems.description}</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default DetailsNews;

