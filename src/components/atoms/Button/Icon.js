import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconKeranjang, IconSearch } from '../../../assets';
import { colors } from '../../../utils';

const Icon = ({icon, onPress}) => {
  const IconOnly = () => {
    if(icon === 'search'){
      return <IconSearch/>
    }
    if(icon === 'keranjang'){
      return <IconKeranjang/>
    }

  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <IconOnly/>
    </TouchableOpacity>
  )
}

export default Icon;

const styles = StyleSheet.create({
  container:{
      padding:15,
      backgroundColor:colors.white,
      borderRadius:5
    
  }
})