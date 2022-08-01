import React, { Component } from "react";
import{
    SafeAreaView,
    Dimensions,
    StyleSheet,
    View,
    TextInput,
    Image,
    TouchableHighlight,
    ScrollView,
    Text
} from 'react-native';

import Icon  from "react-native-vector-icons/FontAwesome5";
import Animated,{Easing, EasingNode } from "react-native-reanimated";

import getNewsFromRepository from "../controllers/newsControllers";
import newsCard from "./newsCard";
//this for redux
import { useSelector,useDispatch } from "react-redux/es/exports";
import { newsUpdate } from "../redux/actions";
import {connect} from 'react-redux'
//styles
import searchbarStyles from '../styles/searchbarStyles';
     
const {Value,timing}=Animated;
//Device dimensions
const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;

class SearchBar extends React.Component {

    constructor(props){
        super(props)
        this.state={
            isFocused:false,
            keyword:''
        }
        //animation value
        this._input_box_translate_x=new Value(width)
        this._back_button_opacity=new Value(0)
        this._content_translate_y=new Value(height)
        this._content_opacity=new Value(0)
    }
    //update news in screen using redux
    updateNews=(latestNews)=>{
        this.props.dispatch(newsUpdate(latestNews));
    }

    onSearchClick= ()=> {
        this.setState({isFocused:true})
        const input_box_translate_x_config={
            duration:200,
            toValue:0,
            easing:EasingNode.inOut(EasingNode.ease)
        }
        const _back_button_opacity_config={
            duration:200,
            toValue:1,
            easing:EasingNode.inOut(EasingNode.ease)
        }
        //run animation 
        timing(this._input_box_translate_x,input_box_translate_x_config).start()
        timing(this._back_button_opacity,_back_button_opacity_config).start()
        this.refs.input.focus()
    }

    onCloseSearch=()=>{
        //update  state
        this.setState({isFocused:false})
        //animation config
        const input_box_translate_x_config={
            duration:200,
            toValue:width,
            easing:EasingNode.inOut(EasingNode.ease)
        }
        const _back_button_opacity_config={
            duration:200,
            toValue:0,
            easing:EasingNode.inOut(EasingNode.ease)
        }
        //run animation 
        timing(this._input_box_translate_x,input_box_translate_x_config).start()
        timing(this._back_button_opacity,_back_button_opacity_config).start()
        this.refs.input.blur()
    }
    render(){
        return(
            <>
            <SafeAreaView style={searchbarStyles.header_safe_area}>
                <View style={searchbarStyles.heading}>
                    <View style={searchbarStyles.header_inner}>
                        <View>
                        <Text style={{width:152,height:30,color:'#000000'}}>Search for news</Text>
                        </View>
                        <TouchableHighlight 
                            activeOpacity={1}
                            underlayColor={"#ccd0d5"}
                            onPress={this.onSearchClick}
                            style={searchbarStyles.search_icon_box}>
                            <Icon name="search" size={22} color={"#000000"}/>
                        </TouchableHighlight>
                        <Animated.View style={[searchbarStyles.input_box,{transform:[{translateX:this._input_box_translate_x}]}]}>
                            <Animated.View style={{opacity:this._back_button_opacity}}>
                                <TouchableHighlight
                                    activeOpacity={1}
                                    underlayColor={"#ccd0d5"}
                                    onPress={this.onCloseSearch}
                                    style={searchbarStyles.back_icon_box} >
                                    <Icon name="chevron-left" size={22} color="#000000" />
                                </TouchableHighlight>
                            </Animated.View>
                            <TextInput
                                style={searchbarStyles.input}
                                maxLength={20}
                                ref="input"
                                placeholder="Search News"
                                clearButtonMode="always"
                                value={this.state.keyword}
                                onChangeText={
                                    async (value)=>{
                                    this.setState({keyword:value});
                                    if (value.length<2){
                                        this.updateNews([]);
                                    } 
                                    else {
                                    latestItems= await getNewsFromRepository(value);
                                    this.updateNews(latestItems);
                                    }
                                }}
                                />
                        </Animated.View>
                    </View>
                </View>
            </SafeAreaView>
            <Animated.View
                style={[searchbarStyles.content,{opacity:this._content_opacity,transform:[{translateY:this._content_translate_y}]}]} >
                <SafeAreaView style={searchbarStyles.content_safe_area}>
                    <View style={searchbarStyles.content_inner}>
                        <View style={searchbarStyles.seperator}/>
                        {
                         this.state.keyword===""?
                            <Text>No data found</Text>
                            :
                            <Text>Search Now</Text>
                        }
                        </View>
                </SafeAreaView>
            </Animated.View>
            </>
        );
    }
}

export default connect()(SearchBar);