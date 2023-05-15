import {StyleSheet, View, StatusBar} from 'react-native';
import React from 'react';
import {COLORS} from './src/global/styles';
import RootNavigator from './src/navigation/RootNavigator/RootNavigator';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={COLORS.StatusBar}
        barStyle={'light-content'}
      />
      
      <RootNavigator />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
