import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors, fonts, heightMobileUI, responsiveHeight, responsiveWidth } from '../../../utils';
import {RFValue} from 'react-native-responsive-fontsize';

const Input = ({placeholder,label,width,height, type}) => {
  if(type === 'textarea') {
    return(
      <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>
      <TextInput multiline={true} numberOfLines={3} placeholder={placeholder} style={styles.input(width,height)}/>
    </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>
      <TextInput  placeholder={placeholder} style={styles.input(width,height)}/>
    </View>
  )
}

export default Input;

const styles = StyleSheet.create({
    input: (width,height) => ({
        paddingHorizontal:10,
        fontSize:13,
        color:'#000000',
        fontFamily:fonts.primary.regular,
        borderWidth:1,
        borderColor:colors.grey,
        borderRadius:5,
        width:width,
        height:height,
        textAlignVertical:'top'
        
    }),
    container:{
    },
    title:{
      fontFamily:fonts.primary.regular,
      fontSize:RFValue(13,heightMobileUI),
      color:colors.black,
      marginBottom: responsiveHeight(5)
    }
})