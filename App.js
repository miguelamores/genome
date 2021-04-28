import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import Header from './components/Header';

export default function App() {
  const image = require('./assets/bg.png');
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Header />
        <Text>Open up App.js to start working on your app!</Text>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    padding: '20px',
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  }
});
