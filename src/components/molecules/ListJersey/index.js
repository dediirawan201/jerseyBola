import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, CardJersey, Gap} from '../../atoms';
import {dummyLigas, dummyJerseys} from '../../../assets';
import {responsiveWidth} from '../../../utils';

const ListJersey = ({onPress,nama,gambar}) => {
  return (
    <View style={styles.container}>
            <CardJersey title={nama} image={gambar} />
            <Gap height={10} />
            <Button align="center" title="Detail" onPress={onPress} />
            <Gap height={32} />
    </View>
  );
};

export default ListJersey;

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyContent: 'space-between',
  },
});
