import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CardMenu} from '../../atoms';
import {dummyMenus} from '../../../assets';
import {
  colors,
  heightMobileUI,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils';

const ListMenu = ({data, onPress,navigation,menu}) => {
  return (
    <View style={styles.container}>
      {dummyMenus.map(menu => {
        return (
          <CardMenu
            menu={menu}
            navigation={navigation}
            onPress={onPress}
            data={data}
            key={menu.id}
            nama={menu.nama}
            gambar={menu.gambar}
          />
        );
      })}
    </View>
  );
};

export default ListMenu;

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(354),
    marginTop: responsiveHeight(30),
  },
});
