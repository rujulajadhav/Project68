import React from "react";
import {Text, View, TouchableOpacity, StyleSheet, TextInput} from "react-native";

export default class Instagram extends React.Component{
    render(){
    return (
      <View>
      <Text style = {styles.text}>Instagram</Text>
      </View>
    );
    }
}
const styles = StyleSheet.create({
  text : {
    fontSize:40,
    fontWeight:40,
    textAlign:'center',
    marginTop:250,
  }
})