import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconHome, IconHomeAktif, IconShirt, IconShirtAktif, IconUser, IconUserAktif} from '../../../assets'
import { colors } from '../../../utils';
const TabNavigator = ({isFocused, onLongPress, onPress, label}) => {
    const Icon = () => {
        if(label === 'Home'){
            return isFocused ? <IconHome/> : <IconHomeAktif/>
        }
        if(label === 'Jersey'){
            return isFocused ? <IconShirt/> : <IconShirtAktif/>
        }
        if(label === 'Profile'){
            return isFocused ? <IconUser/> : <IconUserAktif/>
        }
        return <IconHome/>
    }
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={isFocused ? {selected: true} : {}}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
        <Icon/>
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flex:1
    },
    text: isFocused => ({
        color: isFocused ? '#FFFFFF' : colors.secondary
    })
    
});
