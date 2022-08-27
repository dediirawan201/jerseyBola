import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BannerSlider, Gap, Header, ListLiga} from '../../components';
import {colors, fonts, responsiveHeight} from '../../utils';
import Carousel from '../../components/molecules/BannerSlider/Carousel';
import dummyData from '../../assets/data'
const Home = () => {
  console.log(dummyData) 
  return (
    <View style={styles.page}>
      <View style={styles.wrapper}>
        <Header />
        <Gap height={15}/>
        {/* <BannerSlider/> */}
        <Carousel/>
        <Gap height={18}/>
        <View style={styles.wrappLiga}>
          <Text style={styles.titleliga}>Pilih Liga</Text>
          <ListLiga/>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper:{
    backgroundColor:colors.main,
    height: responsiveHeight(125),
    paddingHorizontal:30,
  },
  titleliga:{
    fontSize:18,
    fontFamily: fonts.primary.regular
  }
});
