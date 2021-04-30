import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated
} from 'react-native';
import AddButton from './AddButton';

const { width } = Dimensions.get('window');
const CARD_SIZE = width * 0.6;

const Card = ({
  translateY,
  id,
  title,
  description,
  isAddCard,
  image = 'stone_1.png'
}) => {
  //const customImage = require(image);
  return (
    <Animated.View
      key={id}
      style={[
        styles.container,
        { width: CARD_SIZE, transform: [{ translateY }] }
      ]}
    >
      {isAddCard ? (
        <AddButton />
      ) : (
        <Image
          style={[styles.stone, { width: CARD_SIZE - 20 }]}
          source={image}
        />
      )}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      {!isAddCard && (
        <TouchableOpacity style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 20,
    maxHeight: 369,
    height: 369,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  stone: {
    height: 171,
    marginTop: '-35%'
  },
  title: {
    fontSize: 25,
    lineHeight: 30,
    letterSpacing: 0.69,
    color: '#4E5B76',
    marginBottom: 15,
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
    paddingHorizontal: 35,
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
