import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Card = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.profile} source={require('../assets/profile.png')} />
      <Text style={styles.title}>Sapphire Keychain</Text>
      <Text style={styles.description}>
        Choosing the Best Gemstone for Your Necklace and Jewelry
      </Text>
      <TouchableOpacity style={styles.buttonWrapper}>
        <Text style={styles.buttonText}>View</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '20px',
    width: '248px'
  },
  profile: {
    width: '56px',
    height: '56px',
    marginTop: '-10%',
    marginBottom: '10px'
  },
  title: {
    fontSize: '25px',
    lineHeight: '30px',
    letterSpacing: '0.69px',
    color: '#4E5B76',
    margin: '10px',
    fontFamily: 'Roboto_700Bold',
    paddingHorizontal: '25px',
    textAlign: 'center'
  },
  description: {
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.39px',
    color: '#A0A9B8',
    marginBottom: '20px',
    paddingHorizontal: '35px',
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center'
  },
  buttonWrapper: {
    borderRadius: '19px',
    backgroundColor: '#303371',
    paddingVertical: '8px',
    paddingHorizontal: '40px',
    marginVertical: '43px'
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Roboto_700Bold',
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.39px'
  }
});

export default Card;
