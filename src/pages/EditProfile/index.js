import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Button, Choose, Gap, Input} from '../../components'
import { colors, responsiveHeight, responsiveWidth } from '../../utils'
import { dummyProfile } from '../../assets'
const EditProfile = () => {
    const dataProfile = dummyProfile
    const dataProvinsi= ['Jawa Tengah']
    const dataKota = ['Pekalongan']
  return (
    <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Input label='nama :' type='textProfile' value={dataProfile.nama} />
            <Gap  height={24}/>
            <Input label='Email :' type='textProfile' value={dataProfile.email} />
            <Gap  height={24}/>
            <Input label='No. Handphone :' type='textProfile' value={dataProfile.nomerHp} />
            <Gap  height={24}/>
            <Input label='Alamat :' type='textProfile' value={dataProfile.alamat} />
            <Gap  height={24}/>
            <Choose data={dataProvinsi} label='Provinsi'/>
            <Gap  height={24}/>
            <Choose data={dataKota} label='Kota'/>
            <Gap  height={24}/>
            <Text>Foto Profile :</Text>
            <Gap  height={19}/>
            <View style={styles.wrapper}>
                <Image source={dataProfile.avatar} style={styles.poto}/>
                <View style={styles.button}>
                <Button title='Change Foto' align='center'/>
                </View> 
            </View>
            <Gap height={35}/>
            <Button title='Submit' type="iconText"/>
        </ScrollView>
    </View>
  )
}

export default EditProfile;

const styles = StyleSheet.create({
    page:{
        backgroundColor:colors.white,
        flex:1,
        padding: responsiveHeight(30)
    },
    wrapper:{
        flexDirection:'row',
        alignItems:'center',
    },
    button:{
        marginHorizontal:10,
        flex:1,
    },
    poto:{
        width:responsiveWidth(167),
        height:responsiveHeight(159)
    }
})