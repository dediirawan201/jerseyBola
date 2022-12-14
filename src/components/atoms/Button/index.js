import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from './Icon';
import {colors, fonts, heightMobileUI} from '../../../utils';
import { IconKeranjang } from '../../../assets';
import IconText from './IconText';
import {RFValue} from 'react-native-responsive-fontsize';

const Button = ({type, icon, onPress, title, align, zindex, position,left,top, warna}) => {
  if (type === 'iconOnly') {
    return (
      <Icon zindex={zindex} position={position} icon={icon} onPress={onPress} left={left} top={top} warna={warna}/>
    );
  
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {type === 'iconText' ? <IconText onPress={onPress} title={title}/> : <Text style={styles.text(align)}>{title}</Text> }
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#22668A',
    padding: 8,
    borderRadius: 5,
  },
  text: align => ({
    textAlign: align,
    color: colors.white,
    fontFamily:fonts.primary.bold,
    fontSize:RFValue(18,heightMobileUI)
  }),
});
