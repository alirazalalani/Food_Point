import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerNavigatorParamList} from '../types';
import {BusinessConsole, HomeScreen} from '../../screens';
import RootClientTabs from '../ClientTabs/ClientTabs';
import {Icon} from '@rneui/themed';
import {COLORS} from '../../global/styles';
import DrawerContent from '../../components/DrawerContent';

const Drawer = createDrawerNavigator<DrawerNavigatorParamList>();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen
        name="RootClientTabs"
        component={RootClientTabs}
        options={{
          title: 'Client',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="home"
              type="material-community"
              size={size}
              color={focused ? '#7cc' : COLORS.grey2}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="BusinessConsole"
        component={BusinessConsole}
        options={{
          title: 'Business Console',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="business"
              type="material"
              size={size}
              color={focused ? '#7cc' : COLORS.grey2}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
