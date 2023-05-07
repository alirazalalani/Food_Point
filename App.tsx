import {StyleSheet} from 'react-native';
import React from 'react';
import SigninScreen from './src/screens/authScreens/SigninScreen';
import {View} from 'react-native-animatable';
import {StatusBar} from 'react-native';
import {COLORS} from './src/global/styles';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={COLORS.StatusBar}
        barStyle={'light-content'}
      />
      <SigninScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
