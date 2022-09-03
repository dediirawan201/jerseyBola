import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListHistory from '../../components/molecules/ListHistory';
import { dummyPesanans } from '../../assets';
import { colors, responsiveHeight } from '../../utils';

const EditHostory = () => {
const dataPesanan = dummyPesanans
  return <ListHistory data={dataPesanan}/>
}

export default EditHostory;

const styles = StyleSheet.create({

})