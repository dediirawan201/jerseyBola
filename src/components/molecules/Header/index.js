import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, responsiveHeight} from '../../../utils';
import {Button, Input} from '../../atoms';
import {IconKeranjang, IconSearch} from '../../../assets';

const Header = ({placeholder}) => {
  return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
            <IconSearch />
            <Input placeholder={placeholder} />
        </View>
      <View>
        <Button type='iconOnly' icon='keranjang'/>
      </View>
      </View>

  );
};

export default Header;

const styles = StyleSheet.create({
  container: { 
    marginTop:16,
    flexDirection:'row',
   
  },
  wrapper:{
    backgroundColor:colors.white,
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:12,
    flex:1,
    marginRight:15,
    borderRadius:5
  },
  
});
