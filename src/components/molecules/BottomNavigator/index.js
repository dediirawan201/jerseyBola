import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import TabNavigator from '../TabNavigator';
import { colors, fonts } from '../../../utils';

const BottomNavigator = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabNavigator
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            label={label}
            key={index}
            options={options.tabBarAccessibilityLabel}
          />
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    backgroundColor: colors.main,
    paddingVertical:8,
    marginHorizontal:30,
    marginBottom:30,
    borderRadius:5,
    position:'absolute',
    bottom:0
    
  }
})
