import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardKeranjang } from '../../atoms'
import { responsiveWidth } from '../../../utils'

const ListKeranjang = ({keranjangs}) => {
  return (
    <View style={styles.container}>
        {keranjangs.map(keranjang => {
            return <CardKeranjang datas={keranjang} key={keranjang.id}/>
        })}
      {/* <Text>ListKeranjang</Text> */}
    </View>
  )
}

export default ListKeranjang;

const styles = StyleSheet.create({
    container:{
        padding:responsiveWidth(30)
    }
})