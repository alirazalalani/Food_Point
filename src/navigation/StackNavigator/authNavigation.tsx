import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigatorParamList} from '../types';
import {
  RestaurantMapScreen,
  SigninScreen,
  SigninWelcomeScreen,
} from '../../screens';
import DrawerNavigator from '../Drawer/DrawerNavigator';

const AuthStack = createNativeStackNavigator<StackNavigatorParamList>();
const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen
        component={SigninWelcomeScreen}
        name={'SignInWelcomeScreen'}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        component={SigninScreen}
        name="SignInScreen"
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        component={DrawerNavigator}
        name="DrawerNavigator"
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="RestaurantMapScreen"
        component={RestaurantMapScreen}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
