import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from '../../../utils'

const Gap = ({height, width}) => {
  return (
    <View style={{height:height, width:width}}/>
  )
}

export default Gap

const styles = StyleSheet.create({
  
})