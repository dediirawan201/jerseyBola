import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  colors,
  fonts,
  heightMobileUI,
  numberWithCommas,
  responsiveHeight,
  responsiveWidth,
} from '../../utils';
import {dummyPesanans, IconDelete} from '../../assets';
import {Button, CardKeranjang, ListKeranjang} from '../../components';
import {RFValue} from 'react-native-responsive-fontsize';

const Keranjang = ({navigation, route}) => {
  const data = route.params[0];
  console.log('dummy pesananan coy', data);
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={true} style={{flex:1}}>
      <ListKeranjang keranjangs={data.pesanans} />
      <View style={styles.containerFooter}>
        <View style={styles.line} />
        <View style={styles.total}>
          <Text style={styles.desc}>Total Harga</Text>
          <Text style={styles.desc}>
            Rp. {numberWithCommas(data.totalHarga)}
          </Text>
        </View>
        <View style={styles.button}>
          <Button type="iconText" onPress={() => navigation.navigate('CheckOut',data)} title="check out" />
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default Keranjang;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent:'space-between',
    backgroundColor: colors.white,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: colors.grey,
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: responsiveHeight(30),
  },
  desc: {
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(20, heightMobileUI),
    color: colors.black,
  },
  button:{
    paddingHorizontal:responsiveHeight(30),
    paddingBottom:responsiveHeight(30)
  },
  // containerFooter:{
  //   justifyContent:'flex-end'

  // }
});
