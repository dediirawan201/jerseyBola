import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  colors,
  fonts,
  heightMobileUI,
  numberWithCommas,
  responsiveHeight,
  responsiveWidth, 
  widthMobileUI,
} from '../../utils';
import {RFValue} from 'react-native-responsive-fontsize';
import {Button, CardLiga, Choose, Gap, Input, JerseySlider, ListMenu} from '../../components';

const JerseyDetail = ({navigation,route}) => {
  const dataJersey = route.params;
  return (
    <View style={styles.page}>
      <JerseySlider gambar={dataJersey.gambar}/>
        {/* <Image source={dataJersey.gambar[0]} style={styles.shirt} /> */}
        <Button type="iconOnly" icon="back" position='absolute' onPress={() => navigation.goBack()}  left={30} top={20} />
 
      <View style={styles.container}>
        <View style={styles.ligasCard}>
          <CardLiga img={dataJersey.liga.gambar} />
        </View>
        <Gap height={13}/>
        <Text style={styles.desc}>{dataJersey.nama}</Text>
        <Text style={styles.harga}>Harga : Rp. {numberWithCommas(dataJersey.harga)}</Text>
        
        <View style={styles.line} />
        <View style={styles.wrap}>
          <Text style={styles.jenis}>Jenis: {dataJersey.jenis}</Text>
          <Text >Berat: {dataJersey.berat}</Text>
        </View>
        <Gap height={27}/>
        <View style={styles.wrapTwo}>
        <Input label='Jumlah:' width={166} height={33}/>
        <Gap width={23} />
        <Choose width={146} height={33} label='Pilih Ukuran:' data={dataJersey.ukuran}/>
        </View>
        <Gap height={16}/>
        <Input label='Keterangan:' type='textarea'/>
        <Gap height={22}/>
        <Button type='iconText' title='Masukkan Keranjang' icon='keranjang'/>
      </View>
    </View>
  );
};

export default JerseyDetail;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.main,
    flex: 1,
    
    
  },
  container: {
    backgroundColor: colors.white,
    position: 'absolute',
    height: responsiveHeight(493),
    bottom: 0,
    width: responsiveWidth(414),
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: responsiveWidth(30),
  },
  shirt: {
    width: responsiveWidth(300),
    height: responsiveHeight(300),
    marginTop:responsiveHeight(50),
    marginLeft:responsiveWidth(50)
    
  },
  ligasCard: {
    alignSelf: 'flex-end',
    marginTop: -responsiveHeight(30),
  },
  line: {
    borderWidth: 0.3,
    borderColor: '#c4c4c4',
    width: responsiveWidth(350),
    marginTop: responsiveHeight(10),
  },
  desc:{
    fontFamily:fonts.primary.bold,
    fontSize:RFValue(24, heightMobileUI),
    color:colors.black
  },
  harga:{
    fontFamily:fonts.primary.regular,
    fontSize:RFValue(24, heightMobileUI),
    color:colors.black
  },
  wrap:{
    flexDirection:'row',
    fontSize:RFValue(13,heightMobileUI),
    fontFamily:fonts.primary.regular,
    marginTop:responsiveHeight(10)
  },
  jenis:{
    marginRight:responsiveWidth(50)
  },
  wrapTwo:{
    flexDirection:'row',
    justifyContent:'space-between',
  }
});
