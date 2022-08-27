import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from './Icon'

const Button = ({type,icon,onPress, title}) => {
    if(type === 'iconOnly'){
      return <Icon icon={icon} onPress={onPress}/>
    }
  return (
    <TouchableOpacity>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button;

const styles = StyleSheet.create({})