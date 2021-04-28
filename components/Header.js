import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.profile} source={require('../assets/profile.png')} />
      <Text style={styles.name}>Lottie Curtis</Text>
      <Text style={styles.description}>You have 3 Products</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: '60px'
  },
  profile: {
    width: '56px',
    height: '56px'
  },
  name: {
    fontSize: '18px',
    lineHeight: '20px',
    letterSpacing: '0.5px',
    color: '#fff',
    margin: '10px',
    fontFamily: 'Roboto_700Bold'
  },
  description: {
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.39px',
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: '15px',
    paddingVertical: '3px',
    paddingHorizontal: '10px',
    fontFamily: 'Roboto_400Regular'
  }
});

export default Header;
