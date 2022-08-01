import React,{useState} from 'react'
import { View,Text,StyleSheet,Image, ScrollView,TouchableHighlight } from 'react-native'
//this  is for state management
import {useSelector,useDispatch} from 'react-redux'
import { useNavigation } from '@react-navigation/native';

import cardStyles from '../styles/newsCardStyle';


function NewsCard(){
  //for move to another page
  const navigation = useNavigation();

  const _onPress= (newsItem) => ()=>{
    navigation.navigate('DetailsNews',{newItems:newsItem});
  }
  //get  news items from redux
  const  newsItems=useSelector(state => state.NewsReducer);

  return(
    <View style={cardStyles.view}>
      <ScrollView>{newsItems.length==0 ? <Text style={cardStyles.text}>No data available</Text>:newsItems.articles.length==0?<Text style={cardStyles.text}>No data available</Text> :newsItems.articles.map((item,i)=>
        <TouchableHighlight onPress={_onPress(item)} underlayColor="#ffffff">
          <View style={cardStyles.container} >
            <View style={cardStyles.cardContainer}>
              <Image style={cardStyles.imageStyle} source={{uri:item.urlToImage}} />
              <View style={cardStyles.infoStyle}>
                <Text style={cardStyles.titleStyle} numberOfLines={2}>{item.title}</Text>
                <View style={{flexDirection:'row'}}>
                  <Text style={cardStyles.categoryStyle} numberOfLines={1}>{item.description}</Text>  
                </View>
                <Text style={cardStyles.categoryStyle}>Date Published: {item.publishedAt.substring(0,10)}</Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>
    )}
      </ScrollView>
    </View>
  )
}

export default NewsCard;
