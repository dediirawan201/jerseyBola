import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {CardHistory} from '../../atoms';
import { colors, responsiveHeight } from '../../../utils';

const ListHistory = ({data}) => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
    {data.map(pesanan => {
      return (
        <View key={pesanan.id} style={styles.container}>
        <CardHistory data={pesanan}/>
        </View>
      )
    })}
    </ScrollView>
    </View>
  )
}

export default ListHistory;

const styles = StyleSheet.create({
  page:{
    flex:1,
    backgroundColor:colors.white,
    padding:responsiveHeight(30)
  },
  container:{
    backgroundColor:colors.white,
    borderRadius:10
  }
})