import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconArrowRight, IconKeranjangPutih } from '../../../assets';
import Gap from '../Gap';
import { colors, fonts, heightMobileUI, responsiveHeight } from '../../../utils';
import {RFValue} from 'react-native-responsive-fontsize';

const IconText = ({title,onPress}) => {
  const TextIcon = () => {
    if(title === 'masukan keranjang'){
      return <IconKeranjangPutih/>
    }
    if(title === 'check out' || 'bayar' || 'submit'){
      return <IconArrowRight/>
    }
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <TextIcon/>
        <Gap width={10}/>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default IconText;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        padding:responsiveHeight(8),
        alignItems:'center'
    },
    text:{
        color:colors.white,
        fontSize:RFValue(24, heightMobileUI),
        fontFamily:fonts.primary.semiBold,
        textTransform:'capitalize'
    }
})