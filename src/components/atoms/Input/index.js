import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors, fonts, heightMobileUI, responsiveHeight, responsiveWidth } from '../../../utils';
import {RFValue} from 'react-native-responsive-fontsize';

const Input = ({placeholder,label,width,height, type,value,secureTextEntry}) => {
  if(type === 'textarea') {
    return(
      <View style={styles.container}>
      <Text style={styles.title(type)}>{label}</Text>
      <TextInput multiline={true} numberOfLines={3} placeholder={placeholder} style={styles.input(width,height)}/>
    </View>
    )
  }
  if(type === 'textProfile') {
    return(
      <View style={styles.container}>
      <Text style={styles.title(type)}>{label}</Text>
      <TextInput value={value} secureTextEntry={secureTextEntry}  placeholder={placeholder} style={styles.inputProfile(width,height)}/>
    </View>
    )
  }
  return (
    <View style={styles.container}>
      <TextInput  placeholder={placeholder} style={styles.inputSearch}/>
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
    inputProfile: (width,height) => ({
      paddingHorizontal:10,
        fontSize:RFValue(18,heightMobileUI),
        color:'#000000',
        fontFamily:fonts.primary.regular,
        borderWidth:1,
        borderColor:colors.grey,
        borderRadius:5,
        width:width,
        height:height,
    }),
    title: (type) => ({
      fontFamily:fonts.primary.regular,
      fontSize: type === 'textProfile' ? RFValue(18,heightMobileUI) : RFValue(13,heightMobileUI),
      color:colors.black,
      marginBottom: responsiveHeight(5),
      textTransform:'capitalize'
    }),
    inputSearch:{
      paddingHorizontal:10,
      fontSize:13,
      color:'#000000',
      fontFamily:fonts.primary.regular,
    }
})