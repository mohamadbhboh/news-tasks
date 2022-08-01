// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
//import nedded libraries
import React from "react";
import Home from './lib/App';
import {name as appName} from './app.json';
import {AppRegistry} from 'react-native';
//rendering
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DetailsNews from './lib/views/newsPage'
const Stack=createStackNavigator();
export default function AppRoot(){
   return(
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ title: 'New News' ,headerStyle: {
            backgroundColor: '#033380',
          },headerTintColor:'#ffffff'}}  />
          <Stack.Screen name="DetailsNews" component={DetailsNews} options={{title:'News Details'}}/>
         </Stack.Navigator>
      </NavigationContainer>
   );
}
AppRegistry.registerComponent(appName,()=>AppRoot);