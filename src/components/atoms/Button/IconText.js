import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconKeranjangPutih } from '../../../assets';
import Gap from '../Gap';
import { colors, fonts, heightMobileUI, responsiveHeight } from '../../../utils';
import {RFValue} from 'react-native-responsive-fontsize';

const IconText = ({title}) => {
  return (
    <View style={styles.container}>
        <IconKeranjangPutih/>
        <Gap width={10}/>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default IconText;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        padding:responsiveHeight(8)
    },
    text:{
        color:colors.white,
        fontSize:RFValue(18, heightMobileUI),
        fontFamily:fonts.primary.semiBold
    }
})