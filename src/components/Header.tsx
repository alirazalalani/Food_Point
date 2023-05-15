import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {COLORS, PARAMETERS} from '../global/styles';
import {Icon} from '@rneui/themed';
import {horizontalScale, verticalScale} from '../utils/Dim';
const Header = ({title, type, navigation}: any) => {
  return (
    <View style={styles.header}>
      <Icon
        type="material-community"
        name={type}
        color={COLORS.HeaderText}
        size={28}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.buttons,
    height: PARAMETERS.headerHeight,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(20),
  },
  headerText: {
    color: COLORS.HeaderText,
    fontSize: verticalScale(22),
    fontWeight: 'bold',
    marginLeft: horizontalScale(25),
  },
});
