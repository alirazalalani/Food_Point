import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {restauratsData} from '../global/Data';
import {Icon} from '@rneui/themed';
import {horizontalScale, verticalScale} from '../utils/Dim';
import {COLORS} from '../global/styles';

const FoodCard = ({
  onPressFoodCard,
  restaurantName,
  deliveryAvailable,
  discountAvailable,
  numberOfReview,
  businessAddress,
  farAway,
  averageReview,
  images,
  screenWidth,
}: any) => {
  return (
    <TouchableOpacity>
      <View style={[styles.cardView, {width: screenWidth}]}>
        <Image
          resizeMode="cover"
          style={[styles.image, {width: screenWidth}]}
          source={{uri: images}}
        />
        <View>
          <View>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.distance}>
              <Icon
                name="place"
                type="material"
                size={18}
                iconStyle={{marginTop: verticalScale(3)}}
              />
              <Text style={styles.Min}>{farAway} Min</Text>
            </View>
            <View style={{flex: 9, flexDirection: 'row'}}>
              <Text style={styles.address}>{businessAddress}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.review}>
        <Text style={styles.averageReview}>{averageReview}</Text>
        <Text style={styles.numberOfReview}>{numberOfReview} reviews</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  cardView: {
    marginHorizontal: horizontalScale(9),
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.grey4,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  image: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 150,
  },
  restaurantName: {
    fontSize: verticalScale(17),
    fontWeight: 'bold',
    color: COLORS.grey1,
    marginTop: verticalScale(5),
  },
  distance: {
    flex: 4,
    flexDirection: 'row',
    borderRightColor: COLORS.grey4,
    borderRightWidth: 1,
    alignItems: 'center',
  },
  Min: {
    fontSize: verticalScale(12),
    fontWeight: 'bold',
    paddingTop: verticalScale(5),
    color: COLORS.grey3,
  },
  address: {
    fontSize: verticalScale(12),
    paddingHorizontal: horizontalScale(10),
    paddingTop: verticalScale(5),
    color: COLORS.grey2,
  },
  review: {
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    padding: 2,
    alignItems: 'center',
    backgroundColor: 'rgba(52,52,52,0.3)',
    position: 'absolute',
    top: 0,
    right: 10,
  },
  averageReview: {
    color: COLORS.Cardbackground,
    fontWeight: 'bold',
    fontSize: verticalScale(20),
    marginTop: verticalScale(-3),
  },
  numberOfReview: {
    color: 'white',
    fontSize: verticalScale(13),
    marginRight: 0,
    marginLeft: 0,
  },
});
