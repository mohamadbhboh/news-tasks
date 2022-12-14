import { StyleSheet,Dimensions } from "react-native";

const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;

const searchbarStyles=StyleSheet.create({
    header_safe_area:{
        zIndex:1000,
        color:'#ffffff'
    },
    heading:{
        height:50,
        paddingHorizontal:16
    },
    header_inner:{
        flex:1,
        overflow:'hidden',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        position:'relative'
    },
    search_icon_box:{
        width:40,
        height:40,
        borderRadius:40,
        backgroundColor:"#e4e6eb",
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    input_box:{
       height:50,
       flexDirection:'row',
       alignItems:'center',
       position:'absolute',
       top:0,
       left:0,
       backgroundColor:'white',
       width:width-32 
    },
    back_icon_box:{
        width:40,
        height:40,
        borderRadius:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginRight:5
    },
    input:{
        flex:1,
        height:40,
        backgroundColor:'#e4e6eb',
        borderRadius:16,
        paddingHorizontal:16,
        fontSize:15
    },
    content:{
        width:width,
        height:height,
        position:'absolute',
        left:0,
        bottom:0,
        zIndex:999
    },
    content_safe_area:{
        flex:1,
        backgroundColor:'white'
    },
    content_inner:{
        flex:1,
        paddingTop:50
    },
    seperator:{
        marginTop:5,
        height:1,
        backgroundColor:"#e6e4eb"
    }
})

module.exports=searchbarStyles;