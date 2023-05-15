import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from '../StackNavigator/authNavigation';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
