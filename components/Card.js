import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated
} from 'react-native';

const { width } = Dimensions.get('window');
const CARD_SIZE = width * 0.6;

const Card = ({ translateY, key }) => {
  return (
    <Animated.View
      key={key}
      style={[
        styles.container,
        { width: CARD_SIZE, transform: [{ translateY }] }
      ]}
    >
      <Image style={styles.profile} source={require('../assets/profile.png')} />
      <Text style={styles.title}>Sapphire Keychain</Text>
      <Text style={styles.description}>
        Choosing the Best Gemstone for Your Necklace and Jewelry
      </Text>
      <TouchableOpacity style={styles.buttonWrapper}>
        <Text style={styles.buttonText}>View</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 20
  },
  profile: {
    width: 56,
    height: 56,
    marginTop: '-10%',
    marginBottom: 10
  },
  title: {
    fontSize: 25,
    lineHeight: 30,
    letterSpacing: 0.69,
    color: '#4E5B76',
    margin: 10,
    fontFamily: 'Roboto_700Bold',
    paddingHorizontal: 25,
    textAlign: 'center'
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.39,
    color: '#A0A9B8',
    marginBottom: 20,
    paddingHorizontal: 35,
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center'
  },
  buttonWrapper: {
    borderRadius: 19,
    backgroundColor: '#303371',
    paddingVertical: 8,
    paddingHorizontal: 40,
    marginVertical: 43
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Roboto_700Bold',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.39
  }
});

export default Card;
