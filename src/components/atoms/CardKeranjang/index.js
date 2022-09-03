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
import {IconDelete} from '../../../assets';
import {RFValue} from 'react-native-responsive-fontsize';
import Gap from '../Gap';

const CardKeranjang = ({datas}) => {
  // console.log('datas keranjang ', datas.pesanans[1]);
  return (
    <View> 
    <View style={styles.container}>
      <Image
        source={datas.product.gambar[0]}
        style={styles.jersey}
      />
      <View style={styles.detailKeranjang}>
        <Text style={styles.namaJersey}>{datas.product.nama}</Text>
        <Text style={styles.desc}>
          <Text style={styles.subdesc}>Harga:</Text>{' '}
          {numberWithCommas(datas.product.harga)}
        </Text>
        <Gap height={10} />
        <Text style={styles.desc}>
          <Text style={styles.subdesc}>Pesan:</Text>{' '}
          {datas.jumlahPesan}
        </Text>
        <Text style={styles.desc}>
          <Text style={styles.subdesc}>Ukuran:</Text> {datas.ukuran}
        </Text>
        <Text style={styles.desc}>
          <Text style={styles.subdesc}>Total Harga:</Text>
          {numberWithCommas(datas.totalHarga)}
        </Text>
        <Text style={styles.subdesc}>Keterangan:</Text>
        <Text style={styles.desc}>{datas.keterangan}</Text>
      </View>
      <IconDelete />
    </View>
    </View>
  );
};

export default CardKeranjang;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: responsiveWidth(10),
    borderRadius: 5,
    backgroundColor: colors.white,
    marginBottom: responsiveHeight(30),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  jersey: {
    width: responsiveWidth(88),
    height: responsiveHeight(88),
  },
  namaJersey: {
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(13, heightMobileUI),
    color: colors.black,
  },
  desc: {
    fontSize: 11,
  },
  subdesc: {
    fontFamily: fonts.primary.bold,
    color: colors.black,
  },
  detailKeranjang:{
    maxWidth:responsiveWidth(200)
  }
});
