import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BannerSlider, Button, Gap, Header, ListJersey, ListLiga} from '../../components';
import {colors, fonts, responsiveHeight} from '../../utils';
import Carousel from '../../components/molecules/BannerSlider/Carousel';
import dummyData from '../../assets/data/dummyLigas'
const Jersey = () => {
  console.log(dummyData) 
  return (
    <View style={styles.page}>
        <View style={{backgroundColor:colors.main, height:responsiveHeight(125)}}/>
      <View style={styles.wrapper}>
        <Header />
      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={styles.wrappLiga}>
        <Gap height={10} />
          <ListLiga/>
        </View>
        <Gap height={20} />
        <Text>Pilih <Text style={{fontFamily:fonts.primary.bold,color:'black'}}>Jersey</Text> yang Anda Inginkan</Text>
        <Gap height={21}/>
        <ListJersey/>
        <Gap height={250}/>
        </ScrollView>
      </View>
    </View>
  );
};

export default Jersey;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper:{
    paddingHorizontal:30,
    marginTop:-110
  },
  titleliga:{
    fontSize:18,
    fontFamily: fonts.primary.regular
  }
});
