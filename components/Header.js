import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.profile} source={require('../assets/profile.png')} />
      <Text style={styles.name}>Lottie Curtis</Text>
      <View style={styles.descriptionWrapper}>
        <Text style={styles.description}>You have 3 Products</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40
  },
  profile: {
    width: 56,
    height: 56
  },
  name: {
    fontSize: 18,
    lineHeight: 20,
    letterSpacing: 0.5,
    color: '#fff',
    margin: 10,
    fontFamily: 'Roboto_700Bold'
  },
  descriptionWrapper: {
    backgroundColor: '#fff',
    borderRadius: 15
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.39,
    color: '#000',
    paddingVertical: 3,
    paddingHorizontal: 10,
    fontFamily: 'Roboto_400Regular'
  }
});

export default Header;
