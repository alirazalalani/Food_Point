import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import {Button} from '@rneui/themed';
import {horizontalScale, verticalScale} from '../../utils/Dim';
import {COLORS, TITLE, PARAMETERS} from '../../global/styles';

const SigninWelcomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{alignItems: 'center', marginTop: verticalScale(30), flex: 1}}>
        <Text style={styles.text1}>DISCOVER RESTURANTS{'\n'} IN YOUR AREA</Text>
      </View>

      <View style={{flex: 1, justifyContent: 'center'}}>
        <Swiper loop autoplay>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0TqzB_HzxIef1BzIF63S82if3NRzSGCZRp8LKClzywl7BjjvJaVK2OltxxKqRE9Fjfxk&usqp=CAU',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slide2}>
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcM38XlxXvVVM6TZ7W2qMzORxmCAfaQJStLSElAJskyDdQeIMdTG90_AYNbI1s3HIVqpo&usqp=CAU',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
        </Swiper>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginHorizontal: horizontalScale(30),
        }}>
        <Button
          title="SIGN IN"
          buttonStyle={PARAMETERS.styledButton}
          titleStyle={PARAMETERS.buttonTitle}
          containerStyle={{
            marginTop: verticalScale(30),
            marginBottom: verticalScale(20),
          }}
        />
        <Button
          title={'Create an account'}
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
          containerStyle={{
            marginBottom: verticalScale(30),
          }}
        />
      </View>
    </View>
  );
};

export default SigninWelcomeScreen;

const styles = StyleSheet.create({
  text1: {
    color: COLORS.buttons,
    fontSize: verticalScale(28),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  createButton: {
    backgroundColor: 'white',

    borderRadius: 12,
    borderWidth: 1,

    borderColor: '#ff8c52',
  },
  createButtonTitle: {
    color: '#ff8c52',
    fontSize: verticalScale(16),
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
