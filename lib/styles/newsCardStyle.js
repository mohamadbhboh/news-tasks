import { StyleSheet,Dimensions } from "react-native";
const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 20;
const cardStyles=StyleSheet.create({
  view:{
    alignItems:'center',  
  },
  text:{
    color:'#5555ff',
    fontWeight:'bold',
    fontSize:20
  },
  container: {
    width: deviceWidth - 20,
    alignItems: 'center',
    marginTop: 25,
  },
  cardContainer: {
    width: deviceWidth - offset,
    backgroundColor: '#ffffff',
    height: 280,
    borderRadius: radius,

    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  imageStyle: {
    height: 170,
    width: deviceWidth - offset,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.9,
    alignContent: 'center',
    alignSelf: 'center',
  },
  titleStyle: {
    fontSize: 15,
    fontWeight: '800',
    marginBottom:10,
    color:'#033380'
  },
  categoryStyle: {
    fontWeight: 'bold',
    marginBottom:5,
    color:'#033380'
  },
  infoStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  iconLabelStyle: {
    flexDirection: 'row',
    marginTop: 10,
  },
});
module.exports=cardStyles;