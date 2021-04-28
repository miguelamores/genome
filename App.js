import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  ImageBackground,
  Dimensions,
  Animated
} from 'react-native';
import Data from './data';

import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic
} from '@expo-google-fonts/roboto';

const { width } = Dimensions.get('window');
const CARD_SIZE = width * 0.7;
const EMPTY_ITEM_SIZE = (width - CARD_SIZE) / 2;
const image = require('./assets/bg.png');

export default function App() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const cardList = [{ key: 'left-spacer' }, ...Data, { key: 'right-spacer' }];

  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Header />
        <Animated.FlatList
          data={cardList}
          showsHorizontalScrollIndicator
          keyExtractor={item => item.key}
          horizontal
          contentContainerStyle={{ alignItems: 'center' }}
          snapToInterval={CARD_SIZE}
          decelerationRate={0}
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16}
          renderItem={({ item, index }) => {
            if (!item.title) {
              return <View style={{ width: EMPTY_ITEM_SIZE }} />;
            }
            const inputRange = [
              (index - 2) * CARD_SIZE,
              (index - 1) * CARD_SIZE,
              index * CARD_SIZE
            ];
            const translateY = scrollX.interpolate({
              inputRange,
              outputRange: [0, -50, 0]
            });
            return <Card key={index} translateY={translateY} />;
          }}
        />
        <Footer fill="#000" />
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
    justifyContent: 'center',
    height: '100%'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%'
  }
});
