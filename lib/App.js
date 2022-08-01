import {Text,AppRegistry,SafeAreaView,useColorScheme, View} from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";
import SearchBar from "./component/searchbar";
import NewsCard from "./component/newsCard";
import React from 'react';
//redux 
import { Provider } from 'react-redux';
import { Store } from './redux/store';


export default function Home(){

   const isDarkMode = useColorScheme() === 'dark';
   const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : '#ffffff',
  };
  
    return(
       <Provider store={Store}>
         <SafeAreaView style={backgroundStyle}>
            <SearchBar/>
            <NewsCard/>
         </SafeAreaView>
       </Provider>
    );
}