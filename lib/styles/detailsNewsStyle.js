import { StyleSheet,Dimensions } from "react-native";
const deviceWidth = Math.round(Dimensions.get('window').width);

const detailsNewsStyles=StyleSheet.create({
  view:{
    alignItems:'center',  
  },
  text:{
    color:'#000000',
    fontWeight:'bold',
    fontSize:14,
    textAlign:'justify'
  },
  container: {
    width: deviceWidth - 20,
    marginTop: 25,
  },
  imageStyle: {
    height: 350,
    width: deviceWidth,
    opacity: 0.9,
    alignContent: 'center',
    alignSelf: 'center',
  },
  titleStyle: {
    fontSize: 15,
    fontWeight: '800',
    marginBottom:10,
    color:'#033380',
    alignSelf:'center'
  },
});

module.exports=detailsNewsStyles