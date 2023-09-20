import React from "react-native"
import {component} from "react"
import {View,Text, Stylesheet} from "react-native"
export default class app extends component {
render(){

return({
  <View style={styles.main}>
  <Text style={styles.text}>Hello world</Text>
       </View>
})
  
}
}
const styles=Stylesheet.create({

main:{
  flex:1,justifyContent:"center"
},
  text:{
  textAlign:"center"
  }
})
