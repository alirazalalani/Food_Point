import {StyleSheet, Text, View, Switch} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import {Avatar, Button, Icon} from '@rneui/themed';
import {COLORS} from '../global/styles';
import {horizontalScale, verticalScale} from '../utils/Dim';

const DrawerContent = (props: any) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={{backgroundColor: COLORS.buttons}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: verticalScale(5),
              paddingLeft: horizontalScale(15),
            }}>
            <Avatar
              rounded
              size={100}
              avatarStyle={styles.avatar}
              source={{
                uri: 'data:image/jpeg;base64,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',
              }}
            />
            <View style={{marginLeft: horizontalScale(15)}}>
              <Text style={styles.name}>Aliraza Lalani</Text>
              <Text style={styles.email}>ali@foodpoint.com</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: verticalScale(10),
              justifyContent: 'space-evenly',
              paddingBottom: verticalScale(5),
            }}>
            <View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: verticalScale(18),
                  }}>
                  1
                </Text>
                <Text style={{color: 'white', fontSize: verticalScale(14)}}>
                  My Favorites
                </Text>
              </View>
            </View>

            <View>
              <View
                style={{
                  marginLeft: horizontalScale(10),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: verticalScale(18),
                  }}>
                  0
                </Text>
                <Text style={{color: 'white', fontSize: verticalScale(14)}}>
                  Shopping Cart
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* draweritemlist is to show all the navigators we have made in drawernavigator */}
        <DrawerItemList {...props} />
        {/* after drawerList all the DrawerItems created here will not be a navigator but it will look like that only */}
        <DrawerItem
          label="Payment"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="credit-card-outline"
              color={color}
              size={size}
            />
          )}
          onPress={() => {}}
        />
        <DrawerItem
          label="Promotions"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="tag-heart"
              color={color}
              size={size}
            />
          )}
          onPress={() => {}}
        />
        <DrawerItem
          label="Settings"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="cog-outline"
              color={color}
              size={size}
            />
          )}
          onPress={() => {}}
        />
        <DrawerItem
          label="Help"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="lifebuoy"
              color={color}
              size={size}
            />
          )}
          onPress={() => {}}
        />

        <View style={{borderTopWidth: 1, borderTopColor: COLORS.grey5}}>
          <Text style={styles.preferences}>Preferences</Text>

          <View style={styles.switch}>
            <Text style={styles.darkThemeText}>Dark Theme</Text>
            <View>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={'#f4f3f4'}
              />
            </View>
          </View>
        </View>
      </DrawerContentScrollView>
      <DrawerItem
        label="Sign Out"
        icon={({color, size}) => (
          <Icon
            type="material-community"
            name="logout"
            color={color}
            size={size}
          />
        )}
        onPress={() => {}}
      />
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    borderWidth: 4,
    borderColor: 'white',
  },
  name: {
    fontWeight: 'bold',
    color: COLORS.Cardbackground,
    fontSize: verticalScale(18),
  },
  email: {
    color: COLORS.Cardbackground,
    fontSize: verticalScale(14),
  },
  preferences: {
    fontSize: verticalScale(18),
    color: COLORS.grey2,
    paddingTop: verticalScale(10),
    paddingLeft: horizontalScale(20),
  },
  switch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(5),
    paddingLeft: horizontalScale(20),
    paddingRight: horizontalScale(10),
  },
  darkThemeText: {
    fontSize: verticalScale(18),
    fontWeight: 'bold',
    color: COLORS.grey2,
    paddingTop: verticalScale(10),
    paddingLeft: 0,
  },
});
