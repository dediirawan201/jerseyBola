import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts, responsiveHeight, responsiveWidth } from '../../../utils'
import Button from '../Button'
import Gap from '../Gap'

const CardJersey = ({image,title,navigation}) => {
  return (
    <View>
        <View style={styles.wrapper}>
        <Image style={styles.jersey} source={image}/>
        <Text style={styles.nama}>{title}</Text>
        </View>

    </View>
  )
}

export default CardJersey

const styles = StyleSheet.create({
    jersey:{
        width:responsiveWidth(124),
        height:responsiveHeight(124),
        marginBottom:5
    },
    wrapper:{
        paddingHorizontal:13,
        paddingTop:11,
        paddingBottom:45,
        backgroundColor:'#FFF6D5',
        alignItems:'center',
        borderRadius:10,
        height:responsiveHeight(210),
        // width:responsiveWidth(125)

    },
    nama:{
        fontSize:13,
        fontFamily:fonts.primary.bold,
        width:responsiveWidth(100),
        textAlign:'center',
        color:colors.black
    }

})