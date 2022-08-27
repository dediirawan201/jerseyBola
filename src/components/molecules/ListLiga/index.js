import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardLiga } from '../../atoms'
import { dummyLigas } from '../../../assets'

const ListLiga = () => {
  return (
    <View style={styles.container}>
      {dummyLigas.map(liga => {
        return(
          <CardLiga key={liga.id} img={liga.gambar}/>
        )
      })}
    </View>
  )
}

export default ListLiga

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    shadowColor: '#000',
    
  }
})