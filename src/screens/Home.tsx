import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Actions as NavigationActions} from 'react-native-router-flux';
import {Button} from '../components/Button';

const Home = () => {
  return (
    <View style={styles.container}>
      <Button text="Login" onPress={NavigationActions.login} />
      <Button text="Schools" onPress={NavigationActions.schools} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
