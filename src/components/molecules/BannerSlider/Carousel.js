import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Slider1, Slider2} from '../../../assets';
import Swiper from 'react-native-swiper';
import {responsiveHeight, responsiveWidth} from '../../../utils';

const Carousel = () => {
  return (
    <View style={styles.container}>
      <Swiper style={styles.swiper}
        loop
        autoplay
        dot={
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              margin: 5,
              backgroundColor: 'white',
              marginBottom:-30
            }}></View>
        }
        activeDot={
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              margin: 5,
              backgroundColor: '#22668A',
              marginBottom:-30
            }}></View>
        }>
        <Image source={Slider1} style={styles.image} />
        <Image source={Slider2} style={styles.image} />
      </Swiper>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
    
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(354),
    height: responsiveHeight(132),
  },
  swiper:{

  },
  image: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    width: responsiveWidth(354),
    height: responsiveHeight(132),
    borderRadius: 10,
    elevation:5
  },
});
