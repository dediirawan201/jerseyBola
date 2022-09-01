import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CardLiga = ({img}) => {
  return (
    <TouchableOpacity style={styles.container}> 
      <Image source={img} />
    </TouchableOpacity>
  );
};

export default CardLiga;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    PaddingRight:20,
    borderRadius:10,
    padding: 9,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  },
});
