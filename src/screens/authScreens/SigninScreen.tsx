import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState, useRef} from 'react';
import {COLORS, PARAMETERS, TITLE} from '../../global/styles';
import Header from '../../components/Header';
import {horizontalScale, verticalScale} from '../../utils/Dim';
import * as Animatable from 'react-native-animatable';
import {Icon} from '@rneui/base';
import {Button, SocialIcon} from '@rneui/themed';
const SigninScreen = () => {
  const [focusedTextInput, setFocusedTextInput] = useState<boolean>(false);
  const [focusedTextInput2, setFocusedTextInput2] = useState<boolean>(false);

  const animateTextInput1: any = useRef(1);
  const animateTextInput2: any = useRef(2);

  return (
    <View style={styles.container}>
      <Header title={'MY ACCOUNT'} type={'arrow-left'} />

      <View
        style={{marginLeft: horizontalScale(20), marginTop: verticalScale(10)}}>
        <Text style={TITLE}>Sign-In</Text>
      </View>
      <View style={{alignItems: 'center', marginTop: verticalScale(10)}}>
        <Text style={styles.text1}>
          Please enter the email and password{'\n'} registered with your account
        </Text>
      </View>
      {/* textinputs view */}
      <View style={{marginTop: verticalScale(20)}}>
        <View style={styles.Textnput1}>
          <Animatable.View
            animation={focusedTextInput2 ? '' : 'fadeInLeft'}
            duration={400}>
            <Icon
              name="email"
              type="material"
              iconStyle={{
                color: COLORS.grey3,
              }}
            />
          </Animatable.View>
          <TextInput
            placeholder="Enter Email"
            // style={styles.Textnput1}
            ref={animateTextInput1}
            onFocus={() => {
              setFocusedTextInput2(false);
            }}
            onBlur={() => {
              setFocusedTextInput2(true);
            }}
            style={{flex: 1}}
          />
        </View>
        <View style={styles.TextInput2}>
          <Animatable.View
            animation={focusedTextInput ? '' : 'fadeInLeft'}
            duration={400}>
            <Icon
              name="lock"
              type="material"
              iconStyle={{
                color: COLORS.grey3,
              }}
            />
          </Animatable.View>
          <TextInput
            placeholder="Enter Password"
            ref={animateTextInput2}
            onFocus={() => {
              setFocusedTextInput(false);
            }}
            onBlur={() => {
              setFocusedTextInput(true);
            }}
            style={{flex: 1}}
          />

          <Animatable.View
            animation={focusedTextInput ? '' : 'fadeInLeft'}
            duration={400}>
            <Icon
              name="visibility"
              type="material"
              iconStyle={{
                color: COLORS.grey3,
              }}
            />
          </Animatable.View>
        </View>
      </View>
      <View>
        <Button
          title="SIGN IN"
          buttonStyle={PARAMETERS.styledButton}
          titleStyle={PARAMETERS.buttonTitle}
          containerStyle={{
            marginHorizontal: 20,
            marginTop: verticalScale(30),
          }}
        />
      </View>
      <View style={{marginTop: verticalScale(20)}}>
        <Text style={{...styles.text1, textDecorationLine: 'underline'}}>
          Forgot Password?
        </Text>
      </View>
      <View style={{marginVertical: verticalScale(20)}}>
        <Text
          style={{
            ...styles.text1,

            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
          }}>
          OR
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: horizontalScale(20),
        }}>
        <SocialIcon
          button={true}
          type="facebook"
          title="Sign In with Facebook"
          style={styles.socialIcon}
          //   loading
          onPress={() => {
            console.log('jell');
          }}
        />
      </View>
      <View
        style={{
          marginHorizontal: horizontalScale(20),
        }}>
        <SocialIcon
          button={true}
          type="google"
          title="Sign In with Google"
          style={styles.socialIcon}
          //   loading
          onPress={() => {
            console.log('jell');
          }}
        />
      </View>
      <View
        style={{marginTop: verticalScale(20), marginLeft: horizontalScale(10)}}>
        <Text
          style={{
            ...styles.text1,
            textAlign: 'left',
          }}>
          New on Food Point?
        </Text>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <Button
          title={'Create an account'}
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
        />
      </View>
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: COLORS.grey3,
    fontSize: verticalScale(16),
    textAlign: 'center',
  },
  Textnput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: horizontalScale(20),
    borderRadius: 12,
    marginBottom: verticalScale(20),
    paddingHorizontal: horizontalScale(15),
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextInput2: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: horizontalScale(20),
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(15),
  },
  socialIcon: {
    width: '100%',
    alignSelf: 'center',
    borderRadius: 12,
  },
  createButton: {
    backgroundColor: 'white',

    borderRadius: 12,
    borderWidth: 1,
    marginHorizontal: horizontalScale(20),
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
