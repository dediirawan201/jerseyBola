import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils';
import { IconSearch } from '../../../assets';

const Input = () => {
  return (
    <View style={styles.container}>
      <TextInput  placeholder='Cari Jersey...' style={styles.input}/>
    </View>
  )
}

export default Input;

const styles = StyleSheet.create({
    input:{
        paddingHorizontal:10,
        fontSize:13,
        color:'#000000',
        fontFamily:fonts.primary.regular
    }
})