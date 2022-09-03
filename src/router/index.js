import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Home,
  Jersey,
  Splash,
  Profile,
  JerseyDetail,
  Keranjang,
  CheckOut,
  EditProfile,
  EditPassword,
  EditHostory,
} from '../pages';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomNavigator from '../components/molecules/BottomNavigator';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Jersey"
        component={Jersey}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="JerseyDetail"
        component={JerseyDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Keranjang" component={Keranjang} />
      <Stack.Screen
        name="CheckOut"
        component={CheckOut}
        options={{title: 'Check Out'}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{title: 'Edit Profile'}}
      />
      <Stack.Screen
        name="EditPassword"
        component={EditPassword}
        options={{title: 'Edit Password'}}
      />
      <Stack.Screen
        name="History"
        component={EditHostory}
        options={{title: 'History Pesanan'}}
      />
    </Stack.Navigator>
  );
};

export default Router;
