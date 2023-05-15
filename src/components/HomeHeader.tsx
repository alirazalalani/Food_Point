import {StyleSheet, Text, View} from 'react-native';
import {Icon, Badge, withBadge} from '@rneui/themed';
import React from 'react';
import {COLORS, PARAMETERS} from '../global/styles';
import {horizontalScale, verticalScale} from '../utils/Dim';

const HomeHeader = (props: any) => {
  const BadgedIcon: any = withBadge(0)(Icon);
  return (
    <View style={styles.headers}>
      <View style={{alignItems: 'center'}}>
        <Icon
          type="material-community"
          name="menu"
          color={COLORS.Cardbackground}
          size={32}
          onPress={() => {
            props.navigation.toggleDrawer();
          }}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            color: COLORS.Cardbackground,
            fontWeight: 'bold',
            fontSize: verticalScale(25),
          }}>
          Food Point
        </Text>
      </View>
      <View>
        <BadgedIcon
          type="material-community"
          name="cart"
          size={32}
          color={COLORS.Cardbackground}
        />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  headers: {
    backgroundColor: COLORS.buttons,
    height: PARAMETERS.headerHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(15),
  },
});
