import React from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';

let { width } = Dimensions.get('window');
width = width * 0.7;

const Indicator = ({ cardList, scrollX }) => {
  return (
    <View style={styles.indicatorWrapper}>
      {cardList.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const indicatorColor = scrollX.interpolate({
          inputRange,
          outputRange: ['#fff', '#424A93', '#fff']
        });
        return (
          <Animated.View
            key={`indicator-${i}`}
            style={[styles.indicator, { backgroundColor: indicatorColor }]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  indicatorWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: '12%'
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    margin: 10
  }
});

export default Indicator;
