import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconArrow } from '../../../assets';
import { colors, fonts, heightMobileUI, responsiveHeight, responsiveWidth, widthMobileUI } from '../../../utils';
import {RFValue} from 'react-native-responsive-fontsize';

const CardMenu = ({nama,gambar}) => {
  return (
    <TouchableOpacity style={styles.container}>
      {gambar}
  <Text style={styles.menuNama}>{nama}</Text>
  <IconArrow/>
    </TouchableOpacity>
  )
}

export default CardMenu; 

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:responsiveHeight(19),
    marginBottom: responsiveHeight(10),
    backgroundColor:colors.white,
    shadowColor: "#000",
    borderRadius:10,
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  },
  menuNama:{
    flex:1,
    marginLeft:responsiveWidth(10),
    fontFamily:fonts.primary.bold,
    fontSize:RFValue(18,heightMobileUI)
  }
})