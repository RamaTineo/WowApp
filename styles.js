import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    container : {
      flex: 1,
      backgroundColor:"#e6e1c2",
      alignItems:"center",
  
    },
    inputContainer: {
      flexDirection:"row",
      marginTop: 55,
      marginHorizontal: 20,
      color:"#52528C",
      alignItems: 'center',
      justifyContent:'space-evenly',
      
    },
  input: {
    width:"70%",
    borderBottomWidth: 1,
    borderBottomColor: "#52128C",
    color:'#212121',

  },
  btn: {
    color: "#212121",
    width: "80",
    height:"200",
    backgroundColor:"#181715",
  },
  
lista:{
    backgroundColor:"#7e1c13",
    width:250,
    alignItems:"center",
    margin:25,
    padding:10,
    borderRadius:3,
},
item:{
backgroundColor:"#f0f7da",
    margin:3,
    padding:2,
    width:200,
    borderRadius:5,
    textAlign:"center",

},

  
  });