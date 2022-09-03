import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  colors,
  fonts,
  heightMobileUI,
  numberWithCommas,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils';
import {Gap} from '../../../components';
import {RFValue} from 'react-native-responsive-fontsize';

const CardHistory = ({data}) => {
  console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.appContainer}>
        <Text> {data.tanggalPemesanan}</Text>
        {data.pesanans.map(dataPesan => {
          return (
            <View key={dataPesan.id} style={styles.wrapper}>
              <Text style={styles.angka}>{dataPesan.id}</Text>
              <Image
                source={dataPesan.product.gambar[0]}
                style={styles.jersey}
              />
              <View>
                <Text style={styles.namaJersey}>{dataPesan.product.nama}</Text>
                <Text style={styles.harga}>
                  Harga: {numberWithCommas(dataPesan.product.harga)}
                </Text>
                <Gap height={10} />
                <Text style={styles.harga}>
                  <Text style={styles.textBold}>Pesan:</Text>{' '}
                  {dataPesan.jumlahPesan}
                </Text>
                <Text style={styles.harga}>
                  <Text style={styles.textBold}>Total Harga:</Text>{' '}
                  {numberWithCommas(dataPesan.totalHarga)}
                </Text>
              </View>
            </View>
          );
        })}
        <View style={styles.footer}>
        <View style={styles.mainWrapp}>
          <Text style={styles.subWrapOne}>STATUS:</Text>
          <Text style={styles.subWrapOne}>{`ONGKIR (2-3 HARI):`}</Text>
          <Text style={styles.subWrapOne}>{`TOTAL HARGA:`}</Text>
        </View>
        <View style={styles.mainWrapp}>
          <Text style={[styles.subWrapOne,{textTransform:'uppercase'}]}>{data.status}</Text>
          <Text style={styles.subWrapOne}>Rp. {numberWithCommas(15000)}</Text>
          <Text style={styles.subWrapOne}>Rp. {numberWithCommas(data.totalHarga)}</Text>
        </View>
        </View>
      </View>
    </View>
  );
};

export default CardHistory;

const styles = StyleSheet.create({
  jersey: {
    width: responsiveWidth(66),
    height: responsiveHeight(66),
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: responsiveHeight(20),
  },
  container: {
    padding: responsiveHeight(22),
    backgroundColor: colors.white,
    marginBottom: responsiveHeight(15),
    shadowColor: '#000',
    borderWidth:0.5,
    borderColor:colors.grey,
    borderRadius:10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  angka: {
    alignSelf: 'flex-start',
    fontSize: RFValue(11, heightMobileUI),
    color: colors.black,
  },
  namaJersey: {
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(13, heightMobileUI),
    color: colors.black,
  },
  harga: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(11, heightMobileUI),
    color: colors.black,
  },
  textBold: {
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(11, heightMobileUI),
    color: colors.black,
  },
  footer:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  mainWrapp:{
    flex:1,
  },
  subWrapOne:{
    textAlign:'right',
    color:colors.blue,
    fontFamily:fonts.primary.bold
  }

});
