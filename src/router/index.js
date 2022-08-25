import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Home, Jersey, Splash,Profile} from '../pages';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigator from '../components/molecules/BottomNavigator';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
      <Tab.Navigator tabBar={props => <BottomNavigator {...props}/>}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Jersey" component={Jersey} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  }

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="MainApp" component={MainApp} options={{headerShown:false}}/>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
      </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})