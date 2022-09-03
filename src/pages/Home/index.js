import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  BannerSlider,
  Button,
  Gap,
  Header,
  ListJersey,
  ListLiga,
} from '../../components';
import {colors, fonts, responsiveHeight} from '../../utils';
import Carousel from '../../components/molecules/BannerSlider/Carousel';
import dummyData from '../../assets/data/dummyLigas';
import {dummyJerseys, dummyPesanans} from '../../assets';
const Home = ({navigation}) => {
  console.log(dummyData);
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{height: responsiveHeight(125), backgroundColor: colors.main}}
        />
        <View style={styles.wrapper}>
          <Header
            placeholder="Cari Jersey..."
            onPress={() => navigation.navigate('Keranjang',dummyPesanans)}
          />
          <Gap height={15} />
          <Carousel />
          <Gap height={18} />
          <View style={styles.wrappLiga}>
            <Text style={styles.titleliga}>Pilih Liga</Text>
            <ListLiga />
          </View>
          <Gap height={20} />
          <Text>
            Pilih{' '}
            <Text style={{fontFamily: fonts.primary.bold, color: 'black'}}>
              Jersey
            </Text>{' '}
            yang Anda Inginkan
          </Text>
          <Gap height={21} />
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
            {dummyJerseys.map(jersey => {
              return (
                <ListJersey
                  key={jersey.id}
                  gambar={jersey.gambar[0]}
                  nama={jersey.nama}
                  onPress={() => navigation.navigate('JerseyDetail', jersey)}
                />
              );
            })}
          </View>
          <Button title="Lihat Semua" align="center" />
        </View>
        <Gap height={120} />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    marginTop: -110,
    paddingHorizontal: 30,
  },
  titleliga: {
    fontSize: 18,
    fontFamily: fonts.primary.regular,
  },
});
