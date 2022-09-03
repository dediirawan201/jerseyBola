import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import {dummyProfile} from '../../assets/data/dummyProfile';
import {
  numberWithCommas,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/util';
import {fonts} from '../../utils/fonts';
import {RFValue} from 'react-native-responsive-fontsize';
import {heightMobileUI} from '../../utils';
import {Button, Choose, Gap} from '../../components';

const CheckOut = ({route}) => {
  const dataPesanan = route.params;
  const data = dummyProfile;
  const dataEkspedisi = [''];
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.textTanya}>Apakah Benar Alamat ini?</Text>
        <Gap height={9} />
        <View style={styles.alamatLengkap}>
          <Text style={styles.myAddress}>Alamat Saya</Text>
          <Gap height={14} />
          <Text style={styles.desc}>{data.alamat}</Text>
          <Text style={styles.desc}>Kota {data.kota} </Text>
          <Text style={styles.desc}>Provinsi {data.provinsi}</Text>
          <TouchableOpacity>
            <Text style={styles.changeAddress}>Ubah Alamat</Text>
          </TouchableOpacity>
        </View>
        <Gap height={32} />
        <View style={styles.total}>
          <Text style={styles.deskripsi}>Total Harga</Text>
          <Text style={styles.deskripsi}>
            Rp. {numberWithCommas(dataPesanan.totalHarga)}
          </Text>
        </View>
        <Gap height={33} />
        <Choose
          width={343}
          height={36}
          label="pilih ekspedisi"
          data={dataEkspedisi}
        />
        <Gap height={36} />
        <Text style={styles.deskripsi}>Biaya Ongkir :</Text>
        <View style={styles.total}>
          <Text style={styles.deskripsiKedua}>
            Untuk Berat : {dataPesanan.berat}
          </Text>
          <Text style={styles.deskripsi}>Rp. {numberWithCommas(15000)}</Text>
        </View>
        <View style={styles.total}>
          <Text style={styles.deskripsiKedua}>Estimasi Waktu</Text>
          <Text style={styles.deskripsi}>2 - 3 Hari</Text>
        </View>
      </View>
      <View style={styles.containerFooter}>
        <View style={styles.line} />
        <View style={styles.totalKedua}>
          <Text style={styles.desc}>Total Harga</Text>
          <Text style={styles.desc}>Rp. {numberWithCommas(515000)}</Text>
        </View>
        <View style={styles.button}>
          <Button
            type="iconText"
            onPress={() => navigation.navigate('CheckOut', data)}
            title="bayar"
          />
        </View>
      </View>
    </View>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  container: {
    padding: responsiveHeight(30),
  },
  textTanya: {
    fontFamily: fonts.primary.bold,
    color: colors.black,
    fontSize: RFValue(18, heightMobileUI),
  },
  alamatLengkap: {
    paddingHorizontal: responsiveWidth(11),
    paddingVertical: responsiveHeight(18),
    shadowColor: '#000',
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  myAddress: {
    fontFamily: fonts.primary.bold,
    color: colors.black,
    fontSize: RFValue(14, heightMobileUI),
  },
  desc: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(14, heightMobileUI),
  },
  changeAddress: {
    color: colors.main,
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(14, heightMobileUI),
    textAlign: 'right',
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deskripsi: {
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(20, heightMobileUI),
    color: colors.black,
  },
  deskripsiKedua: {
    fontSize: RFValue(20, heightMobileUI),
    color: colors.black,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: colors.grey,
  },
  totalKedua: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: responsiveHeight(30),
  },
  desc: {
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(20, heightMobileUI),
    color: colors.black,
  },
  button: {
    paddingHorizontal: responsiveHeight(30),
    paddingBottom: responsiveHeight(30),
  },
});
