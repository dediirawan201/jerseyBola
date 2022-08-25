import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Logo, Logo2 } from '../../assets'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('MainApp')
        },3000)
    },[navigation]) 
  return (
    <View style={styles.page}>
            <Logo/>
      <View style={styles.container}>
        <Logo2/>
      </View>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    container:{
        position:'absolute',
        bottom:0,
        right:0
    }
})