import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigatorParamList} from '../types';
import {HomeScreen, MyAccountScreen, MyOrdersScreen, SearchScreen} from '../../screens';
import {COLORS} from '../../global/styles';

const ClientTabs = createBottomTabNavigator<BottomNavigatorParamList>();
const RootClientTabs = () => {
  return (
    <ClientTabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.buttons,
        headerShown: false,
      }}>
      <ClientTabs.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" type="material" color={color} size={size} />
          ),
        }}
      />
      <ClientTabs.Screen
        name={'SearchScreen'}
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" type="material" color={color} size={size} />
          ),
        }}
      />
      <ClientTabs.Screen
        name={'MyOrdersScreen'}
        component={MyOrdersScreen}
        options={{
          tabBarLabel: 'My Orders',
          tabBarIcon: ({color, size}) => (
            <Icon name="view-list" type="material" color={color} size={size} />
          ),
        }}
      />
       <ClientTabs.Screen
        name={'MyAccountScreen'}
        component={MyAccountScreen}
        options={{
          tabBarLabel: 'My Account',
          tabBarIcon: ({color, size}) => (
            <Icon name="person" type="material" color={color} size={size} />
          ),
        }}
      />
    </ClientTabs.Navigator>
  );
};

export default RootClientTabs;

const styles = StyleSheet.create({});
