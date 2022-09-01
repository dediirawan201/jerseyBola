import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconArrow, IconBack, IconKeranjang, IconSearch } from '../../../assets';
import { colors, responsiveHeight, responsiveWidth } from '../../../utils';

const Icon = ({icon, onPress,position,zindex,left,top,warna}) => {
  const IconOnly = () => {
    if(icon === 'search'){
      return <IconSearch/>
    }
    if(icon === 'keranjang'){
      return <IconKeranjang/> 
    }
    if(icon === 'back'){
      return <IconBack/>
    }

  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.container(position,zindex,left,top,warna)}>
        <IconOnly/>
    </TouchableOpacity>
  )
}

export default Icon;

const styles = StyleSheet.create({
  container: (position,zindex,left,top,warna) => ({
      padding:responsiveWidth(11),
      backgroundColor:warna ? colors.main : colors.white,
      borderRadius:5,
      width:responsiveWidth(55),
      height:responsiveHeight(55),
      justifyContent:'center',
      alignItems:'center',
      position:position,
      zindex:zindex,
      left:left,
      top:top,
      
    
  })
})