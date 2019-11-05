import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.login}>
          <View style={styles.form}>

            <TextInput placeholder="User Email" style={styles.input} />

            <TextInput placeholder="Password" style={styles.input} />
            
            <Button title="Press me" onPress={() => Alert.alert("Login")} />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: "100%"
  },
  login: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    height: 40,
    backgroundColor: "pink",
    padding: 20,
    // text: 'black'
    // fontSize :154
    color:'#FFFFFF'
  },
  form: {
    width: "100%"
  }
});
