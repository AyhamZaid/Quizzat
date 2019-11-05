import React from 'react';
import { StyleSheet, Text, View  , StackNavigator} from 'react-native';

import Register from "./components/auth/Register"
import axios from 'axios';
import Login from './components/auth/Login';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>App Page</Text>
      <Login />
      {/* <Register /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
    width:'100%'
  },
});
