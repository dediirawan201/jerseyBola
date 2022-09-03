import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Input } from '../../components';
import { colors, responsiveHeight } from '../../utils';

const EditPassword = () => {
  return (
    <View style={styles.page}>
        <View>
      <Input label='Password Lama :' type='textProfile' secureTextEntry/>
            <Gap  height={24}/>
            <Input label='Password Baru :' type='textProfile' secureTextEntry />
            <Gap  height={24}/>
            <Input label='Konfirmasi Password Baru :' type='textProfile' secureTextEntry/>
            <Gap  height={24}/>
        </View>
        <Button title='Submit' type='iconText'/>
    </View>
  )
}

export default EditPassword;

const styles = StyleSheet.create({
    page:{
        padding:responsiveHeight(30),
        flex:1,
        backgroundColor:colors.white,
        justifyContent:'space-between'
    }
})