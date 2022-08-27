import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Slider1, Slider2} from '../../../assets';
import {responsiveHeight, responsiveWidth} from '../../../utils';
import Carousel from './Carousel';

const BannerSlider = () => {
  const images = [Slider1, Slider2];
  const [imgActive, setImagActive] = useState(0);

  onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil( 
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if (slide != imgActive) {
        setImagActive(slide);
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
          onScroll={({nativeEvent}) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}>
          {images.map((e, index) => (
            <Image
              key={e}
              resizeMode="stretch"
              style={styles.wrap}
              source={e}
            />
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          {images.map((e, index) => (
            <Text
              key={e}
              style={imgActive == index ? styles.dotActive : styles.dot}>
              ●
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default BannerSlider;

const styles = StyleSheet.create({
  container: {},
  wrap: {
    width: responsiveWidth(354),
    height: responsiveHeight(132),
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    color: 'black',
  },
  dot: {
    margin: 3,
    color: 'white',
  },
});
