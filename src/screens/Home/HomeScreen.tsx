import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import HomeHeader from '../../components/HomeHeader';
import {COLORS} from '../../global/styles';
import {horizontalScale, verticalScale} from '../../utils/Dim';
import {Icon} from '@rneui/themed';
import CountDown from 'react-native-countdown-component';
import {filterData, restauratsData} from '../../global/Data';
import FoodCard from '../../components/FoodCard';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const [delivery, setDelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState('0');
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <HomeHeader navigation={navigation}/>
      <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}>
        <View
          style={{backgroundColor: 'white', paddingBottom: verticalScale(5)}}>
          <View
            style={{
              marginTop: verticalScale(15),
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              onPress={() => {
                setDelivery(true);
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? COLORS.buttons : COLORS.grey5,
                }}>
                <Text>Delivery</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setDelivery(false);
                navigation.navigate('RestaurantMapScreen');
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? COLORS.grey5 : COLORS.buttons,
                }}>
                <Text>Pickup</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            margin: 10,
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: COLORS.grey5,
              borderRadius: 15,
              paddingVertical: verticalScale(5),
              justifyContent: 'space-between',
              paddingHorizontal: horizontalScale(20),
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: horizontalScale(10),
              }}>
              <Icon
                type="material-community"
                name="map-marker"
                color={COLORS.grey1}
                size={26}
              />
              <Text style={{marginLeft: horizontalScale(5)}}>
                22 Bessie Street
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: COLORS.Cardbackground,
                paddingHorizontal: horizontalScale(8),
                borderRadius: 15,
                marginHorizontal: horizontalScale(20),
              }}>
              <Icon
                type="material-community"
                name="clock-time-four"
                color={COLORS.grey1}
                size={26}
              />
              <Text style={{marginLeft: horizontalScale(5)}}>Now</Text>
            </View>
          </View>
          <View>
            <Icon
              type="material-community"
              name="tune"
              color={COLORS.grey1}
              size={26}
            />
          </View>
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Categories</Text>
        </View>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={item => item.id}
            extraData={indexCheck}
            renderItem={({item, index}) => {
              return (
                <Pressable
                  onPress={() => {
                    setIndexCheck(item.id);
                  }}>
                  <View
                    key={index}
                    style={
                      indexCheck === item.id
                        ? {...styles.smallCardSelected}
                        : {...styles.smallCard}
                    }>
                    <Image
                      resizeMode="contain"
                      source={item.image}
                      style={{
                        height: 50,
                        width: 50,
                      }}
                    />
                    <View>
                      <Text
                        style={
                          indexCheck === item.id
                            ? {color: COLORS.Cardbackground, fontWeight: 'bold'}
                            : {color: COLORS.grey2}
                        }>
                        {item.name}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              );
            }}
          />
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Free Delivery Now</Text>
        </View>

        <View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                marginLeft: horizontalScale(15),
                fontSize: verticalScale(16),
                marginTop: verticalScale(10),
                marginRight: horizontalScale(5),
                alignItems: 'center',
              }}>
              Options changing in
            </Text>
            <CountDown
              until={3600}
              size={14}
              timeToShow={['M', 'S']}
              digitStyle={{backgroundColor: COLORS.lightgreen}}
              digitTxtStyle={{color: COLORS.Cardbackground}}
              timeLabels={{m: 'Min', s: 'Sec'}}
            />
          </View>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={restauratsData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return (
                <View style={{marginRight: 5}}>
                  <FoodCard
                    screenWidth={SCREEN_WIDTH * 0.8}
                    images={item.images}
                    restaurantName={item.restaurantName}
                    farAway={item.farAway}
                    businessAddress={item.businessAddress}
                    averageReview={item.averageReview}
                    numberOfReview={item.numberOfReview}
                  />
                </View>
              );
            }}
          />
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Promotions Available</Text>
        </View>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={restauratsData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return (
                <View style={{marginRight: 5}}>
                  <FoodCard
                    screenWidth={SCREEN_WIDTH * 0.8}
                    images={item.images}
                    restaurantName={item.restaurantName}
                    farAway={item.farAway}
                    businessAddress={item.businessAddress}
                    averageReview={item.averageReview}
                    numberOfReview={item.numberOfReview}
                  />
                </View>
              );
            }}
          />
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Restaurants in your Area</Text>
        </View>
        <View style={{width: SCREEN_WIDTH, paddingTop: verticalScale(10)}}>
          {restauratsData.map((item, index) => {
            return (
              <View key={item.id} style={{paddingBottom: verticalScale(20)}}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.95}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
      {delivery && (
        <View style={styles.floatingButton}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RestaurantMapScreen');
            }}>
            <Icon
              name="place"
              type="material"
              size={32}
              color={COLORS.buttons}
            />
            <Text style={{color: COLORS.grey2, alignSelf: 'center'}}>Map</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deliveryButton: {
    paddingHorizontal: horizontalScale(20),
    borderRadius: 15,
    paddingVertical: verticalScale(5),
  },
  deliveryText: {
    fontSize: verticalScale(16),
  },
  headerText: {
    color: COLORS.grey2,
    fontSize: verticalScale(25),
    fontWeight: 'bold',
    paddingLeft: horizontalScale(10),
  },
  headerTextView: {
    backgroundColor: COLORS.grey5,
    marginVertical: verticalScale(15),
    paddingVertical: verticalScale(5),
  },
  smallCard: {
    borderRadius: 30,
    backgroundColor: COLORS.grey5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  smallCardSelected: {
    borderRadius: 30,
    backgroundColor: COLORS.buttons,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  floatingButton: {
    backgroundColor: 'white',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 15,
  },
});
