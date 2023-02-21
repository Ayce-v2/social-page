import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react'
import MainComponent from './Components/MainComponent'
import TextInputComp from './Components/TextInputComp';



export default function App() {
  return (
    <View style={styles.container}>
      <Text style={titleStyle.title}>Welcome to Naruto's Social Page!</Text>
      <br></br>
      <MainComponent/>
      <StatusBar style="auto" />
      <TextInputComp/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const titleStyle = StyleSheet.create({
  title: {
    fontSize:22,
    fontStyle: 'italic',
    fontFamily:'Cochin',
    color: '#fc7303'
  }
})


