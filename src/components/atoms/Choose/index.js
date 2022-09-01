import {StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {colors, fonts, heightMobileUI, responsiveWidth} from '../../../utils';
import {Picker} from '@react-native-picker/picker';
import {RFValue} from 'react-native-responsive-fontsize';

const Choose = ({label,data,width,height}) => {
    const [selectedValue,setSelectedValue] = useState('')
    console.log(data)
  const pickerRef = useRef();
  const open = () => {
    pickerRef.current.focus();
  };

  const close = () => {
    pickerRef.current.blur();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>
        <View style={styles.wrapper(width,height)}>
      <Picker
        ref={pickerRef}
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedValue(itemValue)
        }>
            {data.map((datas, index) => {
                return <Picker.Item label={datas} value={datas} key={index} />

            })}
      </Picker>

        </View>
    </View>
  );
};

export default Choose;

const styles = StyleSheet.create({
  container: {
    // marginRight: responsiveWidth(80),
    flex:1,
    width: responsiveWidth(100)
  },
  title:{
    fontFamily:fonts.primary.regular,
    color:colors.black,
    fontSize:RFValue(13,heightMobileUI),
    marginBottom:5
  },
  wrapper: (width,height) => ({
    borderWidth:1,
    borderWidth:1,
        borderColor:colors.grey,
        borderRadius:5,
        width:width,
        height:height,
        // alignItems:'center',
        justifyContent: 'center',
  }),
  picker:{
    fontFamily:fonts.primary.regular,
    color:colors.black
  }
});
