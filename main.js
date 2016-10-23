import Exponent from 'exponent';
import React from 'react';
import * as firebase from 'firebase';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


const firebaseConfig = {
  apiKey: "AIzaSyC5gUYCSJbd_u3lfMgHsYeMEQQ5XjpUTm0",
  authDomain: "spud-slicer.firebaseapp.com",
  databaseURL: "https://spud-slicer.firebaseio.com",
  storageBucket: "spud-slicer.appspot.com",
  messagingSenderId: "47668240179"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HI THIS an APP</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Exponent.registerRootComponent(App);
