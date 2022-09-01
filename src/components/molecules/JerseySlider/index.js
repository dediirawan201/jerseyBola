import {Image, Modal, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Slider1, Slider2} from '../../../assets';
import Swiper from 'react-native-swiper';
import {colors, responsiveHeight, responsiveWidth} from '../../../utils';
import ImageViewer from 'react-native-image-zoom-viewer';
import {Input} from '../../atoms';

const JerseySlider = ({gambar}) => {
  const [openImage, setOpenImage] = useState(false);
  const [previewImage, setPreviewImage] = useState(false);

  const clickPreview = index => {
    setOpenImage(true);
    setPreviewImage([
      {
        url: '',
        props: {
          // Or you can set source directory.
          source: gambar[index],
        },
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.swiper}
        loop
        onIndexChanged={index => {
        //   console.warn(`image ${index} prossed`)
          clickPreview(index)
        }}
        dot={
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              margin: 5,
              backgroundColor: 'white',
              marginBottom: -30,
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
              marginBottom: -30,
            }}></View>
        }>
            {gambar.map(e => {
                return (
                    <Image key={e} source={e} style={styles.image} />

                )
            })}
      </Swiper>
      <Modal visible={openImage} transparent={true}>
        <ImageViewer imageUrls={previewImage} 
        backgroundColor={colors.main}
        onClick={() => setOpenImage(false)} 
        enableSwipeDown
        onSwipeDown={() => setOpenImage(false)}
        />
        
      </Modal>
    </View>
  );
};

export default JerseySlider;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    height: responsiveHeight(310),
  },
  swiper: {},
  image: {
    flex: 1,
    alignSelf: 'center',
    width: responsiveWidth(300),
    height: responsiveHeight(300),
    borderRadius: 10,
    elevation: 5,
  },
});
