import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  colors,
  fonts,
  heightMobileUI,
  responsiveHeight,
  responsiveWidth,
  widthMobileUI,
} from '../../utils';
import {dummyMenus, dummyProfile} from '../../assets';
import {RFValue} from 'react-native-responsive-fontsize';
import {Gap, ListMenu} from '../../components';

const Profile = ({navigation}) => {
  const data = dummyProfile;
  const dataMenu = dummyMenus;
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Image source={data.avatar} style={styles.image} />
        <Gap height={10} />
        <Text style={styles.nama}>{data.nama}</Text>
        <Gap height={5} />
        <Text style={styles.desc}>No.HP : {data.nomerHp}</Text>
        <Text style={styles.desc}>
          {data.alamat} {data.kota} {data.provinsi} 
        </Text>
          <ListMenu data={data} navigation={navigation} menu={dataMenu}/>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.main,
    flex: 1,
  },
  container: {
    backgroundColor: colors.white,
    position: 'absolute',
    height: responsiveHeight(652),
    bottom: 0,
    width: responsiveWidth(414),
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
  },
  image: {
    marginTop: -responsiveHeight(80),
  },
  nama: {
    textTransform: 'capitalize',
    color: colors.black,
    fontFamily: fonts.primary.semiBold,
    fontSize: RFValue(24, heightMobileUI),
  },
  desc: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(18, heightMobileUI),
    color: colors.black,
  },

  
});
