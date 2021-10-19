import React from "react";
import {Text, View, TouchableOpacity, StyleSheet, TextInput, Header} from "react-native";

export default class Facebook extends React.Component{
    render(){
    return (
      <View>
      <Text style = {styles.text}>Facebook</Text>
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